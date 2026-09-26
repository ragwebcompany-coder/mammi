// ============================================================
//  BNL — κοινό κέλυφος: εικονίδια, <head>, header, footer,
//  breadcrumbs, CTA bands και τα JSON-LD.
//  Όλα δέχονται `lang` ("el" | "en").
// ============================================================
import { BASE, BIZ, t, CATEGORIES, AREAS, CONTACT_CHANNELS } from "./data.mjs";
import { SERVICES } from "./services.mjs";

export const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
export const attr = (s) => esc(s).replace(/"/g, "&quot;");
// Το κείμενο του πελάτη περιέχει ήδη οντότητες (&amp;) — αυτό δεν τις διπλοκωδικοποιεί.
export const raw = (s) => String(s);

// ---------------------------------------------------------------- δρόμοι
// Κάθε σελίδα έχει διαδρομή φακέλου· το `depth` λέει πόσα ../ θέλει.
export const ROUTES = {
  home:     { el: "",                  en: "en/" },
  about:    { el: "i-maria-mammi/",    en: "en/about/" },
  services: { el: "ypiresies/",        en: "en/services/" },
  space:    { el: "o-choros/",         en: "en/space/" },
  contact:  { el: "epikoinonia/",      en: "en/contact/" },
  blog:     { el: "arthra/",           en: null },
};
export const servicePath = (s, lang) => (lang === "el" ? "ypiresies/" : "en/services/") + t(s.slug, lang) + "/";
export const areaPath    = (a, lang) => (lang === "el" ? "perioches/" : "en/areas/") + t(a.slug, lang) + "/";
export const postPath    = (p) => "arthra/" + p.slug + "/";
export const routePath   = (k, lang) => ROUTES[k][lang];
export const depthOf     = (path) => (path ? path.split("/").filter(Boolean).length : 0);

export const rel = (depth, p) => (depth ? "../".repeat(depth) : "") + p || "./";
export const abs = (p) => `${BASE}/${p}`;

// ---------------------------------------------------------------- εικονίδια
// Λεπτή γραμμή, στο ύφος του φύλλου στο λογότυπο.
const ln = (body, vb = "0 0 24 24") =>
  `<svg class="ico" viewBox="${vb}" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">${body}</svg>`;

export const ICONS = {
  scan:   ln(`<path d="M3 8V5a2 2 0 0 1 2-2h3M16 3h3a2 2 0 0 1 2 2v3M21 16v3a2 2 0 0 1-2 2h-3M8 21H5a2 2 0 0 1-2-2v-3"/><circle cx="12" cy="12" r="3.4"/><path d="M12 6.2v2M12 15.8v2M6.2 12h2M15.8 12h2"/>`),
  droplet:ln(`<path d="M12 3.2c3.2 3.6 5.4 6.3 5.4 9.1A5.4 5.4 0 0 1 12 17.7a5.4 5.4 0 0 1-5.4-5.4c0-2.8 2.2-5.5 5.4-9.1Z"/><path d="M9.6 12.6a2.4 2.4 0 0 0 2.4 2.4"/><path d="M5 20.4h14"/>`),
  spark:  ln(`<path d="M12 2.6 13.7 8 19 9.7 13.7 11.4 12 16.8 10.3 11.4 5 9.7 10.3 8Z"/><path d="M18.4 15.2 19.2 17.4 21.4 18.2 19.2 19 18.4 21.2 17.6 19 15.4 18.2 17.6 17.4Z"/>`),
  wave:   ln(`<path d="M2.6 9.2c2-2.4 4-2.4 6 0s4 2.4 6 0 4-2.4 6 0"/><path d="M2.6 14.8c2-2.4 4-2.4 6 0s4 2.4 6 0 4-2.4 6 0"/>`),
  leaf:   ln(`<path d="M4.4 19.6C2.6 12.4 5.6 5.4 19.4 4c1.2 12-4.6 17.2-12 18-.9.1-1.5.5-2 1.6"/><path d="M6.2 17.4C8.4 12 12.2 7.6 17.4 4.4"/>`),
  shield: ln(`<path d="M12 2.8 19.6 6v5.2c0 4.6-3.2 8.4-7.6 10-4.4-1.6-7.6-5.4-7.6-10V6Z"/><path d="m8.8 12 2.2 2.2 4.2-4.4"/>`),
  sun:    ln(`<circle cx="12" cy="12" r="4"/><path d="M12 2.6v2.2M12 19.2v2.2M2.6 12h2.2M19.2 12h2.2M5.4 5.4l1.6 1.6M17 17l1.6 1.6M18.6 5.4 17 7M7 17l-1.6 1.6"/>`),
  drop2:  ln(`<path d="M12 3.4c3 3.4 5 6 5 8.6a5 5 0 0 1-10 0c0-2.6 2-5.2 5-8.6Z"/><path d="M9.8 13.4a2.2 2.2 0 0 0 2.2 2.2"/>`),
  body:   ln(`<circle cx="12" cy="4.6" r="2"/><path d="M12 6.8v6.4M12 13.2 8.8 21M12 13.2 15.2 21M7.4 9.2 12 8l4.6 1.2"/>`),
  arrowup:ln(`<path d="M12 20.4V5.2"/><path d="m6.4 10.8 5.6-5.6 5.6 5.6"/><path d="M4.6 3.2h14.8"/>`),
  flow:   ln(`<path d="M5 4.4v5.2c0 2 1.6 2.8 3.5 3.4 1.9.6 3.5 1.4 3.5 3.4v3.2"/><path d="M19 4.4v5.2c0 2-1.6 2.8-3.5 3.4"/><circle cx="5" cy="3.2" r="1.2"/><circle cx="19" cy="3.2" r="1.2"/><circle cx="12" cy="20.8" r="1.2"/>`),
  hands:  ln(`<path d="M3.4 13.6c1.8-1.4 3.4-1.6 5-.6l3.6 2.2"/><path d="M12 15.2c2.6 0 4.6-.6 6.2-2 1.2-1 2.4-1.2 2.4-1.2"/><path d="M3.4 13.6 6 17.4c.6.9 1.5 1.4 2.6 1.4h6.2c1.6 0 2.8-.7 3.8-2l2-2.8"/><path d="M8.6 9.6c1.2-3 3.2-4.4 6-4.2"/>`),
  laser:  ln(`<path d="M9.4 2.8h5.2l1.2 7.4H8.2Z"/><path d="M8.2 10.2h7.6l-1 3.2H9.2Z"/><path d="M12 13.4v3"/><path d="M6.6 20.4c1.6-1.4 3.4-2.1 5.4-2.1s3.8.7 5.4 2.1"/>`),
  needle: ln(`<path d="m3.4 20.6 5-5"/><path d="m8.6 15.4 7-7 1.6 1.6-7 7Z"/><path d="m16.4 7.2 2.6-2.6a1.6 1.6 0 0 1 2.3 2.3L18.7 9.5Z"/><path d="m10.6 13.4 1.4 1.4"/>`),
  wax:    ln(`<path d="M6.4 9.4h11.2l-1 10a2 2 0 0 1-2 1.8H9.4a2 2 0 0 1-2-1.8Z"/><path d="M9.2 9.4V6.2a2.8 2.8 0 0 1 5.6 0v3.2"/><path d="M9.8 13.6h4.4"/>`),
  phone:  ln(`<path d="M6.2 3.4h3l1.6 4-2 1.4a12 12 0 0 0 5.4 5.4l1.4-2 4 1.6v3a2 2 0 0 1-2.2 2C10.6 18.2 5.8 13.4 4.2 5.6a2 2 0 0 1 2-2.2Z"/>`),
  mail:   ln(`<rect x="2.8" y="5" width="18.4" height="14" rx="2.2"/><path d="m3.6 6.6 8.4 6 8.4-6"/>`),
  instagram: ln(`<rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.2" cy="6.8" r=".9" fill="currentColor" stroke="none"/>`),
  pin:    ln(`<path d="M12 21.4s7-6.6 7-11.4a7 7 0 1 0-14 0c0 4.8 7 11.4 7 11.4Z"/><circle cx="12" cy="10" r="2.6"/>`),
  clock:  ln(`<circle cx="12" cy="12" r="9"/><path d="M12 6.8V12l3.4 2"/>`),
  play:   ln(`<path d="M8 5.4v13.2l11-6.6Z"/>`),
  close:  ln(`<path d="m5.6 5.6 12.8 12.8M18.4 5.6 5.6 18.4"/>`),
  check:  ln(`<path d="m4.6 12.4 4.8 4.8 10-10.4"/>`),
  arrow:  ln(`<path d="M4.4 12h15.2"/><path d="m13.6 6 6 6-6 6"/>`),
  chevron:ln(`<path d="m7.6 9.6 4.4 4.4 4.4-4.4"/>`),
  quote:  ln(`<path d="M9.4 6.4C6.6 7.6 5 10 5 13.2c0 2.6 1.5 4.4 3.6 4.4 1.9 0 3.2-1.4 3.2-3.2 0-1.8-1.2-3.1-2.9-3.1-.3 0-.6 0-.8.1.3-1.6 1.4-2.8 3-3.5Z" fill="currentColor" stroke="none"/><path d="M18.4 6.4c-2.8 1.2-4.4 3.6-4.4 6.8 0 2.6 1.5 4.4 3.6 4.4 1.9 0 3.2-1.4 3.2-3.2 0-1.8-1.2-3.1-2.9-3.1-.3 0-.6 0-.8.1.3-1.6 1.4-2.8 3-3.5Z" fill="currentColor" stroke="none"/>`),
  down:   `<svg class="ico-down" viewBox="0 0 14 30" fill="none" stroke="currentColor" stroke-width="1.1" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M7 2v24M2.6 21.6 7 26.4l4.4-4.8"/></svg>`,
};

// ---------------------------------------------------------------- κείμενα UI
export const UI = {
  nav: {
    home:     { el: "Αρχική", en: "Home" },
    about:    { el: "Η Μαρία", en: "About" },
    services: { el: "Υπηρεσίες", en: "Treatments" },
    space:    { el: "Ο χώρος", en: "The space" },
    blog:     { el: "Άρθρα", en: "Journal" },
    contact:  { el: "Επικοινωνία", en: "Contact" },
    book:     { el: "Κλείστε ραντεβού", en: "Book now" },
    menu:     { el: "Μενού", en: "Menu" },
    skip:     { el: "Μετάβαση στο περιεχόμενο", en: "Skip to content" },
    langSwitch: { el: "English", en: "Ελληνικά" },
  },
  more:      { el: "Περισσότερα", en: "Read more" },
  allSvc:    { el: "Όλες οι υπηρεσίες", en: "All treatments" },
  call:      { el: "Καλέστε μας", en: "Call us" },
  dm:        { el: "Μήνυμα στο Instagram", en: "Message on Instagram" },
  duration:  { el: "Διάρκεια", en: "Duration" },
  includes:  { el: "Τι περιλαμβάνει", en: "What it includes" },
  faq:       { el: "Συχνές ερωτήσεις", en: "Frequently asked" },
  related:   { el: "Δείτε επίσης", en: "See also" },
  hours:     { el: "Ωράριο", en: "Opening hours" },
  address:   { el: "Διεύθυνση", en: "Address" },
  breadcrumb:{ el: "Διαδρομή", en: "Breadcrumb" },
  category:  { el: "Κατηγορία", en: "Category" },
  readTime:  { el: "λεπτά ανάγνωσης", en: "min read" },
  backBlog:  { el: "Όλα τα άρθρα", en: "All articles" },
  bookLead:  {
    el: "Τα ραντεβού κλείνονται τηλεφωνικά ή με μήνυμα στο Instagram.",
    en: "Appointments are booked by phone or by message on Instagram.",
  },
};

// ---------------------------------------------------------------- JSON-LD
export const studioLD = (lang) => ({
  "@type": ["BeautySalon", "HealthAndBeautyBusiness", "LocalBusiness"],
  "@id": `${BASE}/#studio`,
  name: t(BIZ.name, lang),
  alternateName: "BNL Maria Mammi",
  slogan: t(BIZ.tagline, lang),
  url: abs(routePath("home", lang)),
  telephone: BIZ.phoneIntl,
  email: BIZ.email,
  image: abs("assets/og.jpg"),
  logo: abs("assets/logo-olive.png"),
  priceRange: "€€",
  currenciesAccepted: "EUR",
  address: {
    "@type": "PostalAddress",
    streetAddress: t(BIZ.street, lang),
    addressLocality: t(BIZ.city, lang),
    addressRegion: t(BIZ.region, lang),
    postalCode: BIZ.postal,
    addressCountry: BIZ.country,
  },
  geo: { "@type": "GeoCoordinates", latitude: BIZ.lat, longitude: BIZ.lng },
  hasMap: `https://www.google.com/maps/search/?api=1&query=${BIZ.lat},${BIZ.lng}`,
  areaServed: AREAS.map((a) => t(a.name, lang)).concat([t(BIZ.city, lang), t(BIZ.region, lang)]),
  openingHoursSpecification: [
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "09:00", closes: "13:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "17:00", closes: "20:00" },
  ],
  sameAs: [BIZ.instagram],
  founder: { "@id": `${BASE}/#maria` },
  employee: { "@id": `${BASE}/#maria` },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: t({ el: "Υπηρεσίες", en: "Treatments" }, lang),
    itemListElement: SERVICES.map((s) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name: t(s.h1, lang), url: abs(servicePath(s, lang)) },
    })),
  },
});

