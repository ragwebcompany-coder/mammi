// ============================================================
//  BNL — γεννήτρια στατικού site.  Τρέξε:  node _build/build.mjs
//  (πρώτα το python3 _build/make_assets.py, αν άλλαξαν τα media)
//
//  Ποτέ μην πειράζεις τα .html — γράφονται από εδώ.
// ============================================================
import { writeFileSync, mkdirSync, rmSync, existsSync, readdirSync, statSync } from "node:fs";
import { dirname, resolve, join } from "node:path";
import { fileURLToPath } from "node:url";
import {
  BASE, BIZ, LANGS, t, CATEGORIES, AREAS, TECH, QUIZ, REELS, POSTERS,
  SPACE_PHOTOS, CREDENTIALS, STATS, CONTACT_CHANNELS,
} from "./data.mjs";
import { SERVICES } from "./services.mjs";
import { POSTS } from "./posts.mjs";
import {
  esc, attr, raw, ICONS, UI, head, header, footer, crumbs, ctaBand,
  rel, abs, depthOf, routePath, servicePath, areaPath, postPath,
  studioLD, personLD, breadcrumbLD, faqLD, sectionHead, serviceCard,
} from "./ui.mjs";

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const written = [];

function out(path, html) {
  const file = path.endsWith("/") || path === "" ? path + "index.html" : path;
  const full = resolve(ROOT, file);
  mkdirSync(dirname(full), { recursive: true });
  writeFileSync(full, html.trim() + "\n", "utf8");
  written.push(file);
}

// Καθαρίζει τις παραγόμενες σελίδες πριν το build, ώστε να μη μένουν ορφανές
// όταν αλλάξει ένα slug. Τα χειρόγραφα (styles.css, main.js, assets) μένουν.
const GENERATED_DIRS = ["ypiresies", "perioches", "arthra", "en", "i-maria-mammi", "o-choros", "epikoinonia"];
function clean() {
  for (const d of GENERATED_DIRS) {
    const p = join(ROOT, d);
    if (existsSync(p)) rmSync(p, { recursive: true, force: true });
  }
  for (const f of ["index.html", "404.html", "sitemap.xml", "robots.txt"]) {
    const p = join(ROOT, f);
    if (existsSync(p)) rmSync(p, { force: true });
  }
}

const svcByKey = Object.fromEntries(SERVICES.map((s) => [s.key, s]));
const featured = SERVICES.filter((s) => s.featured);
const trail = (lang, ...rest) => [
  { name: t(UI.nav.home, lang), path: routePath("home", lang) },
  ...rest,
];

// ============================================================
//  ΚΟΙΝΕΣ ΕΝΟΤΗΤΕΣ
// ============================================================

// ---- μπάρα λέξεων που κυλά ------------------------------------------
function marquee(lang) {
  const words = SERVICES.map((s) => t(s.nav, lang));
  const run = words.map((w) => `<span>${esc(w)}</span><span class="dot" aria-hidden="true">✦</span>`).join("");
  return `
    <div class="marquee" aria-hidden="true"><div class="marquee-track">${run}${run}</div></div>`;
}

// ---- μετρητές --------------------------------------------------------
function statsRow(lang) {
  return `
    <section class="stats">
      <div class="container stats-grid">
        ${STATS.map(
          (s) => `<div class="stat reveal">
          <span class="stat-n" data-count="${s.n}" data-suffix="${attr(s.suffix)}">0</span>
          <span class="stat-l">${esc(t(s.label, lang))}</span>
        </div>`
        ).join("")}
      </div>
    </section>`;
}

// ---- υπηρεσίες με φίλτρα κατηγορίας ---------------------------------
function servicesSection(lang, depth, { title, eyebrow, lead } = {}) {
  const tabs = [
    `<button type="button" class="tab is-on" data-filter="all">${esc(t({ el: "Όλες", en: "All" }, lang))}</button>`,
    ...CATEGORIES.map(
      (c) => `<button type="button" class="tab" data-filter="${c.key}">${esc(t(c.name, lang))}</button>`
    ),
  ].join("");
  return `
    <section class="services" id="services">
      <div class="container">
        ${sectionHead(eyebrow, title, lead)}
        <div class="tabs reveal" role="tablist" data-tabs>${tabs}</div>
        <div class="svc-grid" data-svc-grid>${SERVICES.map((s) => serviceCard(s, lang, depth)).join("")}
        </div>
      </div>
    </section>`;
}

// ---- reels -----------------------------------------------------------
function reelsSection(lang, depth) {
  const r = (p) => rel(depth, p);
  const cards = REELS.map((v, i) => {
    const s = svcByKey[v.svc];
    return `
          <article class="reel reveal" data-reel data-index="${i}"
                   data-src="${r("assets/video/" + v.file + ".mp4")}"
                   data-cap="${attr(t(v.label, lang))} — ${attr(t(v.note, lang))}">
            <div class="reel-media">
              <video class="reel-video" muted loop playsinline preload="none"
                     poster="${r("assets/video/" + v.file + ".jpg")}"
                     data-loop-src="${r("assets/video/" + v.file + "-loop.mp4")}"
                     aria-label="${attr(t(v.label, lang))}"></video>
              <button class="reel-play" type="button" data-reel-open aria-label="${attr(t({ el: "Αναπαραγωγή", en: "Play" }, lang))}">${ICONS.play}</button>
            </div>
            <div class="reel-info">
              <h3>${esc(t(v.label, lang))}</h3>
              <p>${esc(t(v.note, lang))}</p>
              ${s ? `<a class="reel-link" href="${r(servicePath(s, lang))}">${esc(t(s.nav, lang))} ${ICONS.arrow}</a>` : ""}
            </div>
          </article>`;
  }).join("");
  return `
    <section class="reels" id="reels">
      <div class="container">
        ${sectionHead(
          t({ el: "Μέσα στην καμπίνα", en: "Inside the cabin" }, lang),
          t({ el: "Πώς <em>δουλεύουμε</em>, στην πράξη", en: "How we <em>work</em>, in practice" }, lang),
          t({
            el: "Μικρά αποσπάσματα από πραγματικές συνεδρίες. Πατήστε για να δείτε ολόκληρο το βίντεο με ήχο.",
            en: "Short clips from real sessions. Tap to watch the full video with sound.",
          }, lang)
        )}
      </div>
      <div class="reel-rail" data-rail>${cards}
      </div>
    </section>`;
}

// ---- quiz ------------------------------------------------------------
function quizSection(lang, depth) {
  const r = (p) => rel(depth, p);
  const qs = QUIZ.questions
    .map(
      (q, qi) => `
          <fieldset class="quiz-step${qi === 0 ? " is-on" : ""}" data-step="${qi}">
            <legend class="quiz-q"><span class="quiz-num">${qi + 1}<span aria-hidden="true">/${QUIZ.questions.length}</span></span>${esc(t(q.q, lang))}</legend>
            <div class="quiz-opts">
              ${q.options
                .map(
                  (o, oi) => `<button type="button" class="quiz-opt" data-keys="${attr(o.keys.join(","))}" data-q="${qi}" data-o="${oi}">${esc(t(o.label, lang))}</button>`
                )
                .join("")}
            </div>
          </fieldset>`
    )
    .join("");

  // Οι κάρτες των αποτελεσμάτων υπάρχουν όλες στο HTML και απλώς εμφανίζονται
  // — έτσι δεν διπλογράφεται το περιεχόμενο σε JSON.
  const pool = SERVICES.map(
    (s) => `
            <a class="quiz-card" data-key="${s.key}" href="${r(servicePath(s, lang))}" hidden>
              <span class="svc-icon" aria-hidden="true">${ICONS[s.icon] || ICONS.leaf}</span>
              <h4>${esc(t(s.h1, lang))}</h4>
              <p>${esc(t(s.lead, lang))}</p>
              <span class="quiz-go">${esc(t(UI.more, lang))} ${ICONS.arrow}</span>
            </a>`
  ).join("");

  return `
    <section class="quiz" id="quiz">
      <div class="container quiz-inner">
        <div class="quiz-copy reveal">
          <p class="eyebrow">${esc(t({ el: "Διαδραστικό", en: "Interactive" }, lang))}</p>
          <h2 class="section-title">${esc(t(QUIZ.title, lang))}</h2>
          <p class="section-lead">${esc(t(QUIZ.lead, lang))}</p>
          <p class="quiz-note">${ICONS.leaf}<span>${esc(t({ el: "Η ιδέα από την αφίσα μας «Τα σημάδια που στέλνει το δέρμα σου».", en: "Inspired by our poster “The signs your skin sends you”." }, lang))}</span></p>
        </div>

        <form class="quiz-box reveal" data-quiz novalidate>
          <div class="quiz-bar" aria-hidden="true"><span data-quiz-bar></span></div>
          ${qs}
          <div class="quiz-result" data-quiz-result hidden>
            <p class="eyebrow">${esc(t(QUIZ.resultTitle, lang))}</p>
            <div class="quiz-cards" data-quiz-cards></div>
            <p class="quiz-disclaimer">${esc(t(QUIZ.resultLead, lang))}</p>
            <div class="quiz-actions">
              <a class="btn btn-solid" href="tel:${BIZ.phoneIntl}">${ICONS.phone}<span>${esc(BIZ.phoneDisplay)}</span></a>
              <button type="button" class="btn btn-ghost" data-quiz-reset>${esc(t(QUIZ.again, lang))}</button>
            </div>
          </div>
          <div class="quiz-pool" hidden>${pool}</div>
        </form>
      </div>
    </section>`;
}

