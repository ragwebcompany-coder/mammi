// ============================================================
//  BNL — Κέντρο Αισθητικής & Αδυνατισμού · Ζηπάρι, Κως
//  Ταυτότητα, κοινά κείμενα (el/en), περιοχές, άρθρα.
//  Μία πηγή αλήθειας για τη γεννήτρια — δεν πειράζουμε τα .html.
// ============================================================

export const BASE = "https://bnl.gr";
export const LANGS = ["el", "en"];

// Μικρό helper: κάθε κείμενο είναι {el, en}. Το `t()` διαλέγει γλώσσα.
export const t = (v, lang) => (v && typeof v === "object" && !Array.isArray(v) ? v[lang] : v);

export const BIZ = {
  brand: "BNL",
  name: { el: "BNL — Κέντρο Αισθητικής & Αδυνατισμού", en: "BNL — Aesthetics & Body Centre" },
  short: { el: "BNL Κέντρο Αισθητικής", en: "BNL Aesthetics Centre" },
  owner: { el: "Μαρία Μάμμη", en: "Maria Mammi" },
  ownerFull: { el: "Μαρία Μάμμη, MSc", en: "Maria Mammi, MSc" },
  role: { el: "Πτυχιούχος BSc Αισθητικός", en: "BSc Aesthetician" },
  roleLong: {
    el: "Πτυχιούχος BSc Αισθητικός, MSc · Μέλος CIDESCO Hellas",
    en: "BSc Aesthetician, MSc · CIDESCO Hellas member",
  },
  tagline: { el: "Η φροντίδα που σου αξίζει.", en: "The care you deserve." },
  promise: {
    el: "Κάθε θεραπεία ξεκινά από ανάλυση, όχι από κατάλογο.",
    en: "Every treatment starts with analysis, not with a price list.",
  },

  phoneDisplay: "22420 69729",
  phoneIntl: "+302242069729",
  email: "mariamammi2910@gmail.com",

  street: { el: "Ζηπάρι", en: "Zipari" },
  area: { el: "Ζηπάρι", en: "Zipari" },
  city: { el: "Κως", en: "Kos" },
  region: { el: "Δωδεκάνησα", en: "Dodecanese" },
  postal: "85300",
  country: "GR",
  // Ζηπάρι Κω, ΤΚ 85300 — κέντρο οικισμού, γεωκωδικοποιημένο με Nominatim/OSM
  // (20/9/2026· συμφωνεί και με το ΤΚ που γράφουν τα poster της πελάτισσας).
  // ⚠️ Είναι το κέντρο του χωριού, όχι η ακριβής πόρτα του κέντρου —
  // ζητήστε από την κ. Μάμμη το pin του Google Business για τελική ακρίβεια.
  lat: 36.876298,
  lng: 27.2051213,

  hoursShort: {
    el: "Δευ–Παρ 09:00–13:00 &amp; 17:00–20:00",
    en: "Mon–Fri 09:00–13:00 &amp; 17:00–20:00",
  },
  hoursLong: {
    el: "Δευτέρα έως Παρασκευή, 09:00–13:00 και 17:00–20:00. Σάββατο & Κυριακή κλειστά.",
    en: "Monday to Friday, 09:00–13:00 and 17:00–20:00. Closed Saturday & Sunday.",
  },
  hoursRows: [
    { d: { el: "Δευτέρα – Παρασκευή", en: "Monday – Friday" }, h: "09:00 – 13:00 · 17:00 – 20:00" },
    { d: { el: "Σάββατο", en: "Saturday" }, h: { el: "Κλειστά", en: "Closed" } },
    { d: { el: "Κυριακή", en: "Sunday" }, h: { el: "Κλειστά", en: "Closed" } },
  ],

  instagram: "https://www.instagram.com/bnl_mariamammi/",
  instagramHandle: "@bnl_mariamammi",
  googleBusiness: "ΜΑΜΜΗ ΜΑΡΙΑ ΒΑΣΙΛΕΙΟΣ",
};

