// ============================================================
//  BNL — οι υπηρεσίες, με πλήρες δίγλωσσο περιεχόμενο.
//  Η σειρά εδώ είναι η σειρά που εμφανίζονται παντού.
//
//  Πεδία ανά υπηρεσία:
//    key       σταθερό αναγνωριστικό (δεν αλλάζει ποτέ — το δείχνουν τα quiz)
//    slug      το URL ανά γλώσσα
//    cat       κατηγορία (βλ. CATEGORIES στο data.mjs)
//    nav/h1    σύντομο & πλήρες όνομα
//    lead      μία πρόταση — φαίνεται στις κάρτες
//    body      οι παράγραφοι της σελίδας
//    includes  «τι περιλαμβάνει»
//    faq       ερωταπαντήσεις — βγαίνουν και ως FAQPage schema
//    media     εικόνα/βίντεο από τα υλικά της πελάτισσας
// ============================================================

export const SERVICES = [
  // ------------------------------------------------------------ ΠΡΟΣΩΠΟ
  {
    key: "analysi",
    cat: "prosopo",
    icon: "scan",
    slug: { el: "analysi-epidermidas", en: "skin-analysis" },
    nav: { el: "Ανάλυση Επιδερμίδας", en: "Skin Analysis" },
    h1: { el: "Ανάλυση Επιδερμίδας με APOPSIS", en: "Skin Analysis with APOPSIS" },
    duration: { el: "20–30΄", en: "20–30 min" },
    media: { img: "poster-simadia-dermatos", alt: { el: "Τα σημάδια που στέλνει το δέρμα σου", en: "The signs your skin sends you" } },
    lead: {
      el: "Πριν προτείνουμε θεραπεία, κοιτάμε τι πραγματικά συμβαίνει στο δέρμα σας.",
      en: "Before we suggest a treatment, we look at what is actually happening in your skin.",
    },
    title: {
      el: "Ανάλυση Επιδερμίδας Κως | Δερμοανάλυση APOPSIS — BNL Ζηπάρι",
      en: "Skin Analysis in Kos | APOPSIS Diagnostics — BNL Zipari",
    },
    desc: {
      el: "Δερμοανάλυση με το διαγνωστικό σύστημα APOPSIS στο Ζηπάρι Κω. Μετράμε ενυδάτωση, σμήγμα, πόρους και δυσχρωμίες πριν επιλεγεί οποιαδήποτε θεραπεία προσώπου.",
      en: "Imaging skin analysis with the APOPSIS system in Zipari, Kos. We measure hydration, sebum, pores and pigmentation before any facial treatment is chosen.",
    },
    keywords: {
      el: "ανάλυση επιδερμίδας Κως, δερμοανάλυση Κως, APOPSIS Κως, αισθητικός Ζηπάρι",
      en: "skin analysis Kos, skin diagnostics Kos, APOPSIS Kos, beautician Zipari",
    },
    body: {
      el: [
        "Το δέρμα στέλνει σημάδια συνέχεια. Ξαφνική λιπαρότητα συχνά σημαίνει κρυφή αφυδάτωση, το τσούξιμο σημαίνει ότι ο δερματικός φραγμός έχει υποστεί πίεση, ο κνησμός σημαίνει ερεθισμό. Το πρόβλημα είναι ότι όλα αυτά μοιάζουν μεταξύ τους στο μάτι, και έτσι γίνονται λάθος επιλογές — ένα δυνατό καθαριστικό εκεί που χρειαζόταν ενυδάτωση, ένα peeling εκεί που χρειαζόταν καταπράυνση.",
        "Το APOPSIS είναι προηγμένο διαγνωστικό απεικονιστικό σύστημα δερμοανάλυσης και μαγνητικός αναλυτής σώματος. Φωτογραφίζει το δέρμα σε διαφορετικά μήκη κύματος και δείχνει τι υπάρχει κάτω από την επιφάνεια: επίπεδο ενυδάτωσης, έκκριση σμήγματος, κατάσταση πόρων, βάθος δυσχρωμιών, ελαστικότητα, φωτογήρανση.",
        "Η ανάλυση διαρκεί λίγα λεπτά και γίνεται πριν από κάθε νέο πρωτόκολλο. Το αποτέλεσμα το βλέπετε μαζί μας στην οθόνη και από εκεί προκύπτει το πλάνο: ποια θεραπεία, με ποια σειρά, πόσο συχνά και τι κάνετε στο σπίτι ανάμεσα στις συνεδρίες. Επαναλαμβάνεται μετά από έναν κύκλο, ώστε η βελτίωση να φαίνεται σε μετρήσεις και όχι μόνο στην αίσθηση.",
      ],
      en: [
        "Skin sends signals constantly. Sudden oiliness usually means hidden dehydration, stinging means the skin barrier is under pressure, itching means irritation. The problem is that all of these look alike to the naked eye, which is how the wrong choices get made — a harsh cleanser where hydration was needed, a peel where calming was needed.",
        "APOPSIS is an advanced imaging system for skin analysis, paired with a magnetic body analyser. It photographs the skin at different wavelengths and reveals what sits below the surface: hydration level, sebum output, pore condition, the depth of pigmentation, elasticity and photo-ageing.",
        "The analysis takes a few minutes and is done before every new protocol. You see the results with us on screen, and the plan follows from them: which treatment, in what order, how often, and what you do at home between sessions. We repeat it after a course, so that progress shows up as measurements rather than as a feeling.",
      ],
    },
    includes: {
      el: ["Απεικονιστική δερμοανάλυση σε πολλαπλά μήκη κύματος", "Μέτρηση ενυδάτωσης, σμήγματος και ελαστικότητας", "Καταγραφή δυσχρωμιών και φωτογήρανσης", "Μαγνητική ανάλυση σύστασης σώματος (προαιρετικά)", "Γραπτό πλάνο θεραπειών και ρουτίνας σπιτιού"],
      en: ["Imaging skin analysis at multiple wavelengths", "Hydration, sebum and elasticity measurements", "Mapping of pigmentation and photo-ageing", "Magnetic body-composition analysis (optional)", "A written treatment and home-routine plan"],
    },
    faq: {
      el: [
        ["Χρειάζεται προετοιμασία για την ανάλυση;", "Ελάτε με καθαρό πρόσωπο, χωρίς μακιγιάζ και χωρίς αντηλιακό την ίδια ημέρα, ώστε η μέτρηση να μην επηρεαστεί."],
        ["Πόσο συχνά την επαναλαμβάνουμε;", "Συνήθως πριν ξεκινήσει ένας κύκλος θεραπειών και ξανά στο τέλος του, δηλαδή κάθε τρεις έως τέσσερις μήνες."],
        ["Είναι απαραίτητη αν ξέρω τι θέλω;", "Δεν είναι υποχρεωτική, αλλά αλλάζει πολύ συχνά την επιλογή. Έχει τύχει να έρθει κάποια για peeling κατά της λιπαρότητας και η μέτρηση να δείξει αφυδατωμένο δέρμα, που χρειαζόταν το αντίθετο."],
      ],
      en: [
        ["Do I need to prepare for the analysis?", "Come with a clean face, no make-up and no sunscreen on the day, so the measurement is not affected."],
        ["How often is it repeated?", "Usually before a course of treatments begins and again at the end of it — so every three to four months."],
        ["Is it necessary if I already know what I want?", "It is not compulsory, but it very often changes the choice. We have had clients come in for a peel to fight oiliness, only for the measurement to show dehydrated skin that needed the opposite."],
      ],
    },
  },
  {
    key: "katharismos",
    cat: "prosopo",
    icon: "droplet",
    slug: { el: "katharismos-prosopou", en: "facial-cleansing" },
    nav: { el: "Καθαρισμός Προσώπου", en: "Facial Cleansing" },
    h1: { el: "Βαθύς Καθαρισμός Προσώπου & Hydrafacial", en: "Deep Facial Cleansing & Hydrafacial" },
    duration: { el: "60΄", en: "60 min" },
    featured: true,
    media: { video: "katharismos-prosopou", alt: { el: "Καθαρισμός προσώπου στο BNL", en: "A facial cleansing session at BNL" } },
    lead: {
      el: "Καθαρισμός με νερό και υποπίεση αντί για τριβή — καθαρίζει και ενυδατώνει ταυτόχρονα, χωρίς ερεθισμό.",
      en: "Cleansing with water and vacuum instead of abrasion — it cleans and hydrates at once, without irritation.",
    },
    title: {
      el: "Καθαρισμός Προσώπου Κως | Hydrafacial — BNL Ζηπάρι",
      en: "Facial Cleansing in Kos | Hydrafacial — BNL Zipari",
    },
    desc: {
      el: "Βαθύς καθαρισμός προσώπου και υδροδερμοαπόξεση (Hydrafacial) στο Ζηπάρι Κω. Καθαρίζει τους πόρους και ενυδατώνει στην ίδια συνεδρία, χωρίς χρόνο ανάρρωσης.",
      en: "Deep facial cleansing and hydrodermabrasion (Hydrafacial) in Zipari, Kos. Clears the pores and hydrates in the same session, with no downtime.",
    },
    keywords: {
      el: "καθαρισμός προσώπου Κως, hydrafacial Κως, υδροδερμοαπόξεση Κως, βαθύς καθαρισμός Ζηπάρι",
      en: "facial cleansing Kos, hydrafacial Kos, hydrodermabrasion Kos, deep facial Zipari",
    },
    body: {
      el: [
        "Ο καθαρισμός είναι η βάση. Όσο καλό και να είναι το προϊόν που θα ακολουθήσει, αν οι πόροι είναι φραγμένοι δεν φτάνει εκεί που πρέπει. Γι' αυτό ο καθαρισμός δεν είναι «πολυτέλεια πριν από τις γιορτές» — είναι το πρώτο βήμα κάθε σοβαρού πλάνου περιποίησης.",
        "Δουλεύουμε με υδροδερμοαπόξεση: μια κεφαλή που συνδυάζει νερό, ήπια υποπίεση και ενεργά διαλύματα. Απομακρύνει νεκρά κύτταρα και περιεχόμενο πόρων χωρίς τριβή και χωρίς το τράβηγμα των κλασικών μεθόδων, και ταυτόχρονα περνά ενυδατικά και αντιοξειδωτικά στο δέρμα. Όπου χρειάζεται, ακολουθεί χειρωνακτική εκκένωση με αποστειρωμένα εργαλεία.",
        "Η συνεδρία κλείνει με καταπραϋντική μάσκα επιλεγμένη για τον δικό σας τύπο δέρματος και με αντηλιακή προστασία. Φεύγετε χωρίς κοκκινίλα που να σας εμποδίζει να βγείτε — δεν υπάρχει χρόνος ανάρρωσης. Σε λιπαρό ή με τάση ακμής δέρμα προτείνουμε κάθε τέσσερις εβδομάδες, σε ξηρό κάθε έξι έως οκτώ.",
      ],
      en: [
        "Cleansing is the foundation. However good the product that follows, if the pores are blocked it never reaches where it should. That is why cleansing is not a treat before the holidays — it is the first step of any serious skincare plan.",
        "We work with hydrodermabrasion: a handpiece that combines water, gentle vacuum and active solutions. It lifts dead cells and pore content without abrasion and without the pulling of classic methods, while delivering hydrating and antioxidant actives into the skin. Where needed, manual extraction with sterile instruments follows.",
        "The session closes with a calming mask chosen for your skin type and with sun protection. You leave without redness that would stop you going out — there is no downtime. For oily or acne-prone skin we suggest every four weeks; for dry skin, every six to eight.",
      ],
    },
    includes: {
      el: ["Ανάλυση τύπου δέρματος", "Απολέπιση & υδροδερμοαπόξεση", "Χειρωνακτική εκκένωση πόρων όπου χρειάζεται", "Ορός ενεργών συστατικών κατά περίπτωση", "Καταπραϋντική μάσκα & αντηλιακή προστασία"],
      en: ["Skin-type analysis", "Exfoliation and hydrodermabrasion", "Manual pore extraction where needed", "Active serum selected per case", "Calming mask and sun protection"],
    },
    faq: {
      el: [
        ["Πονάει ο καθαρισμός;", "Η υδροδερμοαπόξεση δεν πονά — μοιάζει με δροσερό ρεύμα στο δέρμα. Ενόχληση μπορεί να υπάρξει μόνο στη χειρωνακτική εκκένωση, και μόνο σε σημεία με έντονη συμφόρηση."],
        ["Κάθε πότε πρέπει να γίνεται;", "Σε λιπαρό δέρμα ή δέρμα με τάση ακμής, κάθε τέσσερις εβδομάδες. Σε κανονικό ή ξηρό, κάθε έξι έως οκτώ εβδομάδες."],
        ["Μπορώ να βγω το ίδιο βράδυ;", "Ναι. Δεν υπάρχει χρόνος ανάρρωσης. Αποφύγετε μόνο το μακιγιάζ για λίγες ώρες και τον ήλιο χωρίς αντηλιακό."],
      ],
      en: [
        ["Does the cleansing hurt?", "Hydrodermabrasion does not hurt — it feels like a cool stream on the skin. Some discomfort is possible only during manual extraction, and only in congested areas."],
        ["How often should it be done?", "For oily or acne-prone skin, every four weeks. For normal or dry skin, every six to eight weeks."],
        ["Can I go out the same evening?", "Yes. There is no downtime. Just avoid make-up for a few hours and sun without protection."],
      ],
    },
  },
  {
    key: "mesotherapeia",
    cat: "prosopo",
    icon: "spark",
    slug: { el: "mesotherapeia-prosopou", en: "facial-mesotherapy" },
    nav: { el: "Μεσοθεραπεία", en: "Mesotherapy" },
    h1: { el: "Μεσοθεραπεία Προσώπου", en: "Facial Mesotherapy" },
    duration: { el: "45΄", en: "45 min" },
    media: { video: "mesotherapeia", alt: { el: "Εξατομικευμένες αμπούλες θεραπείας", en: "Personalised treatment ampoules" } },
    lead: {
      el: "Τα ενεργά συστατικά μπαίνουν εκεί που δουλεύουν, όχι εκεί που απλώς απλώνονται.",
      en: "Actives delivered where they work, not merely where they spread.",
    },
    title: {
      el: "Μεσοθεραπεία Προσώπου Κως | Ενυδάτωση & Λάμψη — BNL",
      en: "Facial Mesotherapy in Kos | Hydration & Glow — BNL",
    },
    desc: {
      el: "Μεσοθεραπεία προσώπου στο Ζηπάρι Κω με εξατομικευμένα cocktail υαλουρονικού, βιταμινών και αμινοξέων. Για βαθιά ενυδάτωση, λάμψη και λεπτές ρυτίδες.",
      en: "Facial mesotherapy in Zipari, Kos with personalised cocktails of hyaluronic acid, vitamins and amino acids. For deep hydration, glow and fine lines.",
    },
    keywords: {
      el: "μεσοθεραπεία προσώπου Κως, μεσοθεραπεία Ζηπάρι, ενυδάτωση προσώπου Κως",
      en: "facial mesotherapy Kos, mesotherapy Zipari, facial hydration Kos",
    },
    body: {
      el: [
        "Η κρέμα δουλεύει στην επιφάνεια. Υπάρχει όμως ένα όριο στο πόσο βαθιά μπορεί να φτάσει ένα ενεργό συστατικό όταν απλώνεται από πάνω, και αυτό το όριο είναι συχνά ο λόγος που μια σωστή ρουτίνα δεν δίνει το αποτέλεσμα που θα περίμενε κανείς.",
        "Η μεσοθεραπεία λύνει ακριβώς αυτό. Με πολύ λεπτές βελόνες ή με συσκευή microneedling, το cocktail μπαίνει στο επίπεδο όπου χρειάζεται: υαλουρονικό για ενυδάτωση, βιταμίνες και αμινοξέα για λάμψη, πεπτίδια και αντιοξειδωτικά για την υφή. Η σύνθεση δεν είναι ίδια για όλους — καθορίζεται από την ανάλυση της επιδερμίδας.",
        "Στο κέντρο μας συνδυάζουμε τη μεσοθεραπεία με exosomes και multisomes της Dermagenetic, που ενισχύουν την αντιοξειδωτική ικανότητα του δέρματος και τους μηχανισμούς επιδιόρθωσης. Συνήθως προτείνεται κύκλος τεσσάρων έως έξι συνεδριών ανά δεκαπενθήμερο και στη συνέχεια συντήρηση.",
      ],
      en: [
        "Cream works at the surface. But there is a limit to how deep an active can travel when it is spread on from above, and that limit is often why a perfectly good routine does not deliver what you would expect.",
        "Mesotherapy solves exactly that. With very fine needles or a microneedling device, the cocktail is placed at the level where it is needed: hyaluronic acid for hydration, vitamins and amino acids for glow, peptides and antioxidants for texture. The formula is not the same for everyone — it follows from the skin analysis.",
        "At our centre we combine mesotherapy with Dermagenetic exosomes and multisomes, which strengthen the skin's antioxidant capacity and its repair mechanisms. A course of four to six sessions every two weeks is usual, followed by maintenance.",
      ],
    },
    includes: {
      el: ["Ανάλυση και σχεδιασμός του cocktail", "Καθαρισμός & προετοιμασία επιδερμίδας", "Εφαρμογή με βελόνα ή microneedling", "Exosomes ή multisomes όπου ενδείκνυται", "Καταπραϋντική μάσκα & οδηγίες φροντίδας"],
      en: ["Analysis and design of the cocktail", "Cleansing and skin preparation", "Application by needle or microneedling", "Exosomes or multisomes where indicated", "Calming mask and aftercare instructions"],
    },
    faq: {
      el: [
        ["Πόσο πονάει;", "Οι βελόνες είναι πολύ λεπτές και προηγείται αναισθητική κρέμα όπου χρειάζεται. Οι περισσότερες πελάτισσες το περιγράφουν ως τσιμπήματα που περνούν αμέσως."],
        ["Θα φαίνεται κάτι μετά;", "Ελαφρύ ερύθημα για λίγες ώρες και, σπανιότερα, μικρές μελανιές που καλύπτονται με μακιγιάζ από την επόμενη ημέρα."],
        ["Πόσες συνεδρίες χρειάζονται;", "Συνήθως τέσσερις έως έξι ανά δεκαπενθήμερο. Το αποτέλεσμα αρχίζει να φαίνεται από τη δεύτερη και σταθεροποιείται μετά τον κύκλο."],
      ],
      en: [
        ["How much does it hurt?", "The needles are very fine and numbing cream is applied where needed. Most clients describe it as pinpricks that pass immediately."],
        ["Will anything show afterwards?", "Mild redness for a few hours and, less often, small bruises that can be covered with make-up from the next day."],
        ["How many sessions are needed?", "Usually four to six, every two weeks. Results start to show from the second session and settle after the course."],
      ],
    },
  },
  {
    key: "rf",
    cat: "prosopo",
    icon: "wave",
    slug: { el: "rf-prosopou", en: "rf-facial" },
    nav: { el: "RF Προσώπου", en: "RF Facial" },
    h1: { el: "RF Προσώπου — Ραδιοσυχνότητες", en: "RF Facial — Radiofrequency" },
    duration: { el: "45΄", en: "45 min" },
    media: { img: "poster-longevity", alt: { el: "Longevity journey — αντιγήρανση σε απλή γλώσσα", en: "Longevity journey — anti-ageing in plain language" } },
    lead: {
      el: "Σύσφιξη περιγράμματος χωρίς χειρουργείο, με ελεγχόμενη θέρμανση που ξυπνά το κολλαγόνο.",
      en: "Contour tightening without surgery, through controlled heating that wakes collagen up.",
    },
    title: {
      el: "RF Προσώπου Κως | Ραδιοσυχνότητες & Σύσφιξη — BNL Ζηπάρι",
      en: "RF Facial in Kos | Radiofrequency Tightening — BNL Zipari",
    },
    desc: {
      el: "Θεραπεία RF προσώπου με ραδιοσυχνότητες στο Ζηπάρι Κω. Σύσφιξη περιγράμματος, βελτίωση υφής και παραγωγή κολλαγόνου, χωρίς χρόνο ανάρρωσης.",
      en: "RF radiofrequency facial in Zipari, Kos. Contour tightening, texture improvement and collagen stimulation, with no downtime.",
    },
    keywords: {
      el: "RF προσώπου Κως, ραδιοσυχνότητες Κως, σύσφιξη προσώπου Κως, αντιγήρανση Ζηπάρι",
      en: "RF facial Kos, radiofrequency Kos, facial tightening Kos, anti-ageing Zipari",
    },
    body: {
      el: [
        "Με την ηλικία το κολλαγόνο δεν χάνεται απότομα, μειώνεται σταδιακά. Το περίγραμμα του προσώπου χαλαρώνει, το δέρμα γίνεται πιο λεπτό και οι σκιές γύρω από τη γνάθο και τον λαιμό γίνονται πιο έντονες. Είναι αργή διαδικασία, γι' αυτό και αντιμετωπίζεται καλύτερα όσο νωρίτερα ξεκινήσει.",
        "Οι ραδιοσυχνότητες θερμαίνουν ελεγχόμενα τις βαθύτερες στιβάδες, σε θερμοκρασία που το σώμα αναγνωρίζει ως ερέθισμα επιδιόρθωσης. Οι ινοβλάστες ενεργοποιούνται και παράγουν νέο κολλαγόνο και ελαστίνη τις επόμενες εβδομάδες. Η επιφάνεια του δέρματος παραμένει άθικτη — γι' αυτό δεν υπάρχει ανάρρωση.",
        "Η αίσθηση είναι ζεστή και άνετη, σαν ζεστό μασάζ. Προτείνουμε κύκλο έξι έως οκτώ συνεδριών, μία την εβδομάδα, και στη συνέχεια μία συνεδρία συντήρησης τον μήνα. Συνδυάζεται πολύ καλά με μεσοθεραπεία: το RF χτίζει τη δομή, η μεσοθεραπεία βελτιώνει την ποιότητα και την ενυδάτωση.",
      ],
      en: [
        "Collagen is not lost suddenly with age; it declines gradually. The contour of the face softens, skin becomes thinner, and the shadows around the jaw and neck grow more pronounced. It is a slow process, which is exactly why it responds best when you start early.",
        "Radiofrequency heats the deeper layers in a controlled way, to a temperature the body reads as a repair signal. Fibroblasts are activated and produce new collagen and elastin over the following weeks. The skin surface stays intact — which is why there is no recovery time.",
        "The sensation is warm and comfortable, like a hot massage. We suggest a course of six to eight sessions, one a week, then a maintenance session each month. It pairs very well with mesotherapy: RF builds the structure, mesotherapy improves quality and hydration.",
      ],
    },
    includes: {
      el: ["Αξιολόγηση ελαστικότητας και περιγράμματος", "Καθαρισμός & αγώγιμο μέσο", "Εφαρμογή RF σε πρόσωπο, γνάθο και λαιμό", "Ορός & μάσκα ανάλογα με τον τύπο δέρματος", "Πλάνο συνεδριών και συντήρησης"],
      en: ["Assessment of elasticity and contour", "Cleansing and conductive medium", "RF applied to face, jawline and neck", "Serum and mask matched to skin type", "A session and maintenance plan"],
    },
    faq: {
      el: [
        ["Από ποια ηλικία έχει νόημα;", "Προληπτικά από τα τριάντα πέντε, διορθωτικά όποτε εμφανιστεί χαλάρωση. Όσο νωρίτερα ξεκινήσει, τόσο λιγότερες συνεδρίες χρειάζονται."],
        ["Πότε φαίνεται το αποτέλεσμα;", "Υπάρχει άμεση αίσθηση σύσφιξης από την πρώτη συνεδρία, αλλά το πραγματικό αποτέλεσμα χτίζεται στις έξι έως δώδεκα εβδομάδες που ακολουθούν, καθώς παράγεται νέο κολλαγόνο."],
        ["Υπάρχουν αντενδείξεις;", "Ναι — εγκυμοσύνη, βηματοδότης, μεταλλικά εμφυτεύματα στην περιοχή, ενεργή λοίμωξη. Τα συζητάμε πάντα πριν από την πρώτη συνεδρία."],
      ],
      en: [
        ["At what age does it make sense?", "Preventively from around thirty-five, correctively whenever laxity appears. The earlier you start, the fewer sessions you need."],
        ["When do results show?", "There is an immediate tightening sensation from the first session, but the real result builds over the following six to twelve weeks as new collagen is produced."],
        ["Are there contraindications?", "Yes — pregnancy, a pacemaker, metal implants in the area, active infection. We always discuss these before the first session."],
      ],
    },
  },
  {
    key: "antigiransi",
    cat: "prosopo",
    icon: "leaf",
    slug: { el: "antigiransi-lampsi", en: "anti-ageing" },
    nav: { el: "Αντιγήρανση", en: "Anti-ageing" },
    h1: { el: "Αντιγήρανση & Λάμψη", en: "Anti-ageing & Glow" },
    duration: { el: "60΄", en: "60 min" },
    featured: true,
    media: { img: "poster-exosomes", alt: { el: "Exosomes — ενίσχυση της αντιοξειδωτικής ικανότητας", en: "Exosomes — boosting antioxidant capacity" } },
    lead: {
      el: "Skin longevity: δεν κυνηγάμε τα χρόνια πίσω, φροντίζουμε το δέρμα να γερνά καλά.",
      en: "Skin longevity: we do not chase years backwards, we help skin age well.",
    },
    title: {
      el: "Αντιγήρανση Προσώπου Κως | Exosomes & Ρετινόλη — BNL",
      en: "Anti-ageing Facials in Kos | Exosomes & Retinol — BNL",
    },
    desc: {
      el: "Θεραπείες αντιγήρανσης στο Ζηπάρι Κω με exosomes, multisomes και ρετινόλη Dermagenetic. Λιγότερη χρόνια φλεγμονή, ισχυρότερος δερματικός φραγμός, ορατή λάμψη.",
      en: "Anti-ageing treatments in Zipari, Kos with Dermagenetic exosomes, multisomes and retinol. Less chronic inflammation, a stronger skin barrier, visible glow.",
    },
    keywords: {
      el: "αντιγήρανση Κως, exosomes Κως, ρετινόλη Κως, θεραπεία ρυτίδων Ζηπάρι, skin longevity",
      en: "anti-ageing Kos, exosomes Kos, retinol Kos, wrinkle treatment Zipari, skin longevity",
    },
    body: {
      el: [
        "Το «skin longevity» δεν είναι μάρκετινγκ, είναι αλλαγή στόχου. Δεν προσπαθούμε να εξαφανίσουμε κάθε γραμμή· προσπαθούμε να μειώσουμε τη χρόνια φλεγμονή, να προστατεύσουμε τον δερματικό φραγμό και τη χλωρίδα του, να υποστηρίξουμε την κυτταρική ενέργεια και να προσαρμόσουμε τη φροντίδα στην ηλικία και στον τρόπο ζωής.",
        "Στην πράξη αυτό σημαίνει τρία εργαλεία που δουλεύουν μαζί. Τα exosomes μεταφέρουν σήματα από κύτταρο σε κύτταρο, ενεργοποιώντας την παραγωγή κολλαγόνου και ελαστίνης και μειώνοντας τη φλεγμονή. Τα multisomes είναι προϊόν εξωκυττάρωσης που ενισχύει τους μηχανισμούς επιδιόρθωσης. Η ρετινόλη σε αμπούλα, στη βραδινή ρουτίνα, δουλεύει την κυτταρική ανανέωση, τους πόρους και την υπερμελάγχρωση.",
        "Κανένα από τα τρία δεν είναι «για όλους». Τα exosomes δεν ενδείκνυνται σε ενεργή λοίμωξη ή σε όσες θέλουν αποτέλεσμα χωρίς κανένα ερέθισμα ανάπλασης, και η ρετινόλη χρειάζεται σταδιακή εισαγωγή. Γι' αυτό η επιλογή γίνεται μετά από ανάλυση και όχι από κατάλογο.",
      ],
      en: [
        "Skin longevity is not marketing, it is a change of target. We are not trying to erase every line; we are trying to reduce chronic inflammation, protect the skin barrier and its microbiome, support cellular energy, and adapt care to your age and lifestyle.",
        "In practice that means three tools working together. Exosomes carry signals from cell to cell, triggering collagen and elastin production and lowering inflammation. Multisomes are an exocytosis product that strengthens repair mechanisms. Retinol in ampoule form, used in the evening routine, works on cell turnover, pores and hyperpigmentation.",
        "None of the three is for everyone. Exosomes are not indicated with an active infection, or for someone who wants results with no regenerative stimulus at all, and retinol needs to be introduced gradually. That is why the choice follows an analysis rather than a menu.",
      ],
    },
    includes: {
      el: ["Ανάλυση επιδερμίδας & στόχων", "Πρωτόκολλο με exosomes ή multisomes", "Συνδυασμός με microneedling όπου ενδείκνυται", "Αμπούλα ρετινόλης για τη βραδινή ρουτίνα", "Πλάνο φροντίδας προσαρμοσμένο στην ηλικία"],
      en: ["Skin and goal analysis", "Protocol with exosomes or multisomes", "Combined with microneedling where indicated", "Retinol ampoule for the evening routine", "A care plan adapted to your age"],
    },
    faq: {
      el: [
        ["Τι ακριβώς είναι τα exosomes;", "Προϊόν εξωκυττάρωσης που περιέχει πρωτεΐνες, ορμόνες, πεπτίδια και λιπίδια. Λειτουργούν ως μεταφορείς πληροφορίας στα κύτταρα του δέρματος, ενεργοποιώντας τους μηχανισμούς επιδιόρθωσης και ανάπλασης."],
        ["Μπορώ να ξεκινήσω ρετινόλη το καλοκαίρι;", "Ναι, αλλά με χαμηλότερη συχνότητα και με απόλυτη συνέπεια στο αντηλιακό. Στην Κω ο ήλιος είναι δυνατός και η ρετινόλη κάνει το δέρμα πιο ευαίσθητο."],
        ["Σε ποια ηλικία ξεκινά η αντιγήρανση;", "Από τη στιγμή που θέλετε να μειώσετε ρυθμό γήρανσης και όχι να διορθώσετε βλάβη. Στην πράξη, οι περισσότερες ξεκινούν γύρω στα τριάντα."],
      ],
      en: [
        ["What exactly are exosomes?", "An exocytosis product containing proteins, hormones, peptides and lipids. They act as information carriers to skin cells, switching on repair and regeneration mechanisms."],
        ["Can I start retinol in summer?", "Yes, but at a lower frequency and with absolute consistency on sunscreen. The sun in Kos is strong and retinol makes skin more sensitive."],
        ["At what age does anti-ageing start?", "From the moment you want to slow ageing down rather than repair damage. In practice most people start around thirty."],
      ],
    },
  },
  {
    key: "akmi",
    cat: "prosopo",
    icon: "shield",
    slug: { el: "therapeia-akmis", en: "acne-treatment" },
    nav: { el: "Θεραπεία Ακμής", en: "Acne Treatment" },
    h1: { el: "Θεραπεία Ακμής", en: "Acne Treatment" },
    duration: { el: "60΄", en: "60 min" },
    media: { img: "poster-metallo-mineral", alt: { el: "Metallo Mineral Skincare — ορυκτή κάλυψη χωρίς parabens", en: "Metallo Mineral Skincare — mineral coverage without parabens" } },
    lead: {
      el: "Η ακμή δεν θέλει επιθετικότητα, θέλει σταθερότητα — και προϊόντα που δεν φράζουν τους πόρους.",
      en: "Acne does not need aggression, it needs consistency — and products that do not clog pores.",
    },
    title: {
      el: "Θεραπεία Ακμής Κως | Αισθητικός Ζηπάρι — BNL",
      en: "Acne Treatment in Kos | Aesthetician in Zipari — BNL",
    },
    desc: {
      el: "Θεραπεία ακμής και λιπαρότητας στο Ζηπάρι Κω. Ρύθμιση σμήγματος, αποσυμφόρηση πόρων και σειρά Metallo Mineral χωρίς parabens, talc ή silicone.",
      en: "Acne and oiliness treatment in Zipari, Kos. Sebum regulation, pore decongestion and the Metallo Mineral range — free of parabens, talc and silicone.",
    },
    keywords: {
      el: "θεραπεία ακμής Κως, ακμή Ζηπάρι, λιπαρό δέρμα Κως, σπυράκια αισθητικός Κως",
      en: "acne treatment Kos, acne Zipari, oily skin Kos, breakouts beautician Kos",
    },
    body: {
      el: [
        "Το πιο συχνό λάθος στην ακμή είναι η επιθετικότητα: δυνατά καθαριστικά, οινόπνευμα, στέγνωμα του δέρματος. Το αποτέλεσμα είναι ότι ο δερματικός φραγμός καταρρέει, το δέρμα παράγει ακόμη περισσότερο σμήγμα για να αμυνθεί, και ο κύκλος κλείνει χειρότερος απ' ό,τι ξεκίνησε.",
        "Το πρωτόκολλό μας δουλεύει προς την άλλη κατεύθυνση. Ρυθμίζουμε την έκκριση σμήγματος χωρίς να αφυδατώσουμε, αποσυμφορούμε τους πόρους με ήπια μέσα, αντιμετωπίζουμε τη φλεγμονή και ενισχύουμε τον φραγμό ώστε το δέρμα να μπορεί να αμυνθεί μόνο του. Οι συνεδρίες είναι τακτικές, γιατί στην ακμή μετράει περισσότερο η συνέπεια παρά η ένταση.",
        "Παράλληλα κοιτάμε τι μπαίνει πάνω στο δέρμα εκτός καμπίνας. Χρησιμοποιούμε τη σειρά Metallo Mineral Skincare της Dermagenetic: ορυκτή κάλυψη με αντηλιακή δράση και δείκτη προστασίας 15, χωρίς parabens, talc, silicone, μικροπλαστικά ή αλκοόλη, υποαλλεργική και κατάλληλη για ευαισθητοποιημένες και με ροδόχρου επιδερμίδες. Μπορεί να φορεθεί και αμέσως μετά από ιατρικές πράξεις.",
      ],
      en: [
        "The most common mistake with acne is aggression: harsh cleansers, alcohol, drying the skin out. The result is that the skin barrier collapses, the skin produces even more sebum to defend itself, and the cycle closes in a worse place than it started.",
        "Our protocol works the other way. We regulate sebum without dehydrating, decongest pores with gentle means, address inflammation, and strengthen the barrier so the skin can defend itself. Sessions are regular, because with acne consistency matters more than intensity.",
        "In parallel we look at what goes onto the skin outside the cabin. We use Dermagenetic's Metallo Mineral Skincare: mineral coverage with sun protection factor 15, free of parabens, talc, silicone, microplastics and alcohol, hypoallergenic and suitable for sensitised and rosacea-prone skin. It can even be worn immediately after medical procedures.",
      ],
    },
    includes: {
      el: ["Ανάλυση τύπου και βαθμού ακμής", "Ήπιος καθαρισμός & αποσυμφόρηση πόρων", "Αντιφλεγμονώδη & ρυθμιστικά πρωτόκολλα", "Ενίσχυση δερματικού φραγμού", "Σύσταση ρουτίνας και μη κωμεδογόνου κάλυψης"],
      en: ["Analysis of acne type and grade", "Gentle cleansing and pore decongestion", "Anti-inflammatory and regulating protocols", "Skin-barrier strengthening", "A routine and non-comedogenic coverage plan"],
    },
    faq: {
      el: [
        ["Σε πόσο καιρό θα δω διαφορά;", "Η αποσυμφόρηση φαίνεται από τις πρώτες συνεδρίες. Η πραγματική αλλαγή στη συχνότητα των εξάρσεων θέλει δύο έως τρεις μήνες συνέπειας."],
        ["Μπορώ να βάζω μακιγιάζ;", "Ναι, εφόσον είναι μη κωμεδογόνο. Η ορυκτή σειρά που χρησιμοποιούμε δίνει κάλυψη χωρίς να φράζει τους πόρους και έχει και αντηλιακή δράση."],
        ["Συνεργάζεστε με δερματολόγο;", "Σε βαριές μορφές ακμής, ναι — η αισθητική φροντίδα λειτουργεί συμπληρωματικά στη φαρμακευτική αγωγή και ποτέ σε αντικατάστασή της."],
      ],
      en: [
        ["How long until I see a difference?", "Decongestion shows from the first sessions. Real change in how often breakouts appear takes two to three months of consistency."],
        ["Can I wear make-up?", "Yes, as long as it is non-comedogenic. The mineral range we use gives coverage without clogging pores and adds sun protection."],
        ["Do you work with a dermatologist?", "For severe acne, yes — aesthetic care complements medical treatment and never replaces it."],
      ],
    },
  },
  {
    key: "leukansi",
    cat: "prosopo",
    icon: "sun",
    slug: { el: "leukansi-dyschromies", en: "pigmentation" },
    nav: { el: "Λεύκανση & Δυσχρωμίες", en: "Pigmentation" },
    h1: { el: "Λεύκανση & Δυσχρωμίες", en: "Brightening & Pigmentation" },
    duration: { el: "50΄", en: "50 min" },
    media: { img: "poster-ratin", alt: { el: "Ratin — αμπούλα ρετινόλης", en: "Ratin — retinol ampoule" } },
    lead: {
      el: "Πανάδες και κηλίδες στο νησί δεν λύνονται χωρίς αντηλιακό — και δεν λύνονται μέσα σε μία συνεδρία.",
      en: "On an island, melasma and dark spots are not solved without sunscreen — and not in a single session.",
    },
    title: {
      el: "Λεύκανση Προσώπου & Πανάδες Κως | BNL Ζηπάρι",
      en: "Brightening & Dark Spots in Kos | BNL Zipari",
    },
    desc: {
      el: "Θεραπείες λεύκανσης και δυσχρωμιών στο Ζηπάρι Κω. Πανάδες, κηλίδες ηλίου και μεταφλεγμονώδης υπερμελάγχρωση, με πρωτόκολλα προσαρμοσμένα στο νησιωτικό κλίμα.",
      en: "Brightening and pigmentation treatments in Zipari, Kos. Melasma, sun spots and post-inflammatory hyperpigmentation, with protocols adapted to island sun.",
    },
    keywords: {
      el: "πανάδες Κως, δυσχρωμίες Κως, λεύκανση προσώπου Κως, κηλίδες ηλίου Ζηπάρι",
      en: "melasma Kos, pigmentation Kos, skin brightening Kos, sun spots Zipari",
    },
    body: {
      el: [
        "Οι δυσχρωμίες δεν είναι όλες το ίδιο πράγμα. Άλλο η πανάδα που συνδέεται με ορμόνες, άλλο η κηλίδα ηλίου που έχει χτιστεί σε χρόνια έκθεσης, άλλο η μεταφλεγμονώδης σκίαση που μένει μετά από ένα σπυράκι. Κάθε μία θέλει διαφορετική προσέγγιση και έχει διαφορετικό χρονικό ορίζοντα.",
        "Γι' αυτό ξεκινάμε από την ανάλυση: το APOPSIS δείχνει σε ποιο βάθος βρίσκεται η χρωστική, κάτι που καθορίζει τόσο την επιλογή του πρωτοκόλλου όσο και τις ρεαλιστικές προσδοκίες. Ακολουθεί συνδυασμός λευκαντικών ενεργών, ήπιας απολέπισης και ενεργών που περιορίζουν την παραγωγή μελανίνης.",
        "Το πιο σημαντικό κομμάτι όμως γίνεται εκτός καμπίνας. Στην Κω η ηλιακή ακτινοβολία είναι δυνατή έντεκα μήνες τον χρόνο, και χωρίς καθημερινό αντηλιακό ευρέος φάσματος κάθε θεραπεία λεύκανσης επιστρέφει. Αυτό το λέμε από την πρώτη συνάντηση, γιατί χωρίς αυτό δεν έχει νόημα να ξεκινήσουμε.",
      ],
      en: [
        "Pigmentation is not one condition. Hormonal melasma is one thing, a sun spot built over years of exposure is another, and the shadow left behind after a breakout is a third. Each needs a different approach and has a different timeline.",
        "So we start with the analysis: APOPSIS shows at what depth the pigment sits, which determines both the protocol and what expectations are realistic. A combination of brightening actives, gentle exfoliation and melanin-inhibiting ingredients follows.",
        "The most important part, though, happens outside the cabin. In Kos the sun is strong eleven months of the year, and without daily broad-spectrum sunscreen every brightening treatment comes undone. We say this at the first meeting, because without it there is no point starting.",
      ],
    },
    includes: {
      el: ["Χαρτογράφηση δυσχρωμιών με APOPSIS", "Ήπια απολέπιση προσαρμοσμένη στην εποχή", "Λευκαντικά & αντιοξειδωτικά ενεργά", "Αμπούλα ρετινόλης για τη βραδινή ρουτίνα", "Σύσταση αντηλιακής προστασίας"],
      en: ["Pigment mapping with APOPSIS", "Gentle exfoliation adapted to the season", "Brightening and antioxidant actives", "Retinol ampoule for the evening routine", "A sun-protection recommendation"],
    },
    faq: {
      el: [
        ["Μπορώ να κάνω λεύκανση το καλοκαίρι;", "Ναι, με πιο ήπια πρωτόκολλα. Τα εντατικά τα κρατάμε για το φθινόπωρο και τον χειμώνα, όταν η έκθεση στον ήλιο είναι μικρότερη."],
        ["Θα φύγουν εντελώς οι πανάδες;", "Η πανάδα ελέγχεται, σπάνια εξαφανίζεται οριστικά, γιατί έχει και ορμονικό υπόβαθρο. Στόχος είναι να ξεθωριάσει αισθητά και να μην επανέρχεται."],
        ["Πόσες συνεδρίες χρειάζονται;", "Συνήθως έξι έως οκτώ σε διάστημα δύο έως τριών μηνών, και μετά συντήρηση με τη ρουτίνα σπιτιού."],
      ],
      en: [
        ["Can I do brightening in summer?", "Yes, with gentler protocols. We keep the intensive ones for autumn and winter, when sun exposure is lower."],
        ["Will the melasma disappear completely?", "Melasma is controlled, rarely eliminated for good, because it has a hormonal component. The goal is a visible fade and no relapse."],
        ["How many sessions are needed?", "Usually six to eight over two to three months, then maintenance through the home routine."],
      ],
    },
  },
  {
    key: "enydatosi",
    cat: "prosopo",
    icon: "drop2",
    slug: { el: "enydatosi-threpsi", en: "hydration" },
    nav: { el: "Ενυδάτωση & Θρέψη", en: "Hydration" },
    h1: { el: "Ενυδάτωση & Θρέψη", en: "Hydration & Nourishment" },
    duration: { el: "45΄", en: "45 min" },
    media: { img: "space-lounge", alt: { el: "Ο χώρος αναμονής του BNL", en: "The BNL waiting area" } },
    lead: {
      el: "Το πιο υποτιμημένο πρόβλημα του δέρματος στο νησί: αφυδάτωση που μοιάζει με λιπαρότητα.",
      en: "The island's most underrated skin problem: dehydration that looks like oiliness.",
    },
    title: {
      el: "Ενυδάτωση Προσώπου Κως | Θεραπεία Θρέψης — BNL Ζηπάρι",
      en: "Facial Hydration in Kos | Nourishing Treatment — BNL Zipari",
    },
    desc: {
      el: "Θεραπεία βαθιάς ενυδάτωσης και θρέψης στο Ζηπάρι Κω. Για δέρμα που τραβά από ήλιο, θάλασσα και κλιματισμό — με ενίσχυση του δερματικού φραγμού.",
      en: "Deep hydration and nourishing facial in Zipari, Kos. For skin stressed by sun, sea and air-conditioning — with skin-barrier support.",
    },
    keywords: {
      el: "ενυδάτωση προσώπου Κως, αφυδατωμένο δέρμα Κως, θεραπεία θρέψης Ζηπάρι",
      en: "facial hydration Kos, dehydrated skin Kos, nourishing facial Zipari",
    },
    body: {
      el: [
        "Στην Κω το δέρμα δέχεται πίεση από τρεις πλευρές ταυτόχρονα: ήλιο, αλάτι και κλιματισμό. Το αποτέλεσμα είναι αφυδάτωση, δηλαδή έλλειψη νερού — που είναι διαφορετικό πράγμα από την ξηρότητα, την έλλειψη λιπιδίων. Και επειδή το αφυδατωμένο δέρμα παράγει περισσότερο σμήγμα για να αντισταθμίσει, πολλές φορές περιγράφεται λανθασμένα ως λιπαρό.",
        "Η θεραπεία δουλεύει σε δύο επίπεδα. Πρώτα δίνει νερό στο δέρμα με υαλουρονικό διαφορετικού μοριακού βάρους, ώστε να ενυδατωθούν και οι επιφανειακές και οι βαθύτερες στιβάδες. Έπειτα χτίζει τον φραγμό με λιπίδια, κεραμίδια και καταπραϋντικά, ώστε το νερό να μένει μέσα.",
        "Το αποτέλεσμα είναι άμεσο και ορατό: το δέρμα φαίνεται γεμάτο, οι λεπτές γραμμές αφυδάτωσης μαλακώνουν και η λάμψη επιστρέφει. Είναι η θεραπεία που προτείνουμε πιο συχνά σε πρώτη επίσκεψη, γιατί σε πολλές περιπτώσεις λύνει μόνη της ό,τι φαινόταν σύνθετο πρόβλημα.",
      ],
      en: [
        "In Kos, skin is under pressure from three directions at once: sun, salt and air-conditioning. The result is dehydration — a lack of water, which is a different thing from dryness, a lack of lipids. And because dehydrated skin produces more sebum to compensate, it is often wrongly described as oily.",
        "The treatment works on two levels. First it gives the skin water, using hyaluronic acid at different molecular weights so both the surface and the deeper layers are hydrated. Then it rebuilds the barrier with lipids, ceramides and soothing agents, so the water stays in.",
        "The effect is immediate and visible: the skin looks full, fine dehydration lines soften and glow returns. It is the treatment we most often suggest at a first visit, because in many cases it resolves on its own what looked like a complicated problem.",
      ],
    },
    includes: {
      el: ["Μέτρηση επιπέδου ενυδάτωσης", "Ήπιος καθαρισμός & απολέπιση", "Υαλουρονικό πολλαπλού μοριακού βάρους", "Λιπίδια & κεραμίδια για τον φραγμό", "Μάσκα εντατικής ενυδάτωσης"],
      en: ["Hydration-level measurement", "Gentle cleansing and exfoliation", "Multi-weight hyaluronic acid", "Lipids and ceramides for the barrier", "Intensive hydrating mask"],
    },
    faq: {
      el: [
        ["Πώς ξέρω αν είμαι αφυδατωμένη και όχι λιπαρή;", "Το πιο συχνό σημάδι είναι ξαφνική λιπαρότητα σε δέρμα που δεν ήταν λιπαρό, συχνά μαζί με τσούξιμο. Η μέτρηση το δείχνει με βεβαιότητα."],
        ["Κάθε πότε;", "Στη διάρκεια του καλοκαιριού, κάθε τρεις έως τέσσερις εβδομάδες. Τον χειμώνα, κάθε έξι."],
        ["Ταιριάζει σε ευαίσθητο δέρμα;", "Ναι — είναι η πιο ήπια θεραπεία του καταλόγου μας και συχνά η πρώτη που κάνουμε σε ευαισθητοποιημένο δέρμα πριν από οτιδήποτε άλλο."],
      ],
      en: [
        ["How do I know I am dehydrated and not oily?", "The most common sign is sudden oiliness on skin that was not oily before, often together with stinging. The measurement confirms it."],
        ["How often?", "Through the summer, every three to four weeks. In winter, every six."],
        ["Is it suitable for sensitive skin?", "Yes — it is the gentlest treatment we offer, and often the first one we do on sensitised skin before anything else."],
      ],
    },
  },

  // ------------------------------------------------------------ ΣΩΜΑ
  {
    key: "adynatisma",
    cat: "soma",
    icon: "body",
    slug: { el: "adynatisma-lipodialysi", en: "slimming-lipolysis" },
    nav: { el: "Αδυνάτισμα & Λιποδιάλυση", en: "Slimming & Lipolysis" },
    h1: { el: "Αδυνάτισμα & Λιποδιάλυση", en: "Slimming & Lipolysis" },
    duration: { el: "60΄", en: "60 min" },
    featured: true,
    media: { img: "space-entrance", alt: { el: "Η είσοδος του κέντρου BNL στο Ζηπάρι", en: "The entrance of the BNL centre in Zipari" } },
    lead: {
      el: "Μηχανήματα σώματος για το τοπικό πάχος που δεν υποχωρεί, όσο και να προσέχετε.",
      en: "Body technology for the localised fat that will not shift, however careful you are.",
    },
    title: {
      el: "Αδυνάτισμα & Λιποδιάλυση Κως | Τοπικό Πάχος — BNL Ζηπάρι",
      en: "Slimming & Lipolysis in Kos | Localised Fat — BNL Zipari",
    },
    desc: {
      el: "Θεραπείες αδυνατίσματος και λιποδιάλυσης στο Ζηπάρι Κω. Μηχανήματα σώματος για τοπικό πάχος σε κοιλιά, γλουτούς και μηρούς, με μέτρηση σύστασης σώματος.",
      en: "Slimming and lipolysis treatments in Zipari, Kos. Body technology for localised fat on the abdomen, buttocks and thighs, with body-composition measurement.",
    },
    keywords: {
      el: "αδυνάτισμα Κως, λιποδιάλυση Κως, τοπικό πάχος Κως, μηχανήματα σώματος Ζηπάρι",
      en: "slimming Kos, lipolysis Kos, localised fat Kos, body treatments Zipari",
    },
    body: {
      el: [
        "Το τοπικό πάχος έχει μια εκνευριστική ιδιότητα: δεν ακολουθεί το υπόλοιπο σώμα. Κάποιος μπορεί να χάσει βάρος παντού και η κοιλιά ή οι μηροί να μείνουν ίδιοι. Αυτό συμβαίνει γιατί το λίπος σε αυτές τις περιοχές είναι λιγότερο ευαίσθητο στα ορμονικά σήματα της λιπόλυσης.",
        "Οι θεραπείες λιποδιάλυσης δουλεύουν ακριβώς εκεί: κινητοποιούν το λίπος στη συγκεκριμένη περιοχή και το κάνουν διαθέσιμο προς αποβολή. Κάθε συνεδρία κλείνει με λεμφική αποσυμφόρηση ή πρεσσοθεραπεία, ώστε ό,τι κινητοποιήθηκε να φύγει πραγματικά και να μη γυρίσει πίσω.",
        "Θα είμαστε ειλικρινείς: καμία θεραπεία σώματος δεν αντικαθιστά τη διατροφή και την κίνηση. Λειτουργεί όμως πολύ καλά ως επιτάχυνση και ως λύση για τις περιοχές που αντιστέκονται. Πριν ξεκινήσουμε γίνεται μέτρηση σύστασης σώματος με τον μαγνητικό αναλυτή, και επαναλαμβάνεται στο τέλος του κύκλου — ώστε να μιλάμε με αριθμούς.",
      ],
      en: [
        "Localised fat has an infuriating property: it does not follow the rest of the body. Someone can lose weight everywhere and the abdomen or thighs stay exactly the same. That happens because fat in these areas is less responsive to the hormonal signals of lipolysis.",
        "Lipolysis treatments work precisely there: they mobilise fat in a specific area and make it available for elimination. Every session closes with lymphatic drainage or pressotherapy, so that what was mobilised actually leaves rather than settling back.",
        "We will be honest: no body treatment replaces diet and movement. But it works very well as an accelerator and as a solution for the areas that resist. Before we start we measure body composition with the magnetic analyser, and repeat it at the end of the course — so we can talk in numbers.",
      ],
    },
    includes: {
      el: ["Μέτρηση σύστασης σώματος", "Στοχευμένο πρωτόκολλο ανά περιοχή", "Θεραπεία λιποδιάλυσης με μηχάνημα", "Λεμφική αποσυμφόρηση στο κλείσιμο", "Επαναμέτρηση στο τέλος του κύκλου"],
      en: ["Body-composition measurement", "Targeted protocol per area", "Device-assisted lipolysis treatment", "Lymphatic drainage to close the session", "Re-measurement at the end of the course"],
    },
    faq: {
      el: [
        ["Πόσες συνεδρίες χρειάζονται;", "Συνήθως οκτώ έως δώδεκα, δύο την εβδομάδα. Ο ακριβής αριθμός εξαρτάται από την περιοχή και από τη μέτρηση της αρχικής σύστασης."],
        ["Θα ξαναπάρω αυτό που έχασα;", "Όχι, αν διατηρηθεί η διατροφή και η κίνηση. Οι θεραπείες κινητοποιούν το λίπος, δεν αλλάζουν τις συνήθειες που το δημιούργησαν."],
        ["Πονάει;", "Όχι. Η αίσθηση είναι ζεστή ή σαν δόνηση, ανάλογα με το πρωτόκολλο. Μπορείτε να επιστρέψετε αμέσως στις δραστηριότητές σας."],
      ],
      en: [
        ["How many sessions are needed?", "Usually eight to twelve, twice a week. The exact number depends on the area and on the initial body-composition measurement."],
        ["Will I put it back on?", "Not if diet and movement are maintained. The treatments mobilise fat; they do not change the habits that created it."],
        ["Does it hurt?", "No. It feels warm or like a vibration, depending on the protocol. You can go straight back to your day."],
      ],
    },
  },
  {
    key: "sysfixi",
    cat: "soma",
    icon: "arrowup",
    slug: { el: "sysfixi-anorthosi", en: "firming-lifting" },
    nav: { el: "Σύσφιξη & Ανόρθωση", en: "Firming & Lifting" },
    h1: { el: "Σύσφιξη, Ανόρθωση & Λιπογλυπτική", en: "Firming, Lifting & Body Contouring" },
    duration: { el: "60΄", en: "60 min" },
    media: { img: "poster-riziki-apotrichosi", alt: { el: "Ο εξοπλισμός του κέντρου BNL", en: "Equipment at the BNL centre" } },
    lead: {
      el: "Η χαλάρωση δεν διορθώνεται με απώλεια βάρους — θέλει ερέθισμα για νέο κολλαγόνο.",
      en: "Laxity is not corrected by losing weight — it needs a stimulus for new collagen.",
    },
    title: {
      el: "Σύσφιξη Σώματος & Λιπογλυπτική Κως | BNL Ζηπάρι",
      en: "Body Firming & Contouring in Kos | BNL Zipari",
    },
    desc: {
      el: "Θεραπείες σύσφιξης, ανόρθωσης και λιπογλυπτικής στο Ζηπάρι Κω. Για χαλάρωση μετά από απώλεια βάρους ή εγκυμοσύνη, με ραδιοσυχνότητες και στοχευμένα πρωτόκολλα.",
      en: "Firming, lifting and body-contouring treatments in Zipari, Kos. For laxity after weight loss or pregnancy, using radiofrequency and targeted protocols.",
    },
    keywords: {
      el: "σύσφιξη σώματος Κως, λιπογλυπτική Κως, ανόρθωση γλουτών Κως, χαλάρωση δέρματος Ζηπάρι",
      en: "body firming Kos, body contouring Kos, buttock lifting Kos, skin laxity Zipari",
    },
    body: {
      el: [
        "Μετά από απώλεια βάρους, μετά από εγκυμοσύνη ή απλώς με τα χρόνια, το δέρμα του σώματος χαλαρώνει. Το περίεργο είναι ότι όσο περισσότερο βάρος χάνει κανείς, τόσο πιο έντονα φαίνεται — γιατί το λίπος που γέμιζε τον χώρο έφυγε, αλλά το δέρμα δεν μαζεύτηκε ανάλογα.",
        "Η σύσφιξη δουλεύει με ερέθισμα, όχι με αφαίρεση. Οι ραδιοσυχνότητες θερμαίνουν ελεγχόμενα το χόριο και ενεργοποιούν τους ινοβλάστες να παράγουν νέο κολλαγόνο και ελαστίνη. Το αποτέλεσμα δεν είναι άμεσο: χτίζεται στις εβδομάδες μετά τη συνεδρία, και γι' αυτό ο κύκλος έχει νόημα μόνο ολόκληρος.",
        "Η λιπογλυπτική είναι το επόμενο βήμα: αντί να μειώσουμε παντού, δουλεύουμε το περίγραμμα. Στοχεύουμε σε συγκεκριμένες περιοχές — μέση, γλουτοί, εσωτερικό μηρού, μπράτσα — ώστε το σχήμα να βελτιωθεί και όχι απλώς το μέγεθος. Συνδυάζεται σχεδόν πάντα με λεμφική αποσυμφόρηση.",
      ],
      en: [
        "After weight loss, after pregnancy, or simply with the years, body skin loosens. The odd part is that the more weight you lose, the more obvious it becomes — the fat that filled the space has gone, but the skin has not retracted to match.",
        "Firming works by stimulus, not by removal. Radiofrequency heats the dermis in a controlled way and prompts fibroblasts to produce new collagen and elastin. The result is not immediate: it builds over the weeks after the session, which is why a course only makes sense in full.",
        "Body contouring is the next step: instead of reducing everywhere, we work the outline. We target specific areas — waist, buttocks, inner thigh, arms — so that the shape improves rather than just the size. It is almost always combined with lymphatic drainage.",
      ],
    },
    includes: {
      el: ["Αξιολόγηση ελαστικότητας ανά περιοχή", "Πρωτόκολλο RF σώματος", "Στοχευμένη λιπογλυπτική περιγράμματος", "Λεμφική αποσυμφόρηση στο κλείσιμο", "Οδηγίες ενυδάτωσης & κίνησης"],
      en: ["Elasticity assessment per area", "Body RF protocol", "Targeted contour sculpting", "Lymphatic drainage to close", "Hydration and movement guidance"],
    },
    faq: {
      el: [
        ["Ταιριάζει μετά από εγκυμοσύνη;", "Ναι, αφού περάσουν τουλάχιστον τρεις μήνες από τον τοκετό και εφόσον δεν θηλάζετε. Το συζητάμε αναλυτικά στην πρώτη συνάντηση."],
        ["Πόσο κρατάει το αποτέλεσμα;", "Το νέο κολλαγόνο παραμένει. Η φυσική γήρανση συνεχίζεται όμως, οπότε προτείνουμε συνεδρίες συντήρησης κάθε ένα με δύο μήνες."],
        ["Μπορώ να το συνδυάσω με αδυνάτισμα;", "Ναι, και συνήθως είναι η σωστή σειρά: πρώτα μειώνουμε τον όγκο, μετά δουλεύουμε τη σύσφιξη για να ακολουθήσει το δέρμα."],
      ],
      en: [
        ["Is it suitable after pregnancy?", "Yes, once at least three months have passed since the birth and provided you are not breastfeeding. We discuss this in detail at the first meeting."],
        ["How long does the result last?", "The new collagen stays. Natural ageing continues, though, so we suggest maintenance sessions every one to two months."],
        ["Can I combine it with slimming?", "Yes, and that is usually the right order: reduce the volume first, then work on firming so the skin follows."],
      ],
    },
  },
  {
    key: "lemfiki",
    cat: "soma",
    icon: "flow",
    slug: { el: "lemfiki-apossymforisi-pressotherapeia", en: "lymphatic-drainage-pressotherapy" },
    nav: { el: "Λεμφική & Πρεσσοθεραπεία", en: "Lymphatic Drainage" },
    h1: { el: "Λεμφική Αποσυμφόρηση & Πρεσσοθεραπεία", en: "Lymphatic Drainage & Pressotherapy" },
    duration: { el: "45΄", en: "45 min" },
    media: { img: "massage", alt: { el: "Λεμφική αποσυμφόρηση στο BNL", en: "Lymphatic drainage at BNL" } },
    lead: {
      el: "Για βαριά πόδια, κατακράτηση και το κλείσιμο κάθε θεραπείας σώματος.",
      en: "For heavy legs, fluid retention, and to close every body treatment properly.",
    },
    title: {
      el: "Λεμφική Αποσυμφόρηση & Πρεσσοθεραπεία Κως | BNL Ζηπάρι",
      en: "Lymphatic Drainage & Pressotherapy in Kos | BNL Zipari",
    },
    desc: {
      el: "Λεμφική αποσυμφόρηση και πρεσσοθεραπεία στο Ζηπάρι Κω. Για κατακράτηση υγρών, βαριά πόδια, κυτταρίτιδα και μετά από θεραπείες σώματος.",
      en: "Lymphatic drainage and pressotherapy in Zipari, Kos. For fluid retention, heavy legs, cellulite and after body treatments.",
    },
    keywords: {
      el: "λεμφική αποσυμφόρηση Κως, πρεσσοθεραπεία Κως, κατακράτηση υγρών Κως, βαριά πόδια Ζηπάρι",
      en: "lymphatic drainage Kos, pressotherapy Kos, fluid retention Kos, heavy legs Zipari",
    },
    body: {
      el: [
        "Το λεμφικό σύστημα δεν έχει αντλία. Σε αντίθεση με το αίμα, που το σπρώχνει η καρδιά, η λέμφος κινείται από τη μυϊκή συστολή και την αναπνοή. Γι' αυτό η καθιστική ζωή, η πολλή ορθοστασία και η ζέστη — τρία πράγματα που στο νησί τα έχουμε όλα — οδηγούν σε στασιμότητα, πρήξιμο και αίσθηση βάρους.",
        "Η λεμφική αποσυμφόρηση είναι απαλό, ρυθμικό μασάζ που ακολουθεί την ανατομική πορεία της λέμφου προς τους λεμφαδένες. Δεν είναι δυνατό μασάζ — η πίεση είναι σκόπιμα ελαφριά, γιατί τα λεμφικά αγγεία βρίσκονται ακριβώς κάτω από το δέρμα και με δυνατή πίεση κλείνουν αντί να ανοίξουν.",
        "Η πρεσσοθεραπεία κάνει το ίδιο μηχανικά: μπότες με θαλάμους φουσκώνουν διαδοχικά από τα πόδια προς τον κορμό, δημιουργώντας κύμα που ωθεί τα υγρά προς τη σωστή κατεύθυνση. Συνδυάζονται πολύ καλά και είναι το απαραίτητο κλείσιμο μετά από λιποδιάλυση ή λιπογλυπτική.",
      ],
      en: [
        "The lymphatic system has no pump. Unlike blood, pushed by the heart, lymph moves through muscle contraction and breathing. That is why a sedentary routine, long hours standing, and heat — three things an island gives you in full — lead to stagnation, swelling and a feeling of heaviness.",
        "Lymphatic drainage is a gentle, rhythmic massage that follows the anatomical path of lymph towards the nodes. It is not a deep massage — the pressure is deliberately light, because lymphatic vessels sit just beneath the skin and firm pressure closes them instead of opening them.",
        "Pressotherapy does the same mechanically: chambered boots inflate in sequence from the feet towards the trunk, creating a wave that pushes fluid in the right direction. The two combine very well and are the necessary closing step after lipolysis or contouring.",
      ],
    },
    includes: {
      el: ["Αξιολόγηση κατακράτησης και κυκλοφορίας", "Χειρωνακτική λεμφική αποσυμφόρηση", "Πρεσσοθεραπεία με διαδοχικούς θαλάμους", "Συνδυασμός με αιθέρια έλαια όπου ενδείκνυται", "Οδηγίες για το σπίτι"],
      en: ["Assessment of retention and circulation", "Manual lymphatic drainage", "Sequential-chamber pressotherapy", "Essential oils where indicated", "Guidance for home care"],
    },
    faq: {
      el: [
        ["Βοηθά στην κυτταρίτιδα;", "Βοηθά σημαντικά στο κομμάτι της κατακράτησης και της κακής κυκλοφορίας, που είναι μέρος του προβλήματος. Δεν αντικαθιστά όμως τις θεραπείες που στοχεύουν στο ίδιο το λίπος."],
        ["Πόσο συχνά;", "Για κατακράτηση, μία έως δύο φορές την εβδομάδα σε κύκλο. Ως κλείσιμο άλλων θεραπειών, στην ίδια συνεδρία."],
        ["Υπάρχουν αντενδείξεις;", "Ναι — ενεργή λοίμωξη, θρόμβωση, μη ρυθμισμένη καρδιακή ή νεφρική ανεπάρκεια, ενεργή ογκολογική νόσος. Ρωτάμε πάντα πριν ξεκινήσουμε."],
      ],
      en: [
        ["Does it help with cellulite?", "It helps considerably with the retention and poor-circulation component, which is part of the problem. It does not replace treatments that target the fat itself."],
        ["How often?", "For retention, once or twice a week in a course. As the closing step of other treatments, in the same session."],
        ["Are there contraindications?", "Yes — active infection, thrombosis, uncontrolled cardiac or renal failure, active cancer. We always ask before starting."],
      ],
    },
  },
  {
    key: "masaz",
    cat: "evexia",
    icon: "hands",
    slug: { el: "masaz-reflexologia", en: "massage-reflexology" },
    nav: { el: "Μασάζ & Ρεφλεξολογία", en: "Massage & Reflexology" },
    h1: { el: "Μασάζ & Ρεφλεξολογία", en: "Massage & Reflexology" },
    duration: { el: "45–60΄", en: "45–60 min" },
    featured: true,
    media: { img: "massage", alt: { el: "Συνεδρία μασάζ στο BNL", en: "A massage session at BNL" } },
    lead: {
      el: "Το κομμάτι της δουλειάς μας που δεν διορθώνει τίποτα — ξεκουράζει.",
      en: "The part of our work that corrects nothing — it restores.",
    },
    title: {
      el: "Μασάζ & Ρεφλεξολογία Κως | BNL Ζηπάρι",
      en: "Massage & Reflexology in Kos | BNL Zipari",
    },
    desc: {
      el: "Χαλαρωτικό μασάζ και ρεφλεξολογία στο Ζηπάρι Κω, με αιθέρια έλαια doTERRA. Για ένταση, αϋπνία, πόνο στον αυχένα και γενική ευεξία.",
      en: "Relaxing massage and reflexology in Zipari, Kos, with doTERRA essential oils. For tension, poor sleep, neck pain and general wellbeing.",
    },
    keywords: {
      el: "μασάζ Κως, ρεφλεξολογία Κως, χαλαρωτικό μασάζ Ζηπάρι, αιθέρια έλαια doTERRA Κως",
      en: "massage Kos, reflexology Kos, relaxing massage Zipari, doTERRA essential oils Kos",
    },
    body: {
      el: [
        "Όλες οι υπόλοιπες υπηρεσίες μας διορθώνουν κάτι. Αυτή όχι. Το μασάζ υπάρχει επειδή ένα σώμα που είναι διαρκώς σε ένταση δεν επουλώνεται καλά, δεν κοιμάται καλά και τελικά δεν δείχνει καλά — και αυτό φαίνεται στο δέρμα όσο και οτιδήποτε άλλο.",
        "Προσαρμόζουμε το είδος και την ένταση: χαλαρωτικό για γενική ένταση και άγχος, βαθύτερο για συγκεκριμένους μυϊκούς κόμπους στον αυχένα και στους ώμους, αποσυμφορητικό όταν το ζητούμενο είναι η κυκλοφορία. Δεν υπάρχει ένα σωστό μασάζ — υπάρχει το σωστό για εκείνη τη μέρα.",
        "Η ρεφλεξολογία δουλεύει διαφορετικά: πίεση σε συγκεκριμένα σημεία του πέλματος, που αντιστοιχούν χαρτογραφικά σε όργανα και συστήματα. Πολλές πελάτισσες τη ζητούν για ύπνο, πεπτικά και περιόδους έντονου άγχους. Χρησιμοποιούμε αιθέρια έλαια doTERRA, των οποίων η Μαρία Μάμμη είναι μέλος, επιλεγμένα κάθε φορά ανάλογα με το ζητούμενο.",
      ],
      en: [
        "Every other service we offer corrects something. This one does not. Massage exists because a body that is permanently tense does not heal well, does not sleep well and in the end does not look well — and that shows in the skin as much as anywhere.",
        "We adapt the type and the pressure: relaxing for general tension and stress, deeper for specific knots in the neck and shoulders, decongesting when circulation is the goal. There is no single correct massage — there is the right one for that day.",
        "Reflexology works differently: pressure on specific points of the foot that map to organs and systems. Many clients ask for it for sleep, digestion and periods of heavy stress. We use doTERRA essential oils, of which Maria Mammi is a member, chosen each time to match the goal.",
      ],
    },
    includes: {
      el: ["Σύντομη συζήτηση για το ζητούμενο της ημέρας", "Χαλαρωτικό, βαθύ ή αποσυμφορητικό μασάζ", "Ρεφλεξολογία πέλματος", "Αιθέρια έλαια doTERRA επιλεγμένα κατά περίπτωση", "Χρόνος ηρεμίας στο τέλος"],
      en: ["A short conversation about the day's goal", "Relaxing, deep-tissue or decongesting massage", "Foot reflexology", "doTERRA essential oils chosen per case", "Quiet time at the end"],
    },
    faq: {
      el: [
        ["Μασάζ ή ρεφλεξολογία;", "Το μασάζ αν το θέμα είναι μυϊκή ένταση και πόνος. Τη ρεφλεξολογία αν το θέμα είναι ύπνος, πέψη ή γενική εξάντληση. Συχνά τα συνδυάζουμε."],
        ["Μπορώ να έρθω με τουριστικό πρόγραμμα;", "Ναι. Το καλοκαίρι εξυπηρετούμε συχνά επισκέπτες από Τιγκάκι, Μαρμάρι και Κω πόλη. Τηλεφωνήστε μας ένα με δύο εικοσιτετράωρα νωρίτερα."],
        ["Είναι ασφαλές στην εγκυμοσύνη;", "Υπάρχουν ασφαλείς τεχνικές μετά το πρώτο τρίμηνο, αλλά προσαρμόζουμε θέση και ένταση. Ενημερώστε μας πριν κλείσετε το ραντεβού."],
      ],
      en: [
        ["Massage or reflexology?", "Massage if the issue is muscular tension and pain. Reflexology if it is sleep, digestion or general exhaustion. We often combine them."],
        ["Can I come while on holiday?", "Yes. In summer we frequently see visitors from Tigaki, Marmari and Kos Town. Call us a day or two ahead."],
        ["Is it safe during pregnancy?", "There are safe techniques after the first trimester, but we adapt position and pressure. Let us know before booking."],
      ],
    },
  },

  // ------------------------------------------------------------ ΑΠΟΤΡΙΧΩΣΗ
  {
    key: "laser",
    cat: "apotrichosi",
    icon: "laser",
    slug: { el: "apotrichosi-laser-diode", en: "laser-hair-removal" },
    nav: { el: "Αποτρίχωση Laser", en: "Laser Hair Removal" },
    h1: { el: "Αποτρίχωση με Laser Diode", en: "Diode Laser Hair Removal" },
    duration: { el: "15–60΄", en: "15–60 min" },
    featured: true,
    media: { video: "laser-apotrichosi", alt: { el: "Αποτρίχωση με laser diode στο BNL", en: "Diode laser hair removal at BNL" } },
    lead: {
      el: "Διοδικό laser με ψύξη — μεγαλύτερο εύρος φωτότυπων και σαφώς μεγαλύτερη άνεση.",
      en: "Diode laser with cooling — a wider range of skin types and far more comfort.",
    },
    title: {
      el: "Αποτρίχωση Laser Κως | Diode Laser — BNL Ζηπάρι",
      en: "Laser Hair Removal in Kos | Diode Laser — BNL Zipari",
    },
    desc: {
      el: "Αποτρίχωση με laser diode στο Ζηπάρι Κω. Για πρόσωπο και σώμα, σε ευρύ φάσμα φωτότυπων, με σύστημα ψύξης και προγραμματισμένους κύκλους συνεδριών.",
      en: "Diode laser hair removal in Zipari, Kos. Face and body, across a wide range of skin phototypes, with contact cooling and properly scheduled courses.",
    },
    keywords: {
      el: "αποτρίχωση laser Κως, diode laser Κως, αποτρίχωση Ζηπάρι, laser μπικίνι Κως",
      en: "laser hair removal Kos, diode laser Kos, hair removal Zipari, bikini laser Kos",
    },
    body: {
      el: [
        "Το laser δεν είναι μία συνεδρία, είναι κύκλος. Η τρίχα καταστρέφεται μόνιμα μόνο όταν βρίσκεται στη φάση ανάπτυξης — και σε κάθε δεδομένη στιγμή μόνο ένα ποσοστό των τριχών είναι εκεί. Γι' αυτό χρειάζονται επαναλήψεις σε συγκεκριμένα μεσοδιαστήματα, ώστε να πιαστεί η κάθε τρίχα στη σωστή στιγμή.",
        "Δουλεύουμε με διοδικό laser και σύστημα ψύξης. Σε σχέση με παλαιότερα συστήματα καλύπτει ευρύτερο φάσμα φωτότυπων και πιάνει και πιο λεπτή τρίχα, ενώ η ψύξη κάνει τη συνεδρία σαφώς πιο ανεκτή — οι περισσότερες πελάτισσες το περιγράφουν ως ζεστό τσίμπημα που περνά αμέσως.",
        "Πριν από την πρώτη συνεδρία γίνεται αξιολόγηση φωτότυπου και τύπου τριχοφυΐας και δοκιμαστική εφαρμογή. Στην Κω υπάρχει ένας επιπλέον παράγοντας που δεν πρέπει να αγνοηθεί: ο ήλιος. Δεν κάνουμε laser σε πρόσφατα μαυρισμένο δέρμα, και γι' αυτό ο σωστός προγραμματισμός του κύκλου μετράει ακόμη περισσότερο εδώ.",
      ],
      en: [
        "Laser is not one session, it is a course. Hair is destroyed permanently only while it is in the growth phase — and at any given moment only a proportion of hairs are there. That is why repetitions at set intervals are needed, so each hair is caught at the right moment.",
        "We work with a diode laser and contact cooling. Compared with older systems it covers a wider range of phototypes and catches finer hair, while the cooling makes the session considerably more tolerable — most clients describe it as a warm snap that passes immediately.",
        "Before the first session we assess phototype and hair type and do a test patch. In Kos there is an extra factor that should not be ignored: the sun. We do not treat recently tanned skin, which makes scheduling the course properly matter even more here.",
      ],
    },
    includes: {
      el: ["Αξιολόγηση φωτότυπου & τριχοφυΐας", "Δοκιμαστική εφαρμογή πριν τον κύκλο", "Συνεδρίες με σύστημα ψύξης", "Προγραμματισμός σωστών μεσοδιαστημάτων", "Οδηγίες προετοιμασίας & φροντίδας"],
      en: ["Phototype and hair-type assessment", "Test patch before the course", "Sessions with contact cooling", "Correct interval scheduling", "Preparation and aftercare instructions"],
    },
    faq: {
      el: [
        ["Πόσες συνεδρίες θα χρειαστώ;", "Συνήθως έξι έως οκτώ ανά περιοχή, με μεσοδιαστήματα τεσσάρων έως οκτώ εβδομάδων ανάλογα με την περιοχή. Ακολουθούν συνεδρίες συντήρησης."],
        ["Μπορώ να κάνω laser το καλοκαίρι;", "Ναι, εφόσον το δέρμα δεν είναι πρόσφατα μαυρισμένο και χρησιμοποιείτε αντηλιακό. Αποφεύγουμε την ημέρα μετά από έντονη έκθεση."],
        ["Πώς προετοιμάζομαι;", "Ξυρίστε την περιοχή ένα εικοσιτετράωρο πριν — όχι κερί ή αποτριχωτική. Χωρίς ξύρισμα η συνεδρία χρειάζεται επιπλέον χρόνο."],
      ],
      en: [
        ["How many sessions will I need?", "Usually six to eight per area, at four- to eight-week intervals depending on the area. Maintenance sessions follow."],
        ["Can I have laser in summer?", "Yes, provided the skin is not freshly tanned and you use sunscreen. We avoid the day after heavy exposure."],
        ["How do I prepare?", "Shave the area a day before — not wax or epilate. Without shaving, the session needs extra time."],
      ],
    },
  },
  {
    key: "riziki",
    cat: "apotrichosi",
    icon: "needle",
    slug: { el: "riziki-apotrichosi", en: "electrolysis" },
    nav: { el: "Ριζική Αποτρίχωση", en: "Electrolysis" },
    h1: { el: "Ριζική (Ηλεκτρική) Αποτρίχωση", en: "Permanent Hair Removal (Electrolysis)" },
    duration: { el: "15–45΄", en: "15–45 min" },
    media: { img: "poster-riziki-apotrichosi", alt: { el: "Ριζική αποτρίχωση — νέα υπηρεσία στο BNL", en: "Electrolysis — a new service at BNL" } },
    lead: {
      el: "Η μόνη μέθοδος που καταστρέφει την τρίχα στη ρίζα της, ανεξάρτητα από το χρώμα της.",
      en: "The only method that destroys hair at its root, whatever its colour.",
    },
    title: {
      el: "Ριζική Αποτρίχωση Κως | Ηλεκτρική Αποτρίχωση — BNL Ζηπάρι",
      en: "Electrolysis in Kos | Permanent Hair Removal — BNL Zipari",
    },
    desc: {
      el: "Ριζική ηλεκτρική αποτρίχωση στο Ζηπάρι Κω. Μόνιμο αποτέλεσμα σε λευκές, γκρι και πολύ λεπτές τρίχες που δεν πιάνει το laser, με πιστοποιημένο εξοπλισμό.",
      en: "Electrolysis in Zipari, Kos. Permanent results on white, grey and very fine hair that laser cannot treat, with certified equipment.",
    },
    keywords: {
      el: "ριζική αποτρίχωση Κως, ηλεκτρική αποτρίχωση Κως, λευκές τρίχες αποτρίχωση, μόνιμη αποτρίχωση Ζηπάρι",
      en: "electrolysis Kos, permanent hair removal Kos, white hair removal, electrolysis Zipari",
    },
    body: {
      el: [
        "Το laser χρειάζεται χρωστική για να δουλέψει: στοχεύει τη μελανίνη της τρίχας. Γι' αυτό σε λευκές, γκρι, ξανθές ή πολύ λεπτές τρίχες το αποτέλεσμα είναι φτωχό ή ανύπαρκτο, όσες συνεδρίες και να γίνουν. Είναι το πιο συχνό παράπονο που ακούμε από πελάτισσες που έχουν ήδη δοκιμάσει laser αλλού.",
        "Η ριζική αποτρίχωση λύνει ακριβώς αυτό, γιατί δεν εξαρτάται από το χρώμα. Λεπτή αποστειρωμένη βελόνα εισάγεται στον θύλακα και τον καταστρέφει στη ρίζα του. Η τρίχα που αντιμετωπίστηκε δεν ξαναβγαίνει — είναι η μόνη μέθοδος με πραγματικά μόνιμο αποτέλεσμα, αναγνωρισμένη ως τέτοια διεθνώς.",
        "Δουλεύουμε τρίχα προς τρίχα, οπότε οι συνεδρίες είναι σύντομες και επαναλαμβανόμενες. Είναι ιδανική για πρόσωπο — πηγούνι, άνω χείλος, φρύδια — και για ό,τι έχει απομείνει μετά από κύκλο laser. Χρησιμοποιούμε πιστοποιημένο εξοπλισμό και εξατομικευμένη ένταση, ώστε η διαδικασία να είναι όσο πιο ανώδυνη γίνεται.",
      ],
      en: [
        "Laser needs pigment to work: it targets melanin in the hair. That is why on white, grey, blonde or very fine hair the result is poor or non-existent, however many sessions are done. It is the most common complaint we hear from clients who have already tried laser elsewhere.",
        "Electrolysis solves exactly that, because it does not depend on colour. A fine sterile probe is inserted into the follicle and destroys it at the root. Hair that has been treated does not return — it is the only method with a genuinely permanent result, recognised as such internationally.",
        "We work hair by hair, so sessions are short and repeated. It is ideal for the face — chin, upper lip, brows — and for whatever is left after a laser course. We use certified equipment and individually set intensity, so the process is as painless as it can be.",
      ],
    },
    includes: {
      el: ["Αξιολόγηση τριχοφυΐας & περιοχής", "Αποστειρωμένη βελόνα μίας χρήσης", "Εξατομικευμένη ρύθμιση έντασης", "Καταπραϋντική φροντίδα μετά τη συνεδρία", "Πρόγραμμα επαναλήψεων"],
      en: ["Assessment of hair and area", "Sterile single-use probe", "Individually set intensity", "Soothing aftercare", "A repetition schedule"],
    },
    faq: {
      el: [
        ["Είναι πραγματικά μόνιμη;", "Ναι. Ο θύλακας που καταστρέφεται δεν παράγει ξανά τρίχα. Χρειάζονται όμως αρκετές συνεδρίες, γιατί δουλεύουμε τρίχα προς τρίχα και σε φάσεις ανάπτυξης."],
        ["Πονάει;", "Υπάρχει αίσθηση τσιμπήματος, που ρυθμίζεται με την ένταση. Στο πρόσωπο, όπου γίνεται πιο συχνά, οι περισσότερες το βρίσκουν απολύτως ανεκτό."],
        ["Σε τι διαφέρει από το laser;", "Το laser είναι γρήγορο σε μεγάλες επιφάνειες αλλά θέλει σκούρα τρίχα. Η ριζική είναι πιο αργή αλλά δουλεύει σε κάθε χρώμα και είναι οριστική. Συχνά συνδυάζονται."],
      ],
      en: [
        ["Is it really permanent?", "Yes. A destroyed follicle does not produce hair again. It does take several sessions, because we work hair by hair and across growth phases."],
        ["Does it hurt?", "There is a pinching sensation, controlled by the intensity setting. On the face, where it is most often used, most clients find it perfectly tolerable."],
        ["How is it different from laser?", "Laser is fast over large areas but needs dark hair. Electrolysis is slower but works on any colour and is definitive. They are often combined."],
      ],
    },
  },
  {
    key: "keri",
    cat: "apotrichosi",
    icon: "wax",
    slug: { el: "apotrichosi-me-keri", en: "waxing" },
    nav: { el: "Αποτρίχωση με Κερί", en: "Waxing" },
    h1: { el: "Αποτρίχωση με Κερί", en: "Waxing" },
    duration: { el: "15–45΄", en: "15–45 min" },
    media: { img: "space-entrance", alt: { el: "Ο χώρος του BNL στο Ζηπάρι", en: "The BNL space in Zipari" } },
    lead: {
      el: "Γρήγορη, καθαρή και προσιτή — η λύση όταν δεν είστε σε κύκλο laser.",
      en: "Quick, clean and affordable — the answer when you are not on a laser course.",
    },
    title: {
      el: "Αποτρίχωση με Κερί Κως | BNL Ζηπάρι",
      en: "Waxing in Kos | BNL Zipari",
    },
    desc: {
      el: "Αποτρίχωση με κερί στο Ζηπάρι Κω, για πρόσωπο και σώμα. Υποαλλεργικά κεριά, γρήγορη τεχνική και σωστή φροντίδα μετά, ώστε να αποφεύγεται η εγκλωβισμένη τρίχα.",
      en: "Waxing in Zipari, Kos, for face and body. Hypoallergenic waxes, a fast technique and proper aftercare to avoid ingrown hairs.",
    },
    keywords: {
      el: "αποτρίχωση κερί Κως, αποτρίχωση Ζηπάρι, κερί μπικίνι Κως",
      en: "waxing Kos, hair removal Zipari, bikini wax Kos",
    },
    body: {
      el: [
        "Το κερί παραμένει η πιο πρακτική λύση όταν δεν βρίσκεστε σε κύκλο laser: καθαρίζει ολόκληρη την περιοχή σε μία επίσκεψη, το αποτέλεσμα κρατά τρεις έως τέσσερις εβδομάδες και η τρίχα επανέρχεται πιο λεπτή απ' ό,τι μετά από ξύρισμα.",
        "Χρησιμοποιούμε υποαλλεργικά κεριά, με χαμηλή θερμοκρασία εφαρμογής για τις ευαίσθητες περιοχές. Η τεχνική μετράει περισσότερο από το ίδιο το κερί: σωστή κατεύθυνση, σταθερό τέντωμα του δέρματος και γρήγορη κίνηση μειώνουν και τον πόνο και το ερύθημα.",
        "Η φροντίδα μετά είναι εξίσου σημαντική, ιδίως στο νησί. Χωρίς θάλασσα, πισίνα, σάουνα και έντονο ήλιο για είκοσι τέσσερις ώρες, και με τακτική ήπια απολέπιση από την τρίτη μέρα, ώστε να μην εγκλωβιστούν οι τρίχες. Σας δίνουμε γραπτές οδηγίες στην πρώτη επίσκεψη.",
      ],
      en: [
        "Waxing remains the most practical answer when you are not on a laser course: it clears the whole area in one visit, the result lasts three to four weeks, and hair grows back finer than after shaving.",
        "We use hypoallergenic waxes, applied at low temperature for sensitive areas. Technique matters more than the wax itself: the right direction, steady skin tension and a fast movement reduce both pain and redness.",
        "Aftercare matters just as much, especially on an island. No sea, pool, sauna or strong sun for twenty-four hours, and regular gentle exfoliation from the third day so hairs do not become ingrown. We give you written instructions at the first visit.",
      ],
    },
    includes: {
      el: ["Υποαλλεργικό κερί χαμηλής θερμοκρασίας", "Πρόσωπο & σώμα, όλες οι περιοχές", "Προετοιμασία και καταπραϋντική φροντίδα", "Γραπτές οδηγίες κατά της εγκλωβισμένης τρίχας", "Δυνατότητα συνδυασμού με άλλη θεραπεία"],
      en: ["Low-temperature hypoallergenic wax", "Face and body, all areas", "Preparation and soothing aftercare", "Written guidance against ingrown hairs", "Can be combined with another treatment"],
    },
    faq: {
      el: [
        ["Πόσο μεγάλη πρέπει να είναι η τρίχα;", "Περίπου πέντε χιλιοστά, δηλαδή δύο με τρεις εβδομάδες ανάπτυξης. Πολύ κοντή τρίχα δεν πιάνεται και το αποτέλεσμα είναι ανομοιόμορφο."],
        ["Μπορώ να κάνω κερί αν κάνω laser;", "Όχι στη διάρκεια του κύκλου. Το κερί αφαιρεί τη ρίζα, που είναι ακριβώς ο στόχος του laser. Στο ενδιάμεσο ξυριζόμαστε."],
        ["Μπορώ να κολυμπήσω μετά;", "Όχι την ίδια μέρα. Οι πόροι είναι ανοιχτοί και το αλάτι ή το χλώριο προκαλούν ερεθισμό. Περιμένετε ένα εικοσιτετράωρο."],
      ],
      en: [
        ["How long does the hair need to be?", "About five millimetres, so two to three weeks of growth. Hair that is too short is not gripped and the result is patchy."],
        ["Can I wax while having laser?", "Not during the course. Waxing removes the root, which is exactly what the laser is targeting. Shave in between instead."],
        ["Can I swim afterwards?", "Not the same day. The pores are open and salt or chlorine will irritate them. Wait twenty-four hours."],
      ],
    },
  },
];
