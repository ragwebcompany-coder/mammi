// Έλεγχος ακεραιότητας του παραγόμενου site:
// σπασμένοι σύνδεσμοι, εικόνες/βίντεο που λείπουν, άκυρο JSON-LD,
// hreflang που δείχνει στο πουθενά, sitemap, credit CLINICBRAIN.
import { readFileSync, existsSync, readdirSync, statSync } from "node:fs";
import { resolve, dirname, join, relative } from "node:path";
import { fileURLToPath } from "node:url";
import { BASE } from "./data.mjs";

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const html = [];
(function walk(d) {
  for (const e of readdirSync(d)) {
    if (e === "_build" || e === "node_modules" || e.startsWith(".")) continue;
    const p = join(d, e);
    if (statSync(p).isDirectory()) walk(p);
    else if (e.endsWith(".html")) html.push(p);
  }
})(ROOT);

const problems = [];
const add = (f, msg) => problems.push(`${relative(ROOT, f)}: ${msg}`);
const exists = (p) => existsSync(p) || existsSync(join(p, "index.html"));
// Το 404.html σερβίρεται από οποιοδήποτε βάθος, οπότε έχει απόλυτες διαδρομές.
const resolveHref = (dir, h) => (h.startsWith("/") ? resolve(ROOT, "." + h) : resolve(dir, h));

let links = 0, assets = 0, ld = 0;

for (const f of html) {
  const src = readFileSync(f, "utf8");
  const dir = dirname(f);

  // --- σύνδεσμοι
  for (const m of src.matchAll(/href="([^"]+)"/g)) {
    const h = m[1];
    if (/^(https?:|mailto:|tel:|#|data:)/.test(h)) continue;
    links++;
    const target = resolveHref(dir, h.split("#")[0].split("?")[0]);
    if (!exists(target)) add(f, `σπασμένος σύνδεσμος → ${h}`);
  }
  // --- εικόνες, βίντεο, css, js
  for (const m of src.matchAll(/(?:src|poster|data-src|data-loop-src|data-full)="([^"]+)"/g)) {
    const h = m[1];
    if (/^(https?:|data:)/.test(h)) continue;
    assets++;
    if (!existsSync(resolve(dir, h))) add(f, `λείπει αρχείο → ${h}`);
  }
  // --- CSS url() στο style attribute
  for (const m of src.matchAll(/url\('([^']+)'\)/g)) {
    if (/^(https?:|data:)/.test(m[1])) continue;
    assets++;
    if (!existsSync(resolve(dir, m[1]))) add(f, `λείπει αρχείο (css url) → ${m[1]}`);
  }
  // --- JSON-LD
  for (const m of src.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) {
    ld++;
    try {
      const o = JSON.parse(m[1].replace(/\\u003c/g, "<"));
      if (!o["@type"]) add(f, "JSON-LD χωρίς @type");
      if (!o["@context"]) add(f, `JSON-LD χωρίς @context (${o["@type"]})`);
    } catch (e) { add(f, "άκυρο JSON-LD: " + e.message); }
  }
  // --- hreflang
  for (const m of src.matchAll(/<link rel="alternate" hreflang="([^"]+)" href="([^"]+)"/g)) {
    const p = m[2].replace(BASE + "/", "");
    if (!exists(resolve(ROOT, p || "index.html"))) add(f, `hreflang ${m[1]} → ${m[2]} δεν υπάρχει`);
  }
  // --- canonical
  const can = src.match(/<link rel="canonical" href="([^"]+)"/);
  if (can) {
    const p = can[1].replace(BASE + "/", "");
    if (!exists(resolve(ROOT, p || "index.html"))) add(f, `canonical → ${can[1]} δεν υπάρχει`);
  } else if (!f.endsWith("404.html")) add(f, "λείπει canonical");
  // --- credit
  if (!src.includes("clinicbrain.gr")) add(f, "λείπει το credit CLINICBRAIN");
  // --- alt σε εικόνες
  for (const m of src.matchAll(/<img\b([^>]*)>/g)) {
    if (!/\balt=/.test(m[1])) add(f, "εικόνα χωρίς alt: " + m[1].slice(0, 60));
  }
}

// --- sitemap
const sm = readFileSync(join(ROOT, "sitemap.xml"), "utf8");
const locs = [...sm.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
for (const l of locs) {
  const p = l.replace(BASE + "/", "");
  if (!exists(resolve(ROOT, p || "index.html"))) problems.push(`sitemap: ${l} δεν υπάρχει`);
}
// κάθε indexable σελίδα στο sitemap;
const inSitemap = new Set(locs.map((l) => l.replace(BASE + "/", "").replace(/\/$/, "")));
for (const f of html) {
  const rp = relative(ROOT, f).replace(/index\.html$/, "").replace(/\/$/, "");
  if (rp === "404.html") continue;
  if (!inSitemap.has(rp)) problems.push(`εκτός sitemap: /${rp}`);
}

console.log(`Σελίδες: ${html.length} · σύνδεσμοι: ${links} · αρχεία: ${assets} · JSON-LD: ${ld} · sitemap: ${locs.length}`);
if (problems.length) {
  console.log(`\n✗ ${problems.length} προβλήματα:`);
  console.log(problems.slice(0, 40).map((p) => "  " + p).join("\n"));
  if (problems.length > 40) console.log(`  … και ${problems.length - 40} ακόμη`);
  process.exit(1);
}
console.log("\n✓ κανένα πρόβλημα");