// Ραντεβού μόνο τηλεφωνικά / Instagram — χωρίς φόρμα, κατ' απαίτηση (20/9/2026).
export const CONTACT_CHANNELS = [
  {
    key: "phone",
    icon: "phone",
    label: { el: "Τηλέφωνο", en: "Phone" },
    value: BIZ.phoneDisplay,
    href: `tel:${BIZ.phoneIntl}`,
    note: { el: "Ο πιο γρήγορος τρόπος για ραντεβού", en: "The fastest way to book" },
  },
  {
    key: "instagram",
    icon: "instagram",
    label: { el: "Instagram", en: "Instagram" },
    value: BIZ.instagramHandle,
    href: BIZ.instagram,
    note: { el: "Στείλτε μας μήνυμα — απαντάμε καθημερινά", en: "Send us a message — we reply daily" },
    external: true,
  },
  {
    key: "email",
    icon: "mail",
    label: { el: "Email", en: "Email" },
    value: BIZ.email,
    href: `mailto:${BIZ.email}`,
    note: { el: "Για αναλυτικά ερωτήματα", en: "For detailed enquiries" },
  },
];

// ---------------------------------------------------------------- κατηγορίες
export const CATEGORIES = [
  {
    key: "prosopo",
    slug: { el: "prosopo", en: "face" },
    name: { el: "Πρόσωπο", en: "Face" },
    lead: {
      el: "Καθαρισμός, ενυδάτωση, ακμή, δυσχρωμίες και αντιγήρανση — με πρωτόκολλα που επιλέγονται μετά από ανάλυση της επιδερμίδας.",
      en: "Cleansing, hydration, acne, pigmentation and anti-ageing — protocols chosen after a proper skin analysis.",
    },
  },
  {
    key: "soma",
    slug: { el: "soma", en: "body" },
    name: { el: "Σώμα", en: "Body" },
    lead: {
      el: "Αδυνάτισμα, σύσφιξη, λιπογλυπτική και λεμφική αποσυμφόρηση, με μηχανήματα και με τα χέρια.",
      en: "Slimming, firming, body contouring and lymphatic drainage — with technology and with hands.",
    },
  },
  {
    key: "apotrichosi",
    slug: { el: "apotrichosi", en: "hair-removal" },
    name: { el: "Αποτρίχωση", en: "Hair removal" },
    lead: {
      el: "Laser diode, ριζική ηλεκτρική αποτρίχωση και κερί. Τρεις μέθοδοι, γιατί καμία δεν ταιριάζει σε όλους.",
      en: "Diode laser, electrolysis and waxing. Three methods, because no single one suits everyone.",
    },
  },
  {
    key: "evexia",
    slug: { el: "evexia", en: "wellbeing" },
    name: { el: "Ευεξία", en: "Wellbeing" },
    lead: {
      el: "Μασάζ, ρεφλεξολογία και αιθέρια έλαια — το κομμάτι που ξεκουράζει, όχι μόνο διορθώνει.",
      en: "Massage, reflexology and essential oils — the part that restores rather than corrects.",
    },
  },
];