export const personLD = (lang) => ({
  "@type": "Person",
  "@id": `${BASE}/#maria`,
  name: t(BIZ.owner, lang),
  honorificSuffix: "MSc",
  jobTitle: t(BIZ.role, lang),
  image: abs("assets/og.jpg"),
  url: abs(routePath("about", lang)),
  worksFor: { "@id": `${BASE}/#studio` },
  alumniOf: [
    { "@type": "CollegeOrUniversity", name: "European University Cyprus" },
    { "@type": "CollegeOrUniversity", name: "National and Kapodistrian University of Athens" },
  ],
  memberOf: [
    { "@type": "Organization", name: "CIDESCO Hellas" },
    { "@type": "Organization", name: t({ el: "Σύλλογος Αισθητικών Δωδεκανήσου", en: "Dodecanese Association of Aestheticians" }, lang) },
    { "@type": "Organization", name: "dōTERRA" },
  ],
  sameAs: [BIZ.instagram],
});

export const jsonLd = (obj) => `<script type="application/ld+json">${JSON.stringify(obj).replace(/</g, "\\u003c")}</script>`;

export const breadcrumbLD = (trail) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: trail.map((x, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: x.name,
    item: abs(x.path),
  })),
});

export const faqLD = (pairs) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: pairs.map(([q, a]) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: { "@type": "Answer", text: a },
  })),
});