// ---- τεχνολογίες -----------------------------------------------------
function techSection(lang) {
  return `
    <section class="tech" id="tech">
      <div class="container">
        ${sectionHead(
          t({ el: "Ο εξοπλισμός", en: "The equipment" }, lang),
          t({ el: "Τι υπάρχει στον χώρο<br />και <em>γιατί</em>", en: "What is in the room<br />and <em>why</em>" }, lang),
          t({
            el: "Κανένα μηχάνημα δεν κάνει μόνο του το αποτέλεσμα. Το κάνει η σωστή επιλογή για το δικό σας δέρμα και η συνέπεια στις συνεδρίες.",
            en: "No device produces the result on its own. The right choice for your skin and consistency across sessions do.",
          }, lang)
        )}
        <div class="tech-grid">
          ${TECH.map(
            (m) => `<article class="tech-card reveal">
            <p class="tech-tag">${esc(t(m.tag, lang))}</p>
            <h3 class="tech-name">${esc(t(m.name, lang))}</h3>
            <p class="tech-text">${esc(t(m.text, lang))}</p>
          </article>`
          ).join("")}
        </div>
      </div>
    </section>`;
}

// ---- γκαλερί ---------------------------------------------------------
// Δύο ξεχωριστά πλέγματα: οι φωτογραφίες του χώρου (πλατιές) και τα
// ενημερωτικά poster (κάθετα). Μαζί σε ένα auto-fill έσπαγαν άσχημα.
function gallerySection(lang, depth, { full = false } = {}) {
  const r = (p) => rel(depth, p);
  const photos = SPACE_PHOTOS.map(
    (p, i) => `
          <button type="button" class="gal-item gal-photo reveal" data-gal data-full="${r("assets/" + p.file + ".jpg")}" data-cap="${attr(t(p.label, lang))}">
            <img src="${r("assets/" + p.file + "-900.jpg")}" width="${p.w}" height="${p.h}" loading="${i === 0 ? "eager" : "lazy"}" decoding="async" alt="${attr(t(p.label, lang))} — ${attr(t(BIZ.name, lang))}" />
            <span class="gal-cap">${esc(t(p.label, lang))}</span>
          </button>`
  ).join("");
  const posters = (full ? POSTERS : POSTERS.slice(0, 4))
    .map(
      (p) => `
          <button type="button" class="gal-item gal-poster reveal" data-gal data-full="${r("assets/" + p.file + ".jpg")}" data-cap="${attr(t(p.label, lang))}">
            <img src="${r("assets/" + p.file + "-thumb.jpg")}" width="560" height="700" loading="lazy" decoding="async" alt="${attr(t(p.label, lang))}" />
            <span class="gal-cap">${esc(t(p.label, lang))}</span>
          </button>`
    )
    .join("");
  return `
    <section class="gallery" id="gallery">
      <div class="container">
        ${sectionHead(
          t({ el: "Ο χώρος", en: "The space" }, lang),
          t({ el: "Ένα μικρό κέντρο στο <em>Ζηπάρι</em>", en: "A small centre in <em>Zipari</em>" }, lang),
          t({
            el: "Ήσυχος χώρος, ένα ραντεβού τη φορά, εύκολο παρκάρισμα. Πατήστε σε οποιαδήποτε εικόνα για μεγέθυνση.",
            en: "A quiet space, one appointment at a time, easy parking. Tap any image to enlarge.",
          }, lang)
        )}
        <div class="gal-photos">${photos}
        </div>

        <div class="gal-sub reveal">
          <h3>${esc(t({ el: "Ενημερωτικό υλικό", en: "Information material" }, lang))}</h3>
          <p>${esc(t({
            el: "Οι αφίσες που θα δείτε στον χώρο — τι είναι κάθε θεραπεία, με απλά λόγια.",
            en: "The posters you will see in the centre — what each treatment is, in plain language.",
          }, lang))}</p>
        </div>
        <div class="gal-posters">${posters}
        </div>
      </div>
    </section>`;
}

// ---- περιοχές --------------------------------------------------------
function areasSection(lang, depth) {
  const r = (p) => rel(depth, p);
  return `
    <section class="areas" id="areas">
      <div class="container">
        ${sectionHead(
          t({ el: "Πού βρισκόμαστε", en: "Where we are" }, lang),
          t({ el: "Στο <em>Ζηπάρι</em>, δέκα λεπτά από την Κω", en: "In <em>Zipari</em>, ten minutes from Kos Town" }, lang)
        )}
        <div class="area-grid">
          ${AREAS.map(
            (a) => `<a class="area-card reveal" href="${r(areaPath(a, lang))}">
            <span class="area-pin" aria-hidden="true">${ICONS.pin}</span>
            <span class="area-name">${esc(t(a.name, lang))}</span>
            <span class="area-km">${a.km === 0 ? esc(t({ el: "εδώ είμαστε", en: "we are here" }, lang)) : `${a.km} km`}</span>
          </a>`
          ).join("")}
        </div>
      </div>
    </section>`;
}

// ---- λωρίδα επικοινωνίας --------------------------------------------
function contactStrip(lang, depth) {
  const map = `https://www.google.com/maps?q=${BIZ.lat},${BIZ.lng}&hl=${lang}&z=15&output=embed`;
  return `
    <section class="contact-strip" id="contact">
      <div class="container contact-grid">
        <div class="contact-copy">
          ${sectionHead(
            t({ el: "Επικοινωνία", en: "Contact" }, lang),
            t({ el: "Ελάτε να τα <em>πούμε</em>", en: "Come and <em>talk</em> to us" }, lang),
            t(UI.bookLead, lang)
          )}
          <ul class="chan-list">
            ${CONTACT_CHANNELS.map(
              (c) => `<li class="chan reveal">
              <span class="chan-ico" aria-hidden="true">${ICONS[c.icon]}</span>
              <span class="chan-body">
                <span class="chan-label">${esc(t(c.label, lang))}</span>
                <a class="chan-value" href="${c.href}"${c.external ? ' target="_blank" rel="noopener"' : ""}>${esc(t(c.value, lang))}</a>
                <span class="chan-note">${esc(t(c.note, lang))}</span>
              </span>
            </li>`
            ).join("")}
          </ul>
          <div class="hours-card reveal">
            <h3>${ICONS.clock}<span>${esc(t(UI.hours, lang))}</span></h3>
            <table class="hours-table">
              <tbody>
                ${BIZ.hoursRows.map((h) => `<tr><th scope="row">${esc(t(h.d, lang))}</th><td>${esc(t(h.h, lang))}</td></tr>`).join("")}
              </tbody>
            </table>
          </div>
        </div>
        <div class="contact-map reveal">
          <iframe src="${map}" title="${attr(t({ el: "Χάρτης — Ζηπάρι, Κως", en: "Map — Zipari, Kos" }, lang))}" loading="lazy" referrerpolicy="no-referrer-when-downgrade" allowfullscreen></iframe>
          <a class="map-link" href="https://www.google.com/maps/search/?api=1&amp;query=${BIZ.lat},${BIZ.lng}" target="_blank" rel="noopener">${ICONS.pin}<span>${esc(t({ el: "Οδηγίες πρόσβασης", en: "Get directions" }, lang))}</span></a>
        </div>
      </div>
    </section>`;
}