// ---------------------------------------------------------------- τεχνολογίες
// Ό,τι φαίνεται στα υλικά της πελάτισσας (poster, βίντεο, φωτογραφίες χώρου).
export const TECH = [
  {
    key: "apopsis",
    name: "APOPSIS",
    tag: { el: "Διάγνωση", en: "Diagnostics" },
    text: {
      el: "Διαγνωστικό απεικονιστικό σύστημα δερμοανάλυσης και μαγνητικός αναλυτής σώματος. Δείχνει τι συμβαίνει κάτω από την επιφάνεια — ενυδάτωση, σμήγμα, πόρους, δυσχρωμίες, ελαστικότητα — πριν επιλεγεί οποιαδήποτε θεραπεία.",
      en: "An imaging skin-analysis system paired with a magnetic body analyser. It shows what is happening below the surface — hydration, sebum, pores, pigmentation, elasticity — before any treatment is chosen.",
    },
  },
  {
    key: "diode",
    name: { el: "Laser Diode", en: "Diode laser" },
    tag: { el: "Αποτρίχωση", en: "Hair removal" },
    text: {
      el: "Διοδικό laser αποτρίχωσης με σύστημα ψύξης. Δουλεύει σε ευρύ φάσμα φωτότυπων και σε πιο λεπτή τρίχα απ' ότι τα παλαιότερα συστήματα, με σαφώς μεγαλύτερη άνεση στη συνεδρία.",
      en: "Diode hair-removal laser with contact cooling. It covers a wide range of skin phototypes and finer hair than older systems, and is noticeably more comfortable during the session.",
    },
  },
  {
    key: "hydra",
    name: { el: "Υδροδερμοαπόξεση", en: "Hydrodermabrasion" },
    tag: { el: "Καθαρισμός", en: "Cleansing" },
    text: {
      el: "Καθαρισμός με νερό και υποπίεση αντί για τριβή: απομακρύνει νεκρά κύτταρα και περιεχόμενο πόρων ενώ ταυτόχρονα ενυδατώνει. Χωρίς ερεθισμό και χωρίς χρόνο ανάρρωσης.",
      en: "Cleansing with water and vacuum instead of abrasion: it lifts dead cells and pore content while hydrating at the same time. No irritation, no downtime.",
    },
  },
  {
    key: "rf",
    name: { el: "RF — Ραδιοσυχνότητες", en: "RF — Radiofrequency" },
    tag: { el: "Σύσφιξη", en: "Firming" },
    text: {
      el: "Ελεγχόμενη θέρμανση των βαθύτερων στιβάδων, ώστε να ενεργοποιηθεί η παραγωγή κολλαγόνου. Χρησιμοποιείται σε πρόσωπο για σύσφιξη περιγράμματος και σε σώμα μαζί με τα πρωτόκολλα λιπογλυπτικής.",
      en: "Controlled heating of the deeper layers to trigger collagen production. Used on the face to tighten the contour and on the body alongside contouring protocols.",
    },
  },
  {
    key: "pressoterapia",
    name: { el: "Πρεσσοθεραπεία", en: "Pressotherapy" },
    tag: { el: "Κυκλοφορία", en: "Circulation" },
    text: {
      el: "Διαδοχική πνευματική συμπίεση που κινεί τη λέμφη προς τη σωστή κατεύθυνση. Για κατακράτηση, βαριά πόδια και μετά από θεραπείες σώματος, ώστε να φύγει ό,τι κινητοποιήθηκε.",
      en: "Sequential pneumatic compression that moves lymph in the right direction. For fluid retention, heavy legs, and after body treatments so that what was mobilised actually leaves.",
    },
  },
  {
    key: "dermagenetic",
    name: "Dermagenetic",
    tag: { el: "Προϊόντα", en: "Products" },
    text: {
      el: "Η σειρά επαγγελματικής περιποίησης που χρησιμοποιούμε στην καμπίνα: exosomes, multisomes, ρετινόλη σε αμπούλες και Metallo Mineral Skincare — φυσική ορυκτή κάλυψη χωρίς parabens, talc ή silicone.",
      en: "The professional range we use in the cabin: exosomes, multisomes, retinol ampoules and Metallo Mineral Skincare — natural mineral coverage with no parabens, talc or silicone.",
    },
  },
];

