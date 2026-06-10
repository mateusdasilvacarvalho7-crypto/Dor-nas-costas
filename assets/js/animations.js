// assets/js/animations.js
// Scroll reveal e efeitos de entrada. Não contém copy nem lógica de UI.

(function () {

  // ── SCROLL REVEAL ─────────────────────────────────────────────────────────
  var revealObs = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll('.reveal').forEach(function (el) {
    revealObs.observe(el);
  });

  // ── STATS COUNT-UP ────────────────────────────────────────────────────────
  var statsObs = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.querySelectorAll('.stat-valor').forEach(function (el) {
          el.classList.add('counted');
        });
        statsObs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  var statsBar = document.querySelector('.stats-bar');
  if (statsBar) statsObs.observe(statsBar);

  // ── PAIN ITEMS STAGGER ────────────────────────────────────────────────────
  var painObs = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.querySelectorAll('.pain-item').forEach(function (el, i) {
          setTimeout(function () { el.classList.add('visible'); }, i * 80);
        });
        painObs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  var painGrid = document.getElementById('pain-grid');
  if (painGrid) painObs.observe(painGrid);

  // ── CARD STAGGER ─────────────────────────────────────────────────────────
  var gridObs = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.querySelectorAll('.card').forEach(function (el, i) {
          setTimeout(function () { el.classList.add('visible'); }, i * 90);
        });
        gridObs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });

  document.querySelectorAll('.grid-cards, .steps').forEach(function (el) {
    gridObs.observe(el);
  });

})();