// ============================================================
//  ΣΕΛΙΔΑ: ΑΡΧΙΚΗ
// ============================================================
function pageHome(lang) {
  const path = routePath("home", lang);
  const depth = depthOf(path);
  const r = (p) => rel(depth, p);
  const alt = routePath("home", lang === "el" ? "en" : "el");

  const T = {
    title: {
      el: "Κέντρο Αισθητικής & Αδυνατίσματος Κως | BNL — Μαρία Μάμμη, Ζηπάρι",
      en: "Beauty & Body Centre in Kos | BNL — Maria Mammi, Zipari",
    },
    desc: {
      el: "Κέντρο αισθητικής & αδυνατίσματος στο Ζηπάρι Κω. Καθαρισμός προσώπου, μεσοθεραπεία, RF, laser & ριζική αποτρίχωση, αδυνάτισμα, μασάζ — Μαρία Μάμμη, BSc Αισθητικός.",
      en: "BNL, aesthetics and body centre in Zipari, Kos. Facials, mesotherapy, RF, diode laser hair removal, electrolysis, slimming and massage, by Maria Mammi, BSc Aesthetician.",
    },
    kw: {
      el: "αισθητικός Κως, κέντρο αισθητικής Κως, αισθητικός Ζηπάρι, αποτρίχωση laser Κως, καθαρισμός προσώπου Κως, αδυνάτισμα Κως, μασάζ Κως, Μαρία Μάμμη",
      en: "beautician Kos, beauty salon Kos, aesthetician Zipari, laser hair removal Kos, facial Kos, slimming Kos, massage Kos, Maria Mammi",
    },
    h1: {
      el: 'Κέντρο Αισθητικής<br />&amp; Αδυνατίσματος <em>στην Κω</em>',
      en: 'Aesthetics &amp; Body Centre<br />on the island of <em>Kos</em>',
    },
    lead: {
      el: "Πρόσωπο, σώμα και αποτρίχωση στο Ζηπάρι. Κάθε θεραπεία ξεκινά από ανάλυση της επιδερμίδας και όχι από κατάλογο — γιατί το ίδιο πρωτόκολλο σπάνια ταιριάζει σε δύο ανθρώπους.",
      en: "Face, body and hair removal in Zipari. Every treatment starts with a skin analysis rather than a menu — because the same protocol rarely suits two people.",
    },
  };

  const chips = CREDENTIALS.slice(0, 4)
    .map((c) => `<li>${ICONS.check}<span>${esc(t(c.k, lang))}</span></li>`)
    .join("");

  const heroReel = REELS[0];
  const postCards = lang === "el" ? POSTS.slice(0, 3) : [];

  const ld = [
    { "@context": "https://schema.org", ...studioLD(lang) },
    { "@context": "https://schema.org", ...personLD(lang) },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": `${BASE}/#website`,
      name: t(BIZ.name, lang),
      url: abs(path),
      inLanguage: lang,
      publisher: { "@id": `${BASE}/#studio` },
    },
    breadcrumbLD(trail(lang)),
  ];

  return (
    head({
      lang, path, alt,
      title: t(T.title, lang),
      desc: t(T.desc, lang),
      keywords: t(T.kw, lang),
      bodyClass: "page-home",
      ld,
    }) +
    header(lang, path, "home", alt) +
    `
  <main id="main">
    <section class="hero" id="hero">
      <div class="hero-orbs" aria-hidden="true"><span></span><span></span><span></span></div>
      <div class="container hero-inner">
        <div class="hero-copy">
          <p class="eyebrow hero-eyebrow reveal">${ICONS.pin}<span>${esc(t(BIZ.street, lang))} · ${esc(t(BIZ.city, lang))}</span></p>
          <h1 class="hero-title reveal">${raw(t(T.h1, lang))}</h1>
          <p class="hero-sig reveal">${esc(t(BIZ.ownerFull, lang))} <span aria-hidden="true">·</span> ${esc(t(BIZ.role, lang))}</p>
          <p class="hero-lead reveal">${esc(t(T.lead, lang))}</p>
          <div class="hero-actions reveal">
            <a class="btn btn-solid" href="tel:${BIZ.phoneIntl}">${ICONS.phone}<span>${esc(BIZ.phoneDisplay)}</span></a>
            <a class="btn btn-outline" href="${r(routePath("services", lang))}">${esc(t(UI.allSvc, lang))}${ICONS.arrow}</a>
          </div>
          <ul class="hero-chips reveal">${chips}</ul>
        </div>

        <div class="hero-media">
          <figure class="hero-frame reveal">
            <img src="${r("assets/hero-portrait.jpg")}" width="1100" height="1375" fetchpriority="high" decoding="async"
                 alt="${attr(t({ el: "Ο χώρος αναμονής του BNL στο Ζηπάρι Κω", en: "The BNL waiting area in Zipari, Kos" }, lang))}" />
          </figure>
          <article class="hero-reel reveal" data-reel data-index="0"
                   data-src="${r("assets/video/" + heroReel.file + ".mp4")}"
                   data-cap="${attr(t(heroReel.label, lang))}">
            <video class="reel-video" muted loop playsinline preload="none"
                   poster="${r("assets/video/" + heroReel.file + ".jpg")}"
                   data-loop-src="${r("assets/video/" + heroReel.file + "-loop.mp4")}"
                   aria-label="${attr(t(heroReel.label, lang))}"></video>
            <button class="reel-play" type="button" data-reel-open aria-label="${attr(t(heroReel.label, lang))}">${ICONS.play}</button>
            <figcaption>${esc(t(heroReel.label, lang))}</figcaption>
          </article>
          <div class="hero-badge reveal">
            ${ICONS.clock}
            <span><strong>${esc(t({ el: "Δευ–Παρ", en: "Mon–Fri" }, lang))}</strong>09:00–13:00 · 17:00–20:00</span>
          </div>
        </div>
      </div>
      <a class="hero-scroll" href="#intro" aria-label="${attr(t({ el: "Στην επόμενη ενότητα", en: "To the next section" }, lang))}">${ICONS.down}</a>
    </section>
` +
    marquee(lang) +
    `
    <section class="intro" id="intro">
      <div class="container intro-grid">
        <div class="intro-copy">
          <p class="eyebrow reveal">${esc(t(UI.nav.about, lang))}</p>
          <h2 class="section-title reveal">${raw(t({ el: "Μία αισθητικός, <em>ένα ραντεβού</em> τη φορά", en: "One aesthetician, <em>one appointment</em> at a time" }, lang))}</h2>
          <p class="reveal">${esc(t({
            el: "Η Μαρία Μάμμη σπούδασε αισθητική τέσσερα χρόνια στο European University Cyprus και συνέχισε με μεταπτυχιακή εξειδίκευση στο Καποδιστριακό, καθώς και με πιστοποίηση στην ηλεκτρική αποτρίχωση και στο laser. Είναι επίσημο μέλος της CIDESCO Hellas και ενεργό μέλος του Συλλόγου Αισθητικών Δωδεκανήσου.",
            en: "Maria Mammi studied aesthetics for four years at European University Cyprus and continued with a postgraduate specialisation at the University of Athens, plus certification in electrolysis and laser. She is an official member of CIDESCO Hellas and an active member of the Dodecanese Aestheticians' Association.",
          }, lang))}</p>
          <p class="reveal">${esc(t({
            el: "Στο BNL δεν δουλεύουμε με τυποποιημένα πακέτα. Προηγείται πάντα ανάλυση της επιδερμίδας ή της σύστασης σώματος, και από εκεί προκύπτει τι έχει νόημα να γίνει, με ποια σειρά και κάθε πότε. Αν κάτι δεν χρειάζεται, σας το λέμε.",
            en: "At BNL we do not work with standard packages. A skin or body-composition analysis always comes first, and the plan follows from it: what makes sense, in what order and how often. If something is not needed, we say so.",
          }, lang))}</p>
          <a class="btn btn-ghost reveal" href="${r(routePath("about", lang))}">${esc(t({ el: "Το βιογραφικό της", en: "Her full background" }, lang))}${ICONS.arrow}</a>
        </div>
        <figure class="intro-media reveal">
          <img src="${r("assets/space-entrance-900.jpg")}" width="900" height="994" loading="lazy" decoding="async"
               alt="${attr(t({ el: "Η είσοδος του κέντρου BNL στο Ζηπάρι", en: "The entrance of the BNL centre in Zipari" }, lang))}" />
          <figcaption>${esc(t({ el: "Ο χώρος μας στο Ζηπάρι", en: "Our space in Zipari" }, lang))}</figcaption>
        </figure>
      </div>
    </section>
` +
    statsRow(lang) +
    servicesSection(lang, depth, {
      eyebrow: t(UI.nav.services, lang),
      title: t({ el: "Τι <em>κάνουμε</em>", en: "What we <em>do</em>" }, lang),
      lead: t({
        el: "Δεκαπέντε θεραπείες σε τέσσερις κατηγορίες. Διαλέξτε κατηγορία για να δείτε μόνο ό,τι σας ενδιαφέρει.",
        en: "Fifteen treatments across four categories. Pick a category to see only what concerns you.",
      }, lang),
    }) +
    reelsSection(lang, depth) +
    quizSection(lang, depth) +
    techSection(lang) +
    gallerySection(lang, depth) +
    areasSection(lang, depth) +
    (postCards.length
      ? `
    <section class="journal">
      <div class="container">
        ${sectionHead(
          t(UI.nav.blog, lang),
          t({ el: "Ό,τι μας ρωτάτε <em>πιο συχνά</em>", en: "What you <em>ask us</em> most" }, lang)
        )}
        <div class="post-grid">
          ${postCards
            .map(
              (p) => `<a class="post-card reveal" href="${r(postPath(p))}">
            <p class="post-meta"><time datetime="${p.date}">${fmtDate(p.date, lang)}</time> <span aria-hidden="true">·</span> ${p.read} ${esc(t(UI.readTime, lang))}</p>
            <h3>${esc(p.title)}</h3>
            <p class="post-ex">${esc(p.excerpt)}</p>
            <span class="post-go">${esc(t(UI.more, lang))} ${ICONS.arrow}</span>
          </a>`
            )
            .join("")}
        </div>
        <div class="section-cta reveal"><a class="btn btn-ghost" href="${r(routePath("blog", "el"))}">${esc(t(UI.backBlog, lang))}${ICONS.arrow}</a></div>
      </div>
    </section>`
      : "") +
    contactStrip(lang, depth) +
    `
  </main>` +
    ctaBand(lang, path) +
    footer(lang, path)
  );
}