// ---------------------------------------------------------------- περιοχές
export const AREAS = [
  {
    slug: { el: "aisthitikos-zipari", en: "beautician-zipari" },
    name: { el: "Ζηπάρι", en: "Zipari" },
    km: 0,
    intro: {
      el: "Το κέντρο μας βρίσκεται στο Ζηπάρι, στην καρδιά του Δήμου Δικαίου. Οι περισσότερες πελάτισσές μας έρχονται με τα πόδια ή με πέντε λεπτά αυτοκίνητο.",
      en: "Our centre is in Zipari, in the heart of the Dikeos municipality. Most of our clients walk in or drive here in under five minutes.",
    },
  },
  {
    slug: { el: "aisthitikos-kos-poli", en: "beautician-kos-town" },
    name: { el: "Κως πόλη", en: "Kos Town" },
    km: 10,
    intro: {
      el: "Δέκα λεπτά από την πόλη της Κω μέσω της επαρχιακής οδού. Πολλές πελάτισσες από την πόλη έρχονται στο Ζηπάρι ακριβώς επειδή παρκάρουν χωρίς κόπο και το ραντεβού ξεκινά στην ώρα του.",
      en: "Ten minutes from Kos Town along the main road. Many clients drive out from town precisely because parking is effortless and appointments start on time.",
    },
  },
  {
    slug: { el: "aisthitikos-tigaki", en: "beautician-tigaki" },
    name: { el: "Τιγκάκι", en: "Tigaki" },
    km: 6,
    intro: {
      el: "Το Τιγκάκι απέχει λίγα λεπτά από το Ζηπάρι. Το καλοκαίρι βλέπουμε πολλές επισκέπτριες από τα καταλύματα της περιοχής για αποτρίχωση, ενυδάτωση και μασάζ.",
      en: "Tigaki is a few minutes from Zipari. In summer we see many visitors from the resorts here for hair removal, hydration treatments and massage.",
    },
  },
  {
    slug: { el: "aisthitikos-marmari", en: "beautician-marmari" },
    name: { el: "Μαρμάρι", en: "Marmari" },
    km: 8,
    intro: {
      el: "Από το Μαρμάρι η διαδρομή είναι σύντομη και χωρίς κίνηση. Ιδανικό για προγραμματισμένους κύκλους laser, που θέλουν συνέπεια στα μεσοδιαστήματα.",
      en: "The drive from Marmari is short and traffic-free — convenient for scheduled laser courses, which depend on keeping the intervals.",
    },
  },
  {
    slug: { el: "aisthitikos-pyli-asfendiou", en: "beautician-pyli-asfendiou" },
    name: { el: "Πυλί & Ασφενδιού", en: "Pyli & Asfendiou" },
    km: 5,
    intro: {
      el: "Τα χωριά του Δικαίου — Πυλί, Ασφενδιού, Ζιά, Λαγούδι — είναι δίπλα μας. Εξυπηρετούμε καθημερινά πελάτισσες από όλη την ορεινή πλευρά του νησιού.",
      en: "The Dikeos villages — Pyli, Asfendiou, Zia, Lagoudi — are right next door. We see clients from the whole mountain side of the island every day.",
    },
  },
  {
    slug: { el: "aisthitikos-mastichari-kardamena", en: "beautician-mastichari-kardamena" },
    name: { el: "Μαστιχάρι & Καρδάμαινα", en: "Mastichari & Kardamena" },
    km: 15,
    intro: {
      el: "Από το Μαστιχάρι και την Καρδάμαινα ερχόμαστε σε περίπου δεκαπέντε λεπτά. Προτείνουμε να κλείνετε δύο θεραπείες στο ίδιο ραντεβού, ώστε να αξίζει η διαδρομή.",
      en: "Mastichari and Kardamena are about fifteen minutes away. We suggest combining two treatments in one appointment so the trip is worth it.",
    },
  },
];

