/* ============================================================
   BNL — συμπεριφορά. Χειρόγραφο, χωρίς εξαρτήσεις.
   Κάθε ενότητα είναι ανεξάρτητη: αν λείπει το markup της από μια
   σελίδα, απλώς δεν τρέχει.
   ============================================================ */
(function () {
  "use strict";

  var $  = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  var reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var fine = window.matchMedia("(pointer: fine)").matches;

  /* ---------------------------------------------------- έτος */
  $$("[data-year]").forEach(function (el) { el.textContent = new Date().getFullYear(); });

  /* ---------------------------------------------------- header & πρόοδος */
  var header = $("[data-header]");
  var progress = $("[data-progress]");
  var callBar = $(".call-bar");
  var lastY = 0;

  function onScroll() {
    var y = window.scrollY || document.documentElement.scrollTop;
    if (header) header.classList.toggle("is-scrolled", y > 24);
    if (progress) {
      var h = document.documentElement.scrollHeight - window.innerHeight;
      progress.style.transform = "scaleX(" + (h > 0 ? Math.min(y / h, 1) : 0) + ")";
    }
    // Η μπάρα κλήσης εμφανίζεται αφού φύγει το hero και κρύβεται όταν
    // ο χρήστης ανεβαίνει — για να μη σκεπάζει περιεχόμενο.
    if (callBar) callBar.classList.toggle("is-up", y > 520 && y > lastY - 40);
    lastY = y;
  }
  var ticking = false;
  window.addEventListener("scroll", function () {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(function () { onScroll(); ticking = false; });
  }, { passive: true });
  onScroll();

  /* ---------------------------------------------------- μενού κινητού */
  var nav = $("[data-nav]");
  var toggle = $("[data-nav-toggle]");
  if (nav && toggle) {
    var scrim = document.createElement("div");
    scrim.className = "nav-scrim";
    nav.appendChild(scrim);

    function setNav(open) {
      nav.classList.toggle("is-open", open);
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      document.body.style.overflow = open && window.innerWidth <= 960 ? "hidden" : "";
      if (open) {
        var first = nav.querySelector("a");
        if (first) first.focus({ preventScroll: true });
      }
    }
    toggle.addEventListener("click", function () {
      setNav(toggle.getAttribute("aria-expanded") !== "true");
    });
    scrim.addEventListener("click", function () { setNav(false); toggle.focus(); });
    nav.addEventListener("click", function (e) {
      if (e.target.closest("a") && window.innerWidth <= 960) setNav(false);
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && nav.classList.contains("is-open")) { setNav(false); toggle.focus(); }
    });
    window.addEventListener("resize", function () {
      if (window.innerWidth > 960 && nav.classList.contains("is-open")) setNav(false);
    });
  }

  /* ---------------------------------------------------- reveal on scroll */
  var showAll = location.hash === "#showall" || document.body.classList.contains("showall");
  if (showAll) document.body.classList.add("showall");

  if (!showAll && "IntersectionObserver" in window && !reduced) {
    var revealIO = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        // Μικρό stagger ανά ομάδα, ώστε τα grids να μη «σκάνε» μαζεμένα.
        var sibs = Array.prototype.slice.call(en.target.parentNode.children).filter(function (n) {
          return n.classList && n.classList.contains("reveal");
        });
        var i = Math.min(sibs.indexOf(en.target), 6);
        en.target.style.transitionDelay = (i > 0 ? i * 70 : 0) + "ms";
        en.target.classList.add("is-in");
        revealIO.unobserve(en.target);
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });
    $$(".reveal").forEach(function (el) { revealIO.observe(el); });
  } else {
    $$(".reveal").forEach(function (el) { el.classList.add("is-in"); });
  }

  /* ---------------------------------------------------- μετρητές */
  var counters = $$("[data-count]");
  if (counters.length && "IntersectionObserver" in window) {
    var countIO = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        var el = en.target;
        countIO.unobserve(el);
        var target = parseInt(el.getAttribute("data-count"), 10) || 0;
        var suffix = el.getAttribute("data-suffix") || "";
        if (reduced) { el.textContent = target + suffix; return; }
        var start = performance.now(), dur = 1300;
        (function step(now) {
          var p = Math.min((now - start) / dur, 1);
          var eased = 1 - Math.pow(1 - p, 3);
          el.textContent = Math.round(target * eased) + suffix;
          if (p < 1) requestAnimationFrame(step);
        })(start);
      });
    }, { threshold: 0.5 });
    counters.forEach(function (el) { countIO.observe(el); });
  }

  /* ---------------------------------------------------- φίλτρα υπηρεσιών */
  $$("[data-tabs]").forEach(function (tabs) {
    var grid = tabs.parentNode.querySelector("[data-svc-grid]");
    if (!grid) return;
    tabs.addEventListener("click", function (e) {
      var btn = e.target.closest(".tab");
      if (!btn) return;
      var f = btn.getAttribute("data-filter");
      $$(".tab", tabs).forEach(function (b) { b.classList.toggle("is-on", b === btn); });
      $$(".svc-card", grid).forEach(function (card) {
        var show = f === "all" || card.getAttribute("data-cat") === f;
        card.classList.toggle("is-hidden", !show);
        if (show && !reduced) {
          card.style.animation = "none";
          void card.offsetWidth;
          card.style.animation = "fadeUp .45s var(--ease-out) both";
        }
      });
    });
  });

  /* ---------------------------------------------------- φως στις κάρτες */
  if (fine && !reduced) {
    $$(".svc-card").forEach(function (card) {
      card.addEventListener("pointermove", function (e) {
        var r = card.getBoundingClientRect();
        card.style.setProperty("--mx", (e.clientX - r.left) + "px");
        card.style.setProperty("--my", (e.clientY - r.top) + "px");
      });
    });
  }

  /* ---------------------------------------------------- προεπισκόπηση reels */
  // Το βαρύ αρχείο δεν φορτώνεται ποτέ αυτόματα: μπαίνει μόνο το μικρό,
  // σιωπηλό loop, και μόνο όταν η κάρτα είναι στην οθόνη.
  var saveData = navigator.connection && navigator.connection.saveData;
  var videos = $$(".reel-video");
  if (videos.length && "IntersectionObserver" in window && !reduced && !saveData) {
    var vidIO = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        var v = en.target;
        if (en.isIntersecting) {
          if (!v.src) {
            var s = v.getAttribute("data-loop-src");
            if (s) { v.src = s; v.load(); }
          }
          var p = v.play();
          if (p && p.catch) p.catch(function () {});
        } else if (!v.paused) {
          v.pause();
        }
      });
    }, { threshold: 0.35 });
    videos.forEach(function (v) { vidIO.observe(v); });
  }

  /* ---------------------------------------------------- lightbox */
  var lb = $("[data-lightbox]");
  if (lb) {
    var slot = $("[data-lb-slot]", lb);
    var cap = $("[data-lb-cap]", lb);
    var btnClose = $("[data-lb-close]", lb);
    var btnPrev = $("[data-lb-prev]", lb);
    var btnNext = $("[data-lb-next]", lb);
    var group = [];
    var at = 0;
    var opener = null;

    function render() {
      var item = group[at];
      slot.innerHTML = "";
      if (item.type === "video") {
        var v = document.createElement("video");
        v.src = item.src;
        v.controls = true;
        v.autoplay = true;
        v.playsInline = true;
        v.setAttribute("playsinline", "");
        slot.appendChild(v);
      } else {
        var img = document.createElement("img");
        img.src = item.src;
        img.alt = item.cap || "";
        slot.appendChild(img);
      }
      cap.textContent = item.cap || "";
      var many = group.length > 1;
      btnPrev.hidden = !many;
      btnNext.hidden = !many;
    }

    function open(items, index, from) {
      group = items; at = index; opener = from || null;
      lb.hidden = false;
      document.body.classList.add("lb-open");
      requestAnimationFrame(function () { lb.classList.add("is-open"); });
      render();
      btnClose.focus({ preventScroll: true });
    }
    function close() {
      lb.classList.remove("is-open");
      document.body.classList.remove("lb-open");
      setTimeout(function () { lb.hidden = true; slot.innerHTML = ""; }, 320);
      if (opener) opener.focus({ preventScroll: true });
    }
    function step(d) { at = (at + d + group.length) % group.length; render(); }

    btnClose.addEventListener("click", close);
    btnPrev.addEventListener("click", function () { step(-1); });
    btnNext.addEventListener("click", function () { step(1); });
    lb.addEventListener("click", function (e) {
      if (e.target === lb || e.target.closest(".lb-stage") === null) return;
      if (e.target.tagName === "FIGURE") close();
    });
    lb.addEventListener("pointerdown", function (e) { if (e.target === lb) close(); });
    document.addEventListener("keydown", function (e) {
      if (lb.hidden) return;
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft" && group.length > 1) step(-1);
      if (e.key === "ArrowRight" && group.length > 1) step(1);
    });

    // εικόνες (χώρος & αφίσες)
    var gals = $$("[data-gal]");
    if (gals.length) {
      var galItems = gals.map(function (b) {
        return { type: "img", src: b.getAttribute("data-full"), cap: b.getAttribute("data-cap") };
      });
      gals.forEach(function (b, i) {
        b.addEventListener("click", function () { open(galItems, i, b); });
      });
    }

    // βίντεο (reels) — με ήχο, πλήρες αρχείο
    var reels = $$("[data-reel]");
    if (reels.length) {
      var reelItems = reels.map(function (r) {
        return { type: "video", src: r.getAttribute("data-src"), cap: r.getAttribute("data-cap") };
      });
      reels.forEach(function (r, i) {
        var trigger = r.querySelector("[data-reel-open]") || r;
        trigger.addEventListener("click", function (e) {
          e.preventDefault();
          open(reelItems, i, trigger);
        });
      });
    }
  }

  /* ---------------------------------------------------- quiz */
  $$("[data-quiz]").forEach(function (form) {
    var steps = $$(".quiz-step", form);
    var bar = $("[data-quiz-bar]", form);
    var result = $("[data-quiz-result]", form);
    var cards = $("[data-quiz-cards]", form);
    var pool = $(".quiz-pool", form);
    var reset = $("[data-quiz-reset]", form);
    if (!steps.length || !result || !cards || !pool) return;

    var score = {};
    var at = 0;

    function progressTo(n) { if (bar) bar.style.width = (n / steps.length) * 100 + "%"; }

    function show(i) {
      steps.forEach(function (s, k) { s.classList.toggle("is-on", k === i); });
      progressTo(i);
    }

    function finish() {
      steps.forEach(function (s) { s.classList.remove("is-on"); });
      progressTo(steps.length);
      var keys = Object.keys(score).sort(function (a, b) { return score[b] - score[a]; }).slice(0, 3);
      cards.innerHTML = "";
      keys.forEach(function (k) {
        var src = pool.querySelector('.quiz-card[data-key="' + k + '"]');
        if (!src) return;
        var copy = src.cloneNode(true);
        copy.hidden = false;
        cards.appendChild(copy);
      });
      result.hidden = false;
      result.scrollIntoView({ behavior: reduced ? "auto" : "smooth", block: "nearest" });
    }

    form.addEventListener("click", function (e) {
      var opt = e.target.closest(".quiz-opt");
      if (!opt) return;
      var step = opt.closest(".quiz-step");
      $$(".quiz-opt", step).forEach(function (b) { b.classList.toggle("is-picked", b === opt); });
      (opt.getAttribute("data-keys") || "").split(",").forEach(function (k, idx) {
        if (!k) return;
        // Η πρώτη επιλογή κάθε απάντησης βαραίνει λίγο περισσότερο.
        score[k] = (score[k] || 0) + (idx === 0 ? 2 : 1);
      });
      at = parseInt(opt.getAttribute("data-q"), 10) + 1;
      setTimeout(function () { at < steps.length ? show(at) : finish(); }, 220);
    });

    if (reset) {
      reset.addEventListener("click", function () {
        score = {}; at = 0;
        $$(".quiz-opt", form).forEach(function (b) { b.classList.remove("is-picked"); });
        result.hidden = true;
        show(0);
        form.scrollIntoView({ behavior: reduced ? "auto" : "smooth", block: "nearest" });
      });
    }
    progressTo(0);
  });

  /* ---------------------------------------------------- anchors με offset */
  document.addEventListener("click", function (e) {
    var a = e.target.closest('a[href^="#"]');
    if (!a) return;
    var id = a.getAttribute("href");
    if (id === "#" || id === "#showall") return;
    var target = document.querySelector(id);
    if (!target) return;
    e.preventDefault();
    var top = target.getBoundingClientRect().top + window.scrollY - (header ? header.offsetHeight + 12 : 0);
    window.scrollTo({ top: top, behavior: reduced ? "auto" : "smooth" });
    history.replaceState(null, "", id);
  });
})();