// ---- ημερομηνίες -----------------------------------------------------
const MONTHS = {
  el: ["Ιανουαρίου", "Φεβρουαρίου", "Μαρτίου", "Απριλίου", "Μαΐου", "Ιουνίου", "Ιουλίου", "Αυγούστου", "Σεπτεμβρίου", "Οκτωβρίου", "Νοεμβρίου", "Δεκεμβρίου"],
  en: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
};
function fmtDate(iso, lang) {
  const [y, m, d] = iso.split("-").map(Number);
  return lang === "el" ? `${d} ${MONTHS.el[m - 1]} ${y}` : `${d} ${MONTHS.en[m - 1]} ${y}`;
}

// ============================================================
//  ΣΕΛΙΔΑ: Η ΜΑΡΙΑ
// ============================================================
function pageAbout(lang) {
  const path = routePath("about", lang);
  const depth = depthOf(path);
  const r = (p) => rel(depth, p);
  const alt = routePath("about", lang === "el" ? "en" : "el");
  const tr = trail(lang, { name: t(UI.nav.about, lang), path });

  const story = {
    el: [
      "Η Μαρία Μάμμη σπούδασε αισθητική για τέσσερα χρόνια στο European University Cyprus. Δεν ήταν ταχύρρυθμο σεμινάριο ούτε πιστοποίηση μερικών μηνών: ήταν πλήρης πανεπιστημιακός κύκλος, με ανατομία, δερματολογία, κοσμητολογία και κλινική πρακτική.",
      "Συνέχισε με μεταπτυχιακή εξειδίκευση στη Μικρασιατική Τραπεζούντιο Θεραπευτική στο Εθνικό και Καποδιστριακό Πανεπιστήμιο Αθηνών, μια κατεύθυνση που φέρνει στη σύγχρονη πρακτική τη λογική της ολιστικής φροντίδας. Εκεί συνδέεται και η δουλειά της με τα αιθέρια έλαια: είναι μέλος της dōTERRA και τα χρησιμοποιεί στοχευμένα στις συνεδρίες μασάζ και ρεφλεξολογίας.",
      "Παράλληλα εξειδικεύτηκε στην ηλεκτρική αποτρίχωση και στο laser — δύο πεδία που στην πράξη αλληλοσυμπληρώνονται και σπάνια τα βρίσκει κανείς μαζί στο ίδιο κέντρο. Το laser καθαρίζει γρήγορα μεγάλες επιφάνειες, η ριζική τελειώνει τη δουλειά εκεί που το laser δεν μπορεί, δηλαδή στις λευκές και στις πολύ λεπτές τρίχες.",
      "Είναι επίσημο μέλος της CIDESCO Hellas, του ελληνικού παραρτήματος του διεθνούς οργανισμού πιστοποίησης αισθητικής, και ενεργό μέλος του Συλλόγου Αισθητικής Δωδεκανήσου.",
      "Το BNL λειτουργεί στο Ζηπάρι της Κω. Είναι μικρό κέντρο, και αυτό είναι επιλογή: ένα ραντεβού τη φορά, χωρίς αναμονή και χωρίς να μοιράζεται η προσοχή. Η φιλοσοφία της δουλειάς είναι μία και τη λέμε σε κάθε πρώτη επίσκεψη — πρώτα ανάλυση, μετά πρόταση. Και αν κάτι δεν χρειάζεται, δεν προτείνεται.",
    ],
    en: [
      "Maria Mammi studied aesthetics for four years at European University Cyprus. Not a short course or a few months' certification: a full university degree, with anatomy, dermatology, cosmetology and clinical practice.",
      "She continued with a postgraduate specialisation in Asia Minor Trapezuntian Therapeutics at the National and Kapodistrian University of Athens, a direction that brings the logic of holistic care into modern practice. That is also where her work with essential oils connects: she is a dōTERRA member and uses them deliberately in massage and reflexology sessions.",
      "In parallel she specialised in electrolysis and in laser — two fields that complement each other in practice and are rarely found together in the same centre. Laser clears large areas quickly; electrolysis finishes the job where laser cannot, on white and very fine hair.",
      "She is an official member of CIDESCO Hellas, the Greek branch of the international aesthetics certification body, and an active member of the Dodecanese Association of Aestheticians.",
      "BNL operates in Zipari, Kos. It is a small centre, and that is a choice: one appointment at a time, no waiting and no divided attention. The working philosophy is one thing, and we say it at every first visit — analysis first, recommendation second. And if something is not needed, it is not recommended.",
    ],
  };

  const ld = [
    { "@context": "https://schema.org", ...personLD(lang) },
    breadcrumbLD(tr),
  ];

  return (
    head({
      lang, path, alt,
      title: t({
        el: "Μαρία Μάμμη, Αισθητικός BSc — Κως | BNL Ζηπάρι",
        en: "Maria Mammi, BSc Aesthetician — Kos | BNL Zipari",
      }, lang),
      desc: t({
        el: "Μαρία Μάμμη: τετραετές πτυχίο αισθητικής (European University Cyprus), μεταπτυχιακό στο Καποδιστριακό, πιστοποίηση σε laser και ριζική αποτρίχωση, μέλος CIDESCO Hellas.",
        en: "Maria Mammi: a four-year BSc in aesthetics (European University Cyprus), a postgraduate specialisation in Athens, laser and electrolysis certified, CIDESCO Hellas member.",
      }, lang),
      keywords: t({
        el: "Μαρία Μάμμη, αισθητικός Κως βιογραφικό, CIDESCO Hellas, αισθητικός Ζηπάρι",
        en: "Maria Mammi, aesthetician Kos, CIDESCO Hellas, beautician Zipari",
      }, lang),
      type: "profile",
      bodyClass: "page-about",
      ld,
    }) +
    header(lang, path, "about", alt) +
    crumbs(lang, path, tr) +
    `
  <main id="main">
    <section class="phead">
      <div class="container phead-inner">
        <p class="eyebrow reveal">${esc(t(BIZ.roleLong, lang))}</p>
        <h1 class="phead-title reveal">${esc(t(BIZ.owner, lang))}</h1>
        <p class="phead-lead reveal">${esc(t({
          el: "Τέσσερα χρόνια πανεπιστημιακών σπουδών, μεταπτυχιακή εξειδίκευση και δύο πιστοποιήσεις στην αποτρίχωση — σε ένα μικρό κέντρο στο Ζηπάρι.",
          en: "Four years of university study, a postgraduate specialisation and two hair-removal certifications — in a small centre in Zipari.",
        }, lang))}</p>
      </div>
    </section>

    <section class="bio">
      <div class="container bio-grid">
        <figure class="bio-media reveal">
          <img src="${r("assets/space-lounge-900.jpg")}" width="900" height="996" loading="eager" decoding="async"
               alt="${attr(t({ el: "Ο χώρος υποδοχής του BNL", en: "The BNL reception area" }, lang))}" />
          <figcaption>${esc(t({ el: "Ο χώρος υποδοχής, με το διαγνωστικό σύστημα APOPSIS", en: "The reception area, with the APOPSIS diagnostic system" }, lang))}</figcaption>
        </figure>
        <div class="bio-copy">
          ${t(story, lang).map((p) => `<p class="reveal">${esc(p)}</p>`).join("\n          ")}
        </div>
      </div>
    </section>

    <section class="creds">
      <div class="container">
        ${sectionHead(
          t({ el: "Σπουδές & ιδιότητες", en: "Education & memberships" }, lang),
          t({ el: "Τι υπάρχει <em>πίσω</em> από τη θεραπεία", en: "What stands <em>behind</em> the treatment" }, lang)
        )}
        <div class="cred-grid">
          ${CREDENTIALS.map(
            (c) => `<div class="cred reveal"><span class="cred-k">${esc(t(c.k, lang))}</span><span class="cred-v">${esc(t(c.v, lang))}</span></div>`
          ).join("")}
        </div>
      </div>
    </section>

    <section class="philosophy">
      <div class="container philosophy-inner reveal">
        <span class="philosophy-mark" aria-hidden="true">${ICONS.quote}</span>
        <blockquote>${esc(t(BIZ.promise, lang))}</blockquote>
        <cite>${esc(t(BIZ.ownerFull, lang))} · ${esc(t(BIZ.name, lang))}</cite>
      </div>
    </section>
` +
    techSection(lang) +
    `
  </main>` +
    ctaBand(lang, path) +
    footer(lang, path)
  );
}