// ---------------------------------------------------------------- quiz
// «Τι χρειάζεται το δέρμα σου;» — τρεις ερωτήσεις, κάθε απάντηση δίνει βάρος
// σε service keys. Το main.js αθροίζει και δείχνει τις τρεις κορυφαίες.
// Η ιδέα είναι δανεισμένη από το poster «Τα σημάδια που στέλνει το δέρμα σου».
export const QUIZ = {
  title: { el: "Τι χρειάζεται το δέρμα σου;", en: "What does your skin need?" },
  lead: {
    el: "Τρεις ερωτήσεις, τριάντα δευτερόλεπτα. Δεν αντικαθιστά την ανάλυση — δίνει όμως μια πρώτη κατεύθυνση για το τι θα συζητήσουμε.",
    en: "Three questions, thirty seconds. It does not replace an analysis — but it points to what we should talk about first.",
  },
  cta: { el: "Δες την πρότασή μας", en: "See our suggestion" },
  again: { el: "Ξαναπροσπάθησε", en: "Start again" },
  resultTitle: { el: "Θα ξεκινούσαμε από εδώ", en: "We would start here" },
  resultLead: {
    el: "Με βάση όσα επέλεξες. Η τελική πρόταση βγαίνει πάντα μετά από ανάλυση επιδερμίδας στον χώρο μας.",
    en: "Based on what you chose. The final plan always follows a skin analysis at the centre.",
  },
  questions: [
    {
      q: { el: "Πού θέλεις να εστιάσουμε;", en: "Where should we focus?" },
      options: [
        { label: { el: "Στο πρόσωπό μου", en: "On my face" }, keys: ["katharismos", "analysi"] },
        { label: { el: "Στο σώμα & το περίγραμμα", en: "On my body and contour" }, keys: ["adynatisma", "sysfixi"] },
        { label: { el: "Στην ανεπιθύμητη τριχοφυΐα", en: "On unwanted hair" }, keys: ["laser", "riziki"] },
        { label: { el: "Στην ένταση και την κούραση", en: "On tension and fatigue" }, keys: ["masaz", "lemfiki"] },
      ],
    },
    {
      q: { el: "Τι παρατηρείς περισσότερο;", en: "What do you notice most?" },
      options: [
        { label: { el: "Γυαλίζει, βγάζω σπυράκια", en: "Shine and breakouts" }, keys: ["akmi", "katharismos"] },
        { label: { el: "Τραβάει, δείχνει θαμπό", en: "Tightness, dullness" }, keys: ["enydatosi", "katharismos"] },
        { label: { el: "Κηλίδες & δυσχρωμίες", en: "Spots and pigmentation" }, keys: ["leukansi", "analysi"] },
        { label: { el: "Χαλάρωση & λεπτές γραμμές", en: "Laxity and fine lines" }, keys: ["rf", "antigiransi"] },
        { label: { el: "Πρήξιμο & βαριά πόδια", en: "Swelling and heavy legs" }, keys: ["lemfiki", "masaz"] },
        { label: { el: "Τοπικό πάχος που επιμένει", en: "Stubborn localised fat" }, keys: ["adynatisma", "sysfixi"] },
        { label: { el: "Σκούρες τρίχες σε μεγάλη περιοχή", en: "Dark hair over a large area" }, keys: ["laser", "keri"] },
        { label: { el: "Λευκές ή πολύ λεπτές τρίχες", en: "White or very fine hair" }, keys: ["riziki"] },
      ],
    },
    {
      q: { el: "Πόσο χρόνο μπορείς να δώσεις;", en: "How much time can you give?" },
      options: [
        { label: { el: "Μία επίσκεψη, τώρα", en: "One visit, now" }, keys: ["katharismos", "masaz", "keri"] },
        { label: { el: "Έναν κύκλο λίγων εβδομάδων", en: "A course over a few weeks" }, keys: ["laser", "rf", "adynatisma"] },
        { label: { el: "Δεν ξέρω — θέλω πρόταση", en: "I don't know — advise me" }, keys: ["analysi"] },
      ],
    },
  ],
};

// ---------------------------------------------------------------- media
// Τα βίντεο που έστειλε η πελάτισσα (κάθετα, από Instagram).
export const REELS = [
  { file: "katharismos-prosopou", svc: "katharismos", label: { el: "Καθαρισμός προσώπου", en: "Facial cleansing" }, note: { el: "Με προϊόντα Dermagenetic", en: "With Dermagenetic products" } },
  { file: "laser-apotrichosi", svc: "laser", label: { el: "Αποτρίχωση laser", en: "Laser hair removal" }, note: { el: "Diode, με σύστημα ψύξης", en: "Diode, with contact cooling" } },
  { file: "mesotherapeia", svc: "mesotherapeia", label: { el: "Εξατομικευμένη θεραπεία", en: "Personalised treatment" }, note: { el: "Αμπούλες ανά τύπο δέρματος", en: "Ampoules matched to skin type" } },
  { file: "katharismos-detail", svc: "enydatosi", label: { el: "Φροντίδα προσώπου", en: "Facial care" }, note: { el: "Λεπτομέρεια από τη συνεδρία", en: "A detail from the session" } },
];