// ---------------------------------------------------------------- <head>
export function head({ lang, path, title, desc, keywords = "", ld = [], image = "assets/og.jpg", type = "website", bodyClass = "", alt = null }) {
  const depth = depthOf(path);
  const r = (p) => rel(depth, p);
  const other = lang === "el" ? "en" : "el";
  const hreflang = alt
    ? `
  <link rel="alternate" hreflang="el" href="${abs(lang === "el" ? path : alt)}" />
  <link rel="alternate" hreflang="en" href="${abs(lang === "en" ? path : alt)}" />
  <link rel="alternate" hreflang="x-default" href="${abs(lang === "el" ? path : alt)}" />`
    : "";
  return `<!DOCTYPE html>
<html lang="${lang}">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>${esc(title)}</title>
  <meta name="description" content="${attr(desc)}" />
  ${keywords ? `<meta name="keywords" content="${attr(keywords)}" />` : ""}
  <meta name="author" content="${attr(t(BIZ.name, lang))}" />
  <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1" />
  <meta name="theme-color" content="#4e522e" />
  <link rel="canonical" href="${abs(path)}" />${hreflang}

  <meta property="og:site_name" content="${attr(t(BIZ.name, lang))}" />
  <meta property="og:locale" content="${lang === "el" ? "el_GR" : "en_GB"}" />
  <meta property="og:type" content="${type}" />
  <meta property="og:title" content="${attr(title)}" />
  <meta property="og:description" content="${attr(desc)}" />
  <meta property="og:url" content="${abs(path)}" />
  <meta property="og:image" content="${abs(image)}" />
  <meta property="og:image:alt" content="${attr(t(BIZ.name, lang))}" />
  <meta name="twitter:card" content="summary_large_image" />

  <link rel="icon" href="${r("assets/favicon-32.png")}" sizes="32x32" />
  <link rel="icon" href="${r("assets/favicon-512.png")}" sizes="512x512" />
  <link rel="apple-touch-icon" href="${r("assets/apple-touch-icon.png")}" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link rel="preload" as="style" href="${FONTS}" />
  <link rel="stylesheet" href="${FONTS}" />
  <link rel="stylesheet" href="${r("styles.css")}" />
${ld.map((o) => "  " + jsonLd(o)).join("\n")}
</head>
<body class="${bodyClass}" data-lang="${lang}" data-other="${other}">`;
}