// ============================================================
//  ΣΕΛΙΔΑ: ΟΛΕΣ ΟΙ ΥΠΗΡΕΣΙΕΣ
// ============================================================
function pageServicesHub(lang) {
  const path = routePath("services", lang);
  const depth = depthOf(path);
  const alt = routePath("services", lang === "el" ? "en" : "el");
  const tr = trail(lang, { name: t(UI.nav.services, lang), path });

  const catBlocks = CATEGORIES.map((c) => {
    const items = SERVICES.filter((s) => s.cat === c.key);
    return `
        <div class="cat-block">
          <div class="cat-head reveal">
            <h2>${esc(t(c.name, lang))}</h2>
            <p>${esc(t(c.lead, lang))}</p>
          </div>
          <div class="svc-grid">${items.map((s) => serviceCard(s, lang, depth)).join("")}
          </div>
        </div>`;
  }).join("");

  const ld = [
    breadcrumbLD(tr),
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: t(UI.allSvc, lang),
      itemListElement: SERVICES.map((s, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: t(s.h1, lang),
        url: abs(servicePath(s, lang)),
      })),
    },
  ];

  return (
    head({
      lang, path, alt,
      title: t({
        el: "Υπηρεσίες Αισθητικής Κως | Πρόσωπο, Σώμα, Αποτρίχωση — BNL",
        en: "Aesthetic Treatments in Kos | Face, Body, Hair Removal — BNL",
      }, lang),
      desc: t({
        el: "Οι υπηρεσίες του BNL στο Ζηπάρι Κω: καθαρισμός προσώπου, μεσοθεραπεία, RF, αντιγήρανση, ακμή, δυσχρωμίες, αδυνάτισμα, σύσφιξη, μασάζ και αποτρίχωση.",
        en: "All BNL treatments in Zipari, Kos: facials, mesotherapy, RF, anti-ageing, acne, pigmentation, slimming, firming, lymphatic drainage, massage, laser and electrolysis.",
      }, lang),
      keywords: t({
        el: "υπηρεσίες αισθητικής Κως, θεραπείες προσώπου Κως, θεραπείες σώματος Κως, αποτρίχωση Κως",
        en: "aesthetic treatments Kos, facial treatments Kos, body treatments Kos, hair removal Kos",
      }, lang),
      bodyClass: "page-services",
      ld,
    }) +
    header(lang, path, "services", alt) +
    crumbs(lang, path, tr) +
    `
  <main id="main">
    <section class="phead">
      <div class="container phead-inner">
        <p class="eyebrow reveal">${esc(t(UI.nav.services, lang))}</p>
        <h1 class="phead-title reveal">${raw(t({ el: "Δεκαπέντε θεραπείες, <em>ένα</em> πλάνο", en: "Fifteen treatments, <em>one</em> plan" }, lang))}</h1>
        <p class="phead-lead reveal">${esc(t({
          el: "Οι θεραπείες δεν λειτουργούν μεμονωμένα. Συνήθως δύο ή τρεις μαζί, στη σωστή σειρά, δίνουν αυτό που καμία από τις τρεις δεν θα έδινε μόνη της.",
          en: "Treatments do not work in isolation. Usually two or three together, in the right order, deliver what none of them would deliver alone.",
        }, lang))}</p>
      </div>
    </section>

    <section class="cats">
      <div class="container">${catBlocks}
      </div>
    </section>
` +
    quizSection(lang, depth) +
    techSection(lang) +
    `
  </main>` +
    ctaBand(lang, path) +
    footer(lang, path)
  );
}

// ============================================================
//  ΣΕΛΙΔΑ: ΜΙΑ ΥΠΗΡΕΣΙΑ
// ============================================================
function pageService(s, lang) {
  const path = servicePath(s, lang);
  const depth = depthOf(path);
  const r = (p) => rel(depth, p);
  const alt = servicePath(s, lang === "el" ? "en" : "el");
  const cat = CATEGORIES.find((c) => c.key === s.cat);
  const tr = trail(
    lang,
    { name: t(UI.nav.services, lang), path: routePath("services", lang) },
    { name: t(s.nav, lang), path }
  );

  // Οι «δείτε επίσης» είναι οι υπόλοιπες της ίδιας κατηγορίας, μετά μία από άλλη.
  const same = SERVICES.filter((x) => x.cat === s.cat && x.key !== s.key).slice(0, 3);
  const others = SERVICES.filter((x) => x.cat !== s.cat).slice(0, 3);
  const related = (same.length >= 3 ? same : same.concat(others)).slice(0, 3);

  const media = s.media.video
    ? `
        <article class="svc-hero-media reveal" data-reel data-index="0"
                 data-src="${r("assets/video/" + s.media.video + ".mp4")}"
                 data-cap="${attr(t(s.media.alt, lang))}">
          <video class="reel-video" muted loop playsinline preload="none"
                 poster="${r("assets/video/" + s.media.video + ".jpg")}"
                 data-loop-src="${r("assets/video/" + s.media.video + "-loop.mp4")}"
                 aria-label="${attr(t(s.media.alt, lang))}"></video>
          <button class="reel-play" type="button" data-reel-open aria-label="${attr(t({ el: "Αναπαραγωγή", en: "Play" }, lang))}">${ICONS.play}</button>
        </article>`
    : `
        <figure class="svc-hero-media svc-hero-still reveal">
          <button type="button" class="gal-item" data-gal data-full="${r("assets/" + s.media.img + ".jpg")}" data-cap="${attr(t(s.media.alt, lang))}">
            <img src="${r("assets/" + s.media.img + (s.media.img.startsWith("poster-") ? "-thumb" : "-900") + ".jpg")}"
                 width="900" height="1100" loading="eager" decoding="async" alt="${attr(t(s.media.alt, lang))}" />
          </button>
        </figure>`;

  const ld = [
    breadcrumbLD(tr),
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: t(s.h1, lang),
      description: t(s.desc, lang),
      url: abs(path),
      serviceType: t(s.nav, lang),
      category: t(cat.name, lang),
      provider: { "@id": `${BASE}/#studio` },
      areaServed: AREAS.map((a) => t(a.name, lang)),
      availableChannel: {
        "@type": "ServiceChannel",
        servicePhone: BIZ.phoneIntl,
        serviceLocation: { "@id": `${BASE}/#studio` },
      },
    },
    faqLD(t(s.faq, lang)),
  ];

  return (
    head({
      lang, path, alt,
      title: t(s.title, lang),
      desc: t(s.desc, lang),
      keywords: t(s.keywords, lang),
      image: s.media.video ? "assets/video/" + s.media.video + ".jpg" : "assets/" + s.media.img + ".jpg",
      bodyClass: "page-service",
      ld,
    }) +
    header(lang, path, "services", alt) +
    crumbs(lang, path, tr) +
    `
  <main id="main">
    <section class="svc-hero">
      <div class="container svc-hero-grid">
        <div class="svc-hero-copy">
          <p class="eyebrow reveal"><a href="${r(routePath("services", lang))}#${cat.key}">${esc(t(cat.name, lang))}</a></p>
          <h1 class="phead-title reveal">${esc(t(s.h1, lang))}</h1>
          <p class="phead-lead reveal">${esc(t(s.lead, lang))}</p>
          <ul class="svc-facts reveal">
            <li>${ICONS.clock}<span><strong>${esc(t(UI.duration, lang))}</strong>${esc(t(s.duration, lang))}</span></li>
            <li>${ICONS.pin}<span><strong>${esc(t(UI.address, lang))}</strong>${esc(t(BIZ.street, lang))}, ${esc(t(BIZ.city, lang))}</span></li>
          </ul>
          <div class="hero-actions reveal">
            <a class="btn btn-solid" href="tel:${BIZ.phoneIntl}">${ICONS.phone}<span>${esc(BIZ.phoneDisplay)}</span></a>
            <a class="btn btn-outline" href="${BIZ.instagram}" target="_blank" rel="noopener">${ICONS.instagram}<span>${esc(t(UI.dm, lang))}</span></a>
          </div>
        </div>
        ${media}
      </div>
    </section>

    <section class="svc-body">
      <div class="container svc-body-grid">
        <div class="prose">
          ${t(s.body, lang).map((p) => `<p class="reveal">${esc(p)}</p>`).join("\n          ")}
        </div>
        <aside class="svc-aside">
          <div class="incl-card reveal">
            <h2>${esc(t(UI.includes, lang))}</h2>
            <ul class="incl-list">
              ${t(s.includes, lang).map((i) => `<li>${ICONS.check}<span>${esc(i)}</span></li>`).join("")}
            </ul>
          </div>
          <div class="aside-cta reveal">
            <p>${esc(t(UI.bookLead, lang))}</p>
            <a class="btn btn-solid btn-block" href="tel:${BIZ.phoneIntl}">${ICONS.phone}<span>${esc(BIZ.phoneDisplay)}</span></a>
          </div>
        </aside>
      </div>
    </section>

    <section class="faq">
      <div class="container faq-inner">
        ${sectionHead(t(UI.faq, lang), esc(t(s.nav, lang)))}
        <div class="faq-list">
          ${t(s.faq, lang)
            .map(
              ([q, a], i) => `<details class="faq-item reveal"${i === 0 ? " open" : ""}>
            <summary>${esc(q)}<span class="faq-ico" aria-hidden="true">${ICONS.chevron}</span></summary>
            <div class="faq-a"><p>${esc(a)}</p></div>
          </details>`
            )
            .join("")}
        </div>
      </div>
    </section>

    <section class="related">
      <div class="container">
        ${sectionHead("", esc(t(UI.related, lang)))}
        <div class="svc-grid">${related.map((x) => serviceCard(x, lang, depth)).join("")}
        </div>
      </div>
    </section>
  </main>` +
    ctaBand(lang, path) +
    footer(lang, path)
  );
}