// Τα ενημερωτικά poster του κέντρου — γίνονται γκαλερί με lightbox.
export const POSTERS = [
  { file: "poster-riziki-apotrichosi", svc: "riziki", label: { el: "Ριζική αποτρίχωση", en: "Electrolysis" } },
  { file: "poster-exosomes", svc: "antigiransi", label: { el: "Exosomes", en: "Exosomes" } },
  { file: "poster-multisomes", svc: "antigiransi", label: { el: "Multisomes", en: "Multisomes" } },
  { file: "poster-longevity", svc: "rf", label: { el: "Longevity journey", en: "Longevity journey" } },
  { file: "poster-simadia-dermatos", svc: "analysi", label: { el: "Τα σημάδια του δέρματος", en: "The signs your skin sends" } },
  { file: "poster-metallo-mineral", svc: "akmi", label: { el: "Metallo Mineral Skincare", en: "Metallo Mineral Skincare" } },
  { file: "poster-ratin", svc: "leukansi", label: { el: "Ratin — ρετινόλη", en: "Ratin — retinol" } },
];

export const SPACE_PHOTOS = [
  { file: "space-entrance", label: { el: "Η είσοδος", en: "The entrance" }, w: 1600, h: 1767 },
  { file: "space-lounge", label: { el: "Ο χώρος αναμονής", en: "The waiting area" }, w: 1600, h: 1771 },
  { file: "massage", label: { el: "Η καμπίνα θεραπειών", en: "The treatment cabin" }, w: 1600, h: 1064 },
];

// Πιστοποιήσεις & ιδιότητες — από το βιογραφικό της πελάτισσας.
export const CREDENTIALS = [
  { k: { el: "European University Cyprus", en: "European University Cyprus" }, v: { el: "Τετραετές πτυχίο Αισθητικής (BSc)", en: "Four-year BSc in Aesthetics" } },
  { k: { el: "Καποδιστριακό Πανεπιστήμιο Αθηνών", en: "University of Athens" }, v: { el: "Μεταπτυχιακή εξειδίκευση, Μικρασιατική Τραπεζούντιος Θεραπευτική", en: "Postgraduate specialisation, Asia Minor Trapezuntian Therapeutics" } },
  { k: { el: "Ηλεκτρική αποτρίχωση & laser", en: "Electrolysis & laser" }, v: { el: "Πιστοποιημένη εξειδίκευση", en: "Certified specialisation" } },
  { k: { el: "CIDESCO Hellas", en: "CIDESCO Hellas" }, v: { el: "Επίσημο μέλος", en: "Official member" } },
  { k: { el: "Σύλλογος Αισθητικών Δωδεκανήσου", en: "Dodecanese Aestheticians' Association" }, v: { el: "Ενεργό μέλος", en: "Active member" } },
  { k: { el: "dōTERRA essential oils", en: "dōTERRA essential oils" }, v: { el: "Μέλος της εταιρείας", en: "Company member" } },
];

// Οι αριθμοί που μετράνε στην αρχική (μετρητές με animation).
export const STATS = [
  { n: 15, suffix: "+", label: { el: "υπηρεσίες προσώπου & σώματος", en: "face & body treatments" } },
  { n: 4, suffix: "", label: { el: "χρόνια πανεπιστημιακών σπουδών", en: "years of university study" } },
  { n: 3, suffix: "", label: { el: "μέθοδοι αποτρίχωσης", en: "hair-removal methods" } },
  { n: 100, suffix: "%", label: { el: "εξατομικευμένα πρωτόκολλα", en: "personalised protocols" } },
];