// EB Garamond + Manrope: και οι δύο σερβίρουν ελληνικό subset (ελέγχθηκε 20/9/2026).
export const FONTS =
  "https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400..700;1,400..600&family=Manrope:wght@300..700&display=swap";

// ---------------------------------------------------------------- header
export function header(lang, path, active = "", alt = null) {
  const depth = depthOf(path);
  const r = (p) => rel(depth, p);
  const on = (k) => (active === k ? ' aria-current="page"' : "");
  const svcLinks = CATEGORIES.map((c) => {
    const items = SERVICES.filter((s) => s.cat === c.key)
      .map((s) => `<li><a href="${r(servicePath(s, lang))}">${esc(t(s.nav, lang))}</a></li>`)
      .join("");
    return `<div class="sub-col"><p class="sub-head">${esc(t(c.name, lang))}</p><ul>${items}</ul></div>`;
  }).join("");

  // Ο εναλλάκτης γλώσσας δείχνει στην αντίστοιχη σελίδα όταν υπάρχει
  // (`alt`), αλλιώς στην αρχική της άλλης γλώσσας — π.χ. στα άρθρα,
  // που υπάρχουν μόνο στα ελληνικά.
  const otherHome = r(alt ?? routePath("home", lang === "el" ? "en" : "el"));

  return `
  <a class="skip-link" href="#main">${esc(t(UI.nav.skip, lang))}</a>
  <header class="site-header" id="top" data-header>
    <div class="header-inner container">
      <a class="brand" href="${r(routePath("home", lang))}" aria-label="${attr(t(BIZ.name, lang))}">
        <img src="${r("assets/logo.png")}" width="380" height="200" alt="${attr(t(BIZ.name, lang))}" class="brand-logo brand-logo--light" />
        <img src="${r("assets/logo-olive.png")}" width="380" height="200" alt="" aria-hidden="true" class="brand-logo brand-logo--dark" />
      </a>

      <button class="nav-toggle" type="button" aria-expanded="false" aria-controls="nav-panel" data-nav-toggle>
        <span class="nav-toggle-bars" aria-hidden="true"><span></span><span></span></span>
        <span class="visually-hidden">${esc(t(UI.nav.menu, lang))}</span>
      </button>

      <nav class="nav" id="nav-panel" aria-label="${attr(t(UI.nav.services, lang))}" data-nav>
        <ul class="nav-list">
          <li><a href="${r(routePath("home", lang))}"${on("home")}>${esc(t(UI.nav.home, lang))}</a></li>
          <li><a href="${r(routePath("about", lang))}"${on("about")}>${esc(t(UI.nav.about, lang))}</a></li>
          <li class="has-sub">
            <a href="${r(routePath("services", lang))}"${on("services")}>${esc(t(UI.nav.services, lang))} <span class="sub-caret" aria-hidden="true">${ICONS.chevron}</span></a>
            <div class="sub"><div class="sub-grid">${svcLinks}</div></div>
          </li>
          <li><a href="${r(routePath("space", lang))}"${on("space")}>${esc(t(UI.nav.space, lang))}</a></li>
          ${lang === "el" ? `<li><a href="${r(routePath("blog", "el"))}"${on("blog")}>${esc(t(UI.nav.blog, lang))}</a></li>` : ""}
          <li><a href="${r(routePath("contact", lang))}"${on("contact")}>${esc(t(UI.nav.contact, lang))}</a></li>
          <li class="nav-lang"><a href="${otherHome}" data-lang-switch hreflang="${lang === "el" ? "en" : "el"}">${esc(t(UI.nav.langSwitch, lang))}</a></li>
          <li class="nav-cta"><a class="btn btn-primary" href="tel:${BIZ.phoneIntl}">${ICONS.phone}<span>${esc(BIZ.phoneDisplay)}</span></a></li>
        </ul>
      </nav>
    </div>
    <div class="scroll-progress" aria-hidden="true"><span data-progress></span></div>
  </header>`;
}