// ============================================================
//  ΣΕΛΙΔΑ: ΠΕΡΙΟΧΗ (τοπικό SEO)
// ============================================================
function pageArea(a, lang) {
  const path = areaPath(a, lang);
  const depth = depthOf(path);
  const r = (p) => rel(depth, p);
  const alt = areaPath(a, lang === "el" ? "en" : "el");
  const name = t(a.name, lang);
  const tr = trail(lang, { name, path });
  const picks = featured.slice(0, 4);

  const faq = {
    el: [
      [`Πόσο απέχει το BNL από ${name};`, a.km === 0 ? `Το κέντρο βρίσκεται στο Ζηπάρι. Έχετε φτάσει.` : `Περίπου ${a.km} χιλιόμετρα, δηλαδή λίγα λεπτά με αυτοκίνητο. Υπάρχει εύκολο παρκάρισμα έξω από τον χώρο.`],
      [`Χρειάζεται ραντεβού;`, `Ναι, λειτουργούμε αποκλειστικά κατόπιν ραντεβού, ώστε κάθε συνεδρία να γίνεται χωρίς βιασύνη. Τηλεφωνήστε στο ${BIZ.phoneDisplay} ή στείλτε μήνυμα στο Instagram.`],
      [`Ποιες ώρες είστε ανοιχτά;`, `Δευτέρα έως Παρασκευή, 09:00–13:00 και 17:00–20:00. Σάββατο και Κυριακή είμαστε κλειστά.`],
    ],
    en: [
      [`How far is BNL from ${name}?`, a.km === 0 ? `The centre is in Zipari itself. You have arrived.` : `About ${a.km} kilometres, so a few minutes by car. There is easy parking outside.`],
      [`Do I need an appointment?`, `Yes, we work strictly by appointment so every session runs without rushing. Call ${BIZ.phoneDisplay} or send a message on Instagram.`],
      [`What are your opening hours?`, `Monday to Friday, 09:00–13:00 and 17:00–20:00. We are closed on Saturday and Sunday.`],
    ],
  };

  const ld = [
    breadcrumbLD(tr),
    faqLD(t(faq, lang)),
    { "@context": "https://schema.org", ...studioLD(lang) },
  ];

  return (
    head({
      lang, path, alt,
      title: t({
        el: `Αισθητικός ${name} | BNL Κέντρο Αισθητικής, Κως`,
        en: `Beautician in ${name} | BNL Aesthetics, Kos`,
      }, lang),
      desc: t({
        el: `Κέντρο αισθητικής & αδυνατίσματος για ${name}. Θεραπείες προσώπου, σώματος και αποτρίχωση laser στο Ζηπάρι Κω, ${a.km === 0 ? "στην περιοχή σας" : `${a.km} km μακριά`}.`,
        en: `Aesthetics and body centre for ${name}. Face and body treatments and laser hair removal in Zipari, Kos, ${a.km === 0 ? "right in your area" : `${a.km} km away`}.`,
      }, lang),
      keywords: t({
        el: `αισθητικός ${name}, κέντρο αισθητικής ${name}, αποτρίχωση laser ${name}, θεραπείες προσώπου Κως`,
        en: `beautician ${name}, beauty salon ${name}, laser hair removal ${name}, facials Kos`,
      }, lang),
      bodyClass: "page-area",
      ld,
    }) +
    header(lang, path, "", alt) +
    crumbs(lang, path, tr) +
    `
  <main id="main">
    <section class="phead">
      <div class="container phead-inner">
        <p class="eyebrow reveal">${ICONS.pin}<span>${a.km === 0 ? esc(t({ el: "Εδώ είμαστε", en: "We are here" }, lang)) : `${a.km} km`}</span></p>
        <h1 class="phead-title reveal">${esc(t({ el: `Αισθητικός για ${name}`, en: `Your beautician for ${name}` }, lang))}</h1>
        <p class="phead-lead reveal">${esc(t(a.intro, lang))}</p>
        <div class="hero-actions reveal">
          <a class="btn btn-solid" href="tel:${BIZ.phoneIntl}">${ICONS.phone}<span>${esc(BIZ.phoneDisplay)}</span></a>
          <a class="btn btn-outline" href="${r(routePath("services", lang))}">${esc(t(UI.allSvc, lang))}${ICONS.arrow}</a>
        </div>
      </div>
    </section>

    <section class="services">
      <div class="container">
        ${sectionHead(
          t({ el: "Πιο δημοφιλή", en: "Most asked for" }, lang),
          t({ el: `Τι ζητούν πιο συχνά από <em>${name}</em>`, en: `What clients from <em>${name}</em> ask for` }, lang)
        )}
        <div class="svc-grid">${picks.map((x) => serviceCard(x, lang, depth)).join("")}
        </div>
        <div class="section-cta reveal"><a class="btn btn-ghost" href="${r(routePath("services", lang))}">${esc(t(UI.allSvc, lang))}${ICONS.arrow}</a></div>
      </div>
    </section>

    <section class="faq">
      <div class="container faq-inner">
        ${sectionHead("", esc(t(UI.faq, lang)))}
        <div class="faq-list">
          ${t(faq, lang)
            .map(
              ([q, ans], i) => `<details class="faq-item reveal"${i === 0 ? " open" : ""}>
            <summary>${esc(q)}<span class="faq-ico" aria-hidden="true">${ICONS.chevron}</span></summary>
            <div class="faq-a"><p>${esc(ans)}</p></div>
          </details>`
            )
            .join("")}
        </div>
      </div>
    </section>
` +
    contactStrip(lang, depth) +
    areasSection(lang, depth) +
    `
  </main>` +
    ctaBand(lang, path) +
    footer(lang, path)
  );
}

// ============================================================
//  ΣΕΛΙΔΑ: Ο ΧΩΡΟΣ
// ============================================================
function pageSpace(lang) {
  const path = routePath("space", lang);
  const depth = depthOf(path);
  const alt = routePath("space", lang === "el" ? "en" : "el");
  const tr = trail(lang, { name: t(UI.nav.space, lang), path });

  return (
    head({
      lang, path, alt,
      title: t({
        el: "Ο χώρος μας στο Ζηπάρι Κω | BNL Κέντρο Αισθητικής",
        en: "Our space in Zipari, Kos | BNL Aesthetics Centre",
      }, lang),
      desc: t({
        el: "Δείτε τον χώρο του BNL στο Ζηπάρι Κω: υποδοχή, καμπίνα θεραπειών, διαγνωστικό σύστημα APOPSIS και τα ενημερωτικά μας υλικά για κάθε θεραπεία.",
        en: "See the BNL space in Zipari, Kos: reception, treatment cabin, the APOPSIS diagnostic system and our information material for each treatment.",
      }, lang),
      keywords: t({
        el: "κέντρο αισθητικής Ζηπάρι, χώρος αισθητικής Κως, APOPSIS Κως",
        en: "beauty centre Zipari, aesthetics space Kos, APOPSIS Kos",
      }, lang),
      image: "assets/space-lounge.jpg",
      bodyClass: "page-space",
      ld: [breadcrumbLD(tr), { "@context": "https://schema.org", ...studioLD(lang) }],
    }) +
    header(lang, path, "space", alt) +
    crumbs(lang, path, tr) +
    `
  <main id="main">
    <section class="phead">
      <div class="container phead-inner">
        <p class="eyebrow reveal">${esc(t(UI.nav.space, lang))}</p>
        <h1 class="phead-title reveal">${raw(t({ el: "Ένα ραντεβού <em>τη φορά</em>", en: "One appointment <em>at a time</em>" }, lang))}</h1>
        <p class="phead-lead reveal">${esc(t({
          el: "Το BNL είναι μικρό κέντρο, και αυτό είναι επιλογή. Δεν υπάρχει αναμονή, δεν υπάρχουν παράλληλα ραντεβού και ο χρόνος της συνεδρίας είναι όλος δικός σας.",
          en: "BNL is a small centre, and that is a choice. There is no waiting room queue, no parallel appointments, and the session time is entirely yours.",
        }, lang))}</p>
      </div>
    </section>
` +
    gallerySection(lang, depth, { full: true }) +
    reelsSection(lang, depth) +
    techSection(lang) +
    contactStrip(lang, depth) +
    `
  </main>` +
    ctaBand(lang, path) +
    footer(lang, path)
  );
}

