/* ============================================================
   Minister — marketing page interactions
   Kept intentionally light: the page is static by design.
   ============================================================ */
(function () {
  "use strict";

  // Smooth-scroll for in-page anchor links (CSS scroll-behavior is the
  // primary mechanism; this adds a graceful fallback + focus handling).
  document.querySelectorAll('a[href^="#"]').forEach(function (link) {
    link.addEventListener("click", function (e) {
      var id = link.getAttribute("href");
      if (id === "#" || id.length < 2) return;
      var target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      // Move focus for accessibility without an extra visible outline jump.
      target.setAttribute("tabindex", "-1");
      target.focus({ preventScroll: true });
    });
  });

  // Subtle nav elevation once the user scrolls past the hero fold.
  var nav = document.querySelector("nav");
  if (nav) {
    var onScroll = function () {
      var scrolled = window.scrollY > 12;
      nav.style.boxShadow = scrolled
        ? "0 10px 30px rgba(0,0,0,0.35)"
        : "none";
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }
})();