// ---------------------------------------------------------------- breadcrumbs
export function crumbs(lang, path, trail) {
  const depth = depthOf(path);
  const r = (p) => rel(depth, p);
  const items = trail
    .map((x, i) =>
      i === trail.length - 1
        ? `<span aria-current="page">${esc(x.name)}</span>`
        : `<a href="${r(x.path)}">${esc(x.name)}</a><span class="sep" aria-hidden="true">/</span>`
    )
    .join("");
  return `<nav class="crumbs container" aria-label="${attr(t(UI.breadcrumb, lang))}">${items}</nav>`;
}

// ---------------------------------------------------------------- CTA band
export function ctaBand(lang, path) {
  const depth = depthOf(path);
  const r = (p) => rel(depth, p);
  return `
  <section class="cta-band" style="--cta-img:url('${r("assets/band-entrance.jpg")}')">
    <div class="container cta-inner">
      <p class="eyebrow eyebrow--light">${esc(t({ el: "Ραντεβού", en: "Appointments" }, lang))}</p>
      <h2 class="cta-title">${esc(t({ el: "Ας δούμε τι χρειάζεται πραγματικά το δέρμα σας", en: "Let's find out what your skin actually needs" }, lang))}</h2>
      <p class="cta-sub">${esc(t(UI.bookLead, lang))}</p>
      <div class="cta-actions">
        <a class="btn btn-solid" href="tel:${BIZ.phoneIntl}">${ICONS.phone}<span>${esc(BIZ.phoneDisplay)}</span></a>
        <a class="btn btn-outline" href="${BIZ.instagram}" target="_blank" rel="noopener">${ICONS.instagram}<span>${esc(t(UI.dm, lang))}</span></a>
      </div>
      <p class="cta-hours">${ICONS.clock}<span>${raw(t(BIZ.hoursShort, lang))}</span></p>
    </div>
  </section>`;
}