// ============================================================
//  ΣΕΛΙΔΑ: ΕΠΙΚΟΙΝΩΝΙΑ
// ============================================================
function pageContact(lang) {
  const path = routePath("contact", lang);
  const depth = depthOf(path);
  const alt = routePath("contact", lang === "el" ? "en" : "el");
  const tr = trail(lang, { name: t(UI.nav.contact, lang), path });

  const faq = {
    el: [
      ["Πώς κλείνω ραντεβού;", `Τηλεφωνικά στο ${BIZ.phoneDisplay} ή με μήνυμα στο Instagram ${BIZ.instagramHandle}. Απαντάμε καθημερινά μέσα στο ωράριο λειτουργίας.`],
      ["Πόσο πριν πρέπει να κλείσω;", "Για τις περισσότερες θεραπείες, μία με δύο ημέρες. Για laser σε μεγάλες περιοχές και για την πρώτη επίσκεψη με ανάλυση, καλό είναι νωρίτερα."],
      ["Υπάρχει πάρκινγκ;", "Ναι, υπάρχει εύκολο παρκάρισμα έξω από τον χώρο, στο Ζηπάρι."],
      ["Εξυπηρετείτε επισκέπτες του νησιού;", "Ναι, και μάλιστα συχνά το καλοκαίρι. Αν είστε σε διακοπές, τηλεφωνήστε μας ένα με δύο εικοσιτετράωρα νωρίτερα για να βρούμε ώρα."],
    ],
    en: [
      ["How do I book?", `By phone on ${BIZ.phoneDisplay} or by message on Instagram, ${BIZ.instagramHandle}. We reply daily within opening hours.`],
      ["How far in advance should I book?", "For most treatments, one to two days. For laser on large areas, and for a first visit with analysis, a little earlier is better."],
      ["Is there parking?", "Yes, there is easy parking right outside, in Zipari."],
      ["Do you see visitors to the island?", "Yes, and often in summer. If you are on holiday, call us a day or two ahead so we can find a slot."],
    ],
  };

  return (
    head({
      lang, path, alt,
      title: t({
        el: "Επικοινωνία & Ραντεβού | BNL Ζηπάρι, Κως — 22420 69729",
        en: "Contact & Appointments | BNL Zipari, Kos — +30 22420 69729",
      }, lang),
      desc: t({
        el: "Κλείστε ραντεβού στο BNL, Ζηπάρι Κω. Τηλέφωνο 22420 69729, Instagram @bnl_mariamammi. Δευτέρα έως Παρασκευή 09:00–13:00 και 17:00–20:00.",
        en: "Book an appointment at BNL, Zipari, Kos. Phone +30 22420 69729, Instagram @bnl_mariamammi. Monday to Friday 09:00–13:00 and 17:00–20:00.",
      }, lang),
      keywords: t({
        el: "BNL Κως τηλέφωνο, ραντεβού αισθητικός Κως, αισθητικός Ζηπάρι επικοινωνία",
        en: "BNL Kos phone, book beautician Kos, contact aesthetician Zipari",
      }, lang),
      bodyClass: "page-contact",
      ld: [
        breadcrumbLD(tr),
        faqLD(t(faq, lang)),
        { "@context": "https://schema.org", ...studioLD(lang) },
        {
          "@context": "https://schema.org",
          "@type": "ContactPage",
          url: abs(path),
          about: { "@id": `${BASE}/#studio` },
        },
      ],
    }) +
    header(lang, path, "contact", alt) +
    crumbs(lang, path, tr) +
    `
  <main id="main">
    <section class="phead">
      <div class="container phead-inner">
        <p class="eyebrow reveal">${esc(t(UI.nav.contact, lang))}</p>
        <h1 class="phead-title reveal">${raw(t({ el: "Ένα τηλεφώνημα <em>μακριά</em>", en: "One phone call <em>away</em>" }, lang))}</h1>
        <p class="phead-lead reveal">${esc(t(UI.bookLead, lang))}</p>
      </div>
    </section>
` +
    contactStrip(lang, depth) +
    `
    <section class="faq">
      <div class="container faq-inner">
        ${sectionHead("", esc(t(UI.faq, lang)))}
        <div class="faq-list">
          ${t(faq, lang)
            .map(
              ([q, ans], i) => `<details class="faq-item reveal"${i === 0 ? " open" : ""}>
            <summary>${esc(q)}<span class="faq-ico" aria-hidden="true">${ICONS.chevron}</span></summary>
            <div class="faq-a"><p>${esc(ans)}</p></div>
          </details>`
            )
            .join("")}
        </div>
      </div>
    </section>
` +
    areasSection(lang, depth) +
    `
  </main>` +
    ctaBand(lang, path) +
    footer(lang, path)
  );
}

// ============================================================
//  ΣΕΛΙΔΕΣ: BLOG (μόνο ελληνικά)
// ============================================================
function pageBlogHub() {
  const lang = "el";
  const path = routePath("blog", lang);
  const depth = depthOf(path);
  const r = (p) => rel(depth, p);
  const tr = trail(lang, { name: t(UI.nav.blog, lang), path });

  return (
    head({
      lang, path,
      title: "Άρθρα για το δέρμα & τις θεραπείες | BNL Κως",
      desc: "Πρακτικά άρθρα από το BNL στο Ζηπάρι Κω: αφυδάτωση, ακμή, δυσχρωμίες, laser το καλοκαίρι, exosomes, ρετινόλη, κατακράτηση. Γραμμένα για το κλίμα του νησιού.",
      keywords: "άρθρα αισθητικής, φροντίδα δέρματος Κως, συμβουλές αισθητικού",
      bodyClass: "page-blog",
      ld: [
        breadcrumbLD(tr),
        {
          "@context": "https://schema.org",
          "@type": "Blog",
          name: "BNL — Άρθρα",
          url: abs(path),
          inLanguage: "el",
          publisher: { "@id": `${BASE}/#studio` },
          blogPost: POSTS.map((p) => ({
            "@type": "BlogPosting",
            headline: p.title,
            url: abs(postPath(p)),
            datePublished: p.date,
          })),
        },
      ],
    }) +
    header(lang, path, "blog") +
    crumbs(lang, path, tr) +
    `
  <main id="main">
    <section class="phead">
      <div class="container phead-inner">
        <p class="eyebrow reveal">${esc(t(UI.nav.blog, lang))}</p>
        <h1 class="phead-title reveal">Ό,τι μας ρωτάτε <em>πιο συχνά</em></h1>
        <p class="phead-lead reveal">Κείμενα για τα πράγματα που ακούμε κάθε εβδομάδα στην καμπίνα — από την αφυδάτωση και το laser μέχρι τις βιταμίνες και τις θεραπείες σώματος. Γραμμένα από εμάς, όχι αντιγραμμένα από αλλού.</p>
      </div>
    </section>

    <section class="journal">
      <div class="container">
        <div class="post-grid post-grid--all">
          ${POSTS.map(
            (p) => `<a class="post-card reveal" href="${r(postPath(p))}">
            <p class="post-meta"><time datetime="${p.date}">${fmtDate(p.date, lang)}</time> <span aria-hidden="true">·</span> ${p.read} ${esc(t(UI.readTime, lang))}</p>
            <h2>${esc(p.title)}</h2>
            <p class="post-ex">${esc(p.excerpt)}</p>
            <span class="post-go">${esc(t(UI.more, lang))} ${ICONS.arrow}</span>
          </a>`
          ).join("")}
        </div>
      </div>
    </section>
  </main>` +
    ctaBand(lang, path) +
    footer(lang, path)
  );
}

function pagePost(p) {
  const lang = "el";
  const path = postPath(p);
  const depth = depthOf(path);
  const r = (x) => rel(depth, x);
  const tr = trail(
    lang,
    { name: t(UI.nav.blog, lang), path: routePath("blog", lang) },
    { name: p.title, path }
  );
  const rels = p.rel.map((k) => svcByKey[k]).filter(Boolean);
  const idx = POSTS.indexOf(p);
  const next = POSTS[(idx + 1) % POSTS.length];

  const body = p.body
    .map((b) => {
      if (typeof b === "string") return `<p class="reveal">${esc(b)}</p>`;
      if (b.h) return `<h2 class="reveal">${esc(b.h)}</h2>`;
      if (b.ul) return `<ul class="reveal">${b.ul.map((li) => `<li>${esc(li)}</li>`).join("")}</ul>`;
      return "";
    })
    .join("\n          ");

  return (
    head({
      lang, path,
      title: `${p.title} | BNL`,
      desc: p.desc,
      keywords: p.keywords,
      type: "article",
      bodyClass: "page-post",
      ld: [
        breadcrumbLD(tr),
        {
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: p.title,
          description: p.desc,
          url: abs(path),
          mainEntityOfPage: abs(path),
          datePublished: p.date,
          dateModified: p.date,
          inLanguage: "el",
          image: abs("assets/og.jpg"),
          author: { "@id": `${BASE}/#maria` },
          publisher: { "@id": `${BASE}/#studio` },
          wordCount: p.body.filter((b) => typeof b === "string").join(" ").split(/\s+/).length,
        },
      ],
    }) +
    header(lang, path, "blog") +
    crumbs(lang, path, tr) +
    `
  <main id="main">
    <article class="post">
      <header class="post-head container">
        <p class="eyebrow reveal"><time datetime="${p.date}">${fmtDate(p.date, lang)}</time> <span aria-hidden="true">·</span> ${p.read} ${esc(t(UI.readTime, lang))}</p>
        <h1 class="phead-title reveal">${esc(p.title)}</h1>
        <p class="phead-lead reveal">${esc(p.excerpt)}</p>
      </header>
      <div class="container post-body">
        <div class="prose">
          ${body}
        </div>
        <aside class="post-aside">
          <div class="incl-card reveal">
            <h2>${esc(t(UI.related, lang))}</h2>
            <ul class="incl-list incl-links">
              ${rels.map((s) => `<li>${ICONS.arrow}<a href="${r(servicePath(s, lang))}">${esc(t(s.nav, lang))}</a></li>`).join("")}
            </ul>
          </div>
          <div class="aside-cta reveal">
            <p>${esc(t(UI.bookLead, lang))}</p>
            <a class="btn btn-solid btn-block" href="tel:${BIZ.phoneIntl}">${ICONS.phone}<span>${esc(BIZ.phoneDisplay)}</span></a>
          </div>
        </aside>
      </div>
      <nav class="post-next container reveal" aria-label="Επόμενο άρθρο">
        <a href="${r(postPath(next))}">
          <span class="post-next-l">Επόμενο άρθρο</span>
          <span class="post-next-t">${esc(next.title)}</span>
          ${ICONS.arrow}
        </a>
      </nav>
    </article>
  </main>` +
    ctaBand(lang, path) +
    footer(lang, path)
  );
}

// ============================================================
//  404
// ============================================================
function page404() {
  const lang = "el";
  const path = "404.html";
  return (
    head({
      lang, path: "",
      title: "Η σελίδα δεν βρέθηκε | BNL Κως",
      desc: "Η σελίδα που ζητήσατε δεν υπάρχει.",
      bodyClass: "page-404",
    }).replace(`<link rel="canonical" href="${abs("")}" />`, '<meta name="robots" content="noindex, follow" />') +
    header(lang, "") +
    `
  <main id="main">
    <section class="phead phead--tall">
      <div class="container phead-inner">
        <p class="eyebrow">404</p>
        <h1 class="phead-title">Η σελίδα δεν βρέθηκε</h1>
        <p class="phead-lead">Μάλλον άλλαξε διεύθυνση. Δοκιμάστε από την αρχική ή δείτε όλες τις υπηρεσίες.</p>
        <div class="hero-actions">
          <a class="btn btn-solid" href="/">Αρχική</a>
          <a class="btn btn-outline" href="/ypiresies/">Οι υπηρεσίες μας</a>
        </div>
      </div>
    </section>
  </main>` +
    footer(lang, "")
  );
}

// ============================================================
//  SITEMAP / ROBOTS / DEPLOY
// ============================================================
function buildSitemap(entries) {
  const today = new Date().toISOString().slice(0, 10);
  const urls = entries
    .map(({ path, alts = [], pri, changefreq, lastmod }) => {
      const links = alts
        .map((a) => `\n    <xhtml:link rel="alternate" hreflang="${a.lang}" href="${abs(a.path)}" />`)
        .join("");
      return `  <url>
    <loc>${abs(path)}</loc>
    <lastmod>${lastmod || today}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${pri}</priority>${links}
  </url>`;
    })
    .join("\n");
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls}
</urlset>`;
}

const ROBOTS = `User-agent: *
Allow: /

Sitemap: ${BASE}/sitemap.xml
`;

// Vercel: καθαρά URLs χωρίς .html και σωστό caching στα media.
const VERCEL = {
  cleanUrls: true,
  trailingSlash: true,
  headers: [
    {
      source: "/assets/(.*)",
      headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }],
    },
    {
      source: "/(.*)",
      headers: [
        { key: "X-Content-Type-Options", value: "nosniff" },
        { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
      ],
    },
  ],
};

// Εναλλακτικά, για κοινό hosting με Apache.
const HTACCESS = `# BNL — Apache
Options -Indexes
DirectoryIndex index.html
ErrorDocument 404 /404.html

<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/css application/javascript image/svg+xml application/json
</IfModule>

<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType image/jpeg "access plus 1 year"
  ExpiresByType image/png  "access plus 1 year"
  ExpiresByType video/mp4  "access plus 1 year"
  ExpiresByType text/css   "access plus 1 month"
  ExpiresByType application/javascript "access plus 1 month"
</IfModule>

<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteCond %{HTTPS} off
  RewriteRule ^(.*)$ https://%{HTTP_HOST}/$1 [R=301,L]
  RewriteCond %{HTTP_HOST} ^www\\.(.*)$ [NC]
  RewriteRule ^(.*)$ https://%1/$1 [R=301,L]
</IfModule>
`;

// ============================================================
//  RUN
// ============================================================
clean();

const sitemap = [];
const pairPath = (fn) => ({ el: fn("el"), en: fn("en") });
const addPair = (paths, pri, changefreq) => {
  const alts = [
    { lang: "el", path: paths.el },
    { lang: "en", path: paths.en },
    { lang: "x-default", path: paths.el },
  ];
  sitemap.push({ path: paths.el, alts, pri, changefreq });
  sitemap.push({ path: paths.en, alts, pri, changefreq });
};

for (const lang of LANGS) {
  out(routePath("home", lang), pageHome(lang));
  out(routePath("about", lang), pageAbout(lang));
  out(routePath("services", lang), pageServicesHub(lang));
  out(routePath("space", lang), pageSpace(lang));
  out(routePath("contact", lang), pageContact(lang));
  for (const s of SERVICES) out(servicePath(s, lang), pageService(s, lang));
  for (const a of AREAS) out(areaPath(a, lang), pageArea(a, lang));
}

addPair(pairPath((l) => routePath("home", l)), "1.0", "monthly");
addPair(pairPath((l) => routePath("services", l)), "0.9", "monthly");
addPair(pairPath((l) => routePath("about", l)), "0.7", "yearly");
addPair(pairPath((l) => routePath("space", l)), "0.6", "yearly");
addPair(pairPath((l) => routePath("contact", l)), "0.8", "yearly");
for (const s of SERVICES) addPair(pairPath((l) => servicePath(s, l)), "0.8", "monthly");
for (const a of AREAS) addPair(pairPath((l) => areaPath(a, l)), "0.6", "monthly");

// Blog — μόνο ελληνικά
out(routePath("blog", "el"), pageBlogHub());
sitemap.push({ path: routePath("blog", "el"), pri: "0.7", changefreq: "monthly" });
for (const p of POSTS) {
  out(postPath(p), pagePost(p));
  sitemap.push({ path: postPath(p), pri: "0.6", changefreq: "yearly", lastmod: p.date });
}

out("404.html", page404());
writeFileSync(resolve(ROOT, "sitemap.xml"), buildSitemap(sitemap) + "\n");
writeFileSync(resolve(ROOT, "robots.txt"), ROBOTS);
writeFileSync(resolve(ROOT, "vercel.json"), JSON.stringify(VERCEL, null, 2) + "\n");
writeFileSync(resolve(ROOT, ".htaccess"), HTACCESS);

console.log(`✓ ${written.length} σελίδες`);
console.log(`  ${written.filter((f) => f.startsWith("en/")).length} αγγλικές · ${written.filter((f) => !f.startsWith("en/")).length} ελληνικές`);
console.log(`  sitemap: ${sitemap.length} URLs`);