// ---------------------------------------------------------------- footer
export function footer(lang, path) {
  const depth = depthOf(path);
  const r = (p) => rel(depth, p);
  const svcCols = CATEGORIES.map((c) => {
    const items = SERVICES.filter((s) => s.cat === c.key)
      .map((s) => `<a href="${r(servicePath(s, lang))}">${esc(t(s.nav, lang))}</a>`)
      .join("");
    return `<div class="foot-col"><h3>${esc(t(c.name, lang))}</h3><nav class="foot-links">${items}</nav></div>`;
  }).join("");

  const areaLinks = AREAS.map((a) => `<a href="${r(areaPath(a, lang))}">${esc(t(a.name, lang))}</a>`).join(
    ' <span aria-hidden="true">·</span> '
  );

  return `
  <footer class="site-footer">
    <div class="container foot-grid">
      <div class="foot-brand">
        <img src="${r("assets/logo.png")}" width="380" height="200" alt="${attr(t(BIZ.name, lang))}" class="foot-logo" />
        <p class="foot-tag">${esc(t(BIZ.tagline, lang))}</p>
        <address class="foot-addr">
          ${esc(t(BIZ.street, lang))}, ${esc(t(BIZ.city, lang))} ${esc(BIZ.postal)}<br />
          <a href="tel:${BIZ.phoneIntl}">${esc(BIZ.phoneDisplay)}</a><br />
          <a href="mailto:${BIZ.email}">${esc(BIZ.email)}</a>
        </address>
        <a class="foot-ig" href="${BIZ.instagram}" target="_blank" rel="noopener">${ICONS.instagram}<span>${esc(BIZ.instagramHandle)}</span></a>
      </div>
      ${svcCols}
      <div class="foot-col">
        <h3>${esc(t({ el: "Το κέντρο", en: "The centre" }, lang))}</h3>
        <nav class="foot-links">
          <a href="${r(routePath("about", lang))}">${esc(t(UI.nav.about, lang))}</a>
          <a href="${r(routePath("services", lang))}">${esc(t(UI.allSvc, lang))}</a>
          <a href="${r(routePath("space", lang))}">${esc(t(UI.nav.space, lang))}</a>
          ${lang === "el" ? `<a href="${r(routePath("blog", "el"))}">${esc(t(UI.nav.blog, lang))}</a>` : ""}
          <a href="${r(routePath("contact", lang))}">${esc(t(UI.nav.contact, lang))}</a>
        </nav>
        <p class="foot-hours">${ICONS.clock}<span>${raw(t(BIZ.hoursShort, lang))}</span></p>
      </div>
    </div>

    <p class="foot-areas">${esc(t({ el: "Εξυπηρετούμε:", en: "We serve:" }, lang))} ${areaLinks}</p>

    <div class="foot-bottom container">
      <p>© <span data-year>2026</span> ${esc(t(BIZ.name, lang))}. ${esc(t({ el: "Με επιφύλαξη παντός δικαιώματος.", en: "All rights reserved." }, lang))}</p>
      <p class="cb-credit">Made by <a href="https://astramarketing.gr/?utm_source=client-site&amp;utm_medium=footer&amp;utm_campaign=made-by" target="_blank" rel="noopener noreferrer">ASTRA</a></p>
    </div>
  </footer>

  <div class="call-bar" aria-hidden="false">
    <a href="tel:${BIZ.phoneIntl}">${ICONS.phone}<span>${esc(t(UI.call, lang))}</span></a>
    <a href="${BIZ.instagram}" target="_blank" rel="noopener">${ICONS.instagram}<span>Instagram</span></a>
  </div>

  <div class="lightbox" data-lightbox hidden>
    <button class="lb-close" type="button" data-lb-close aria-label="${attr(t({ el: "Κλείσιμο", en: "Close" }, lang))}">${ICONS.close}</button>
    <button class="lb-nav lb-prev" type="button" data-lb-prev aria-label="${attr(t({ el: "Προηγούμενο", en: "Previous" }, lang))}">${ICONS.arrow}</button>
    <button class="lb-nav lb-next" type="button" data-lb-next aria-label="${attr(t({ el: "Επόμενο", en: "Next" }, lang))}">${ICONS.arrow}</button>
    <figure class="lb-stage"><div data-lb-slot></div><figcaption data-lb-cap></figcaption></figure>
  </div>

  <script src="${r("main.js")}" defer></script>
</body>
</html>`;
}

// ---------------------------------------------------------------- μικρά κοινά
export const sectionHead = (eyebrow, title, lead = "", cls = "") => `
        <div class="section-head reveal ${cls}">
          ${eyebrow ? `<p class="eyebrow">${esc(eyebrow)}</p>` : ""}
          <h2 class="section-title">${title}</h2>
          ${lead ? `<p class="section-lead">${esc(lead)}</p>` : ""}
        </div>`;

export const serviceCard = (s, lang, depth) => {
  const r = (p) => rel(depth, p);
  return `
          <a class="svc-card reveal" href="${r(servicePath(s, lang))}" data-cat="${s.cat}">
            <span class="svc-icon" aria-hidden="true">${ICONS[s.icon] || ICONS.leaf}</span>
            <h3 class="svc-name">${esc(t(s.h1, lang))}</h3>
            <p class="svc-lead">${esc(t(s.lead, lang))}</p>
            <span class="svc-meta"><span class="svc-dur">${ICONS.clock}${esc(t(s.duration, lang))}</span><span class="svc-go">${ICONS.arrow}</span></span>
          </a>`;
};
