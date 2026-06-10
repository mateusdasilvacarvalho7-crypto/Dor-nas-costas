// assets/js/ui.js
// Popula DOM com dados do CONFIG e gerencia interações.

(function () {

  // ── IMAGENS ──────────────────────────────────────────────────────────────
  document.getElementById('logo-img').src   = CONFIG.images.logo;
  document.getElementById('banner-img').src = CONFIG.images.banner;

  // ── TOP BANNER ────────────────────────────────────────────────────────────
  document.getElementById('top-banner').innerHTML =
    `<span class="banner-badge">${CONFIG.topBanner.badge}</span>
     <span>${CONFIG.topBanner.text}</span>`;

  // ── HERO ──────────────────────────────────────────────────────────────────
  document.getElementById('hero-eyebrow').textContent = CONFIG.hero.eyebrow;
  document.getElementById('hero-headline').textContent = CONFIG.hero.headline;

  document.getElementById('sem-chips').innerHTML = CONFIG.hero.sems
    .map(s => `<span class="sem-chip">${s}</span>`)
    .join('');

  document.getElementById('hero-sub').textContent = CONFIG.hero.sub;
  document.getElementById('hero-proof').textContent = CONFIG.hero.proofText;
  document.getElementById('hero-cta').textContent = CONFIG.hero.cta;

  document.getElementById('trust-grid').innerHTML = CONFIG.hero.trust
    .map(t => `<div class="trust-item"><span>${t.label}</span></div>`)
    .join('');

  // ── STATS BAR ─────────────────────────────────────────────────────────────
  document.getElementById('stats-bar').innerHTML = CONFIG.stats
    .map(s => `<div class="stat-item"><span class="stat-valor">${s.valor}</span><span class="stat-label">${s.label}</span></div>`)
    .join('');

  // ── PROBLEM ───────────────────────────────────────────────────────────────
  document.getElementById('problem-eyebrow').textContent  = CONFIG.problem.eyebrow;
  document.getElementById('problem-headline').textContent = CONFIG.problem.headline;
  document.getElementById('pain-grid').innerHTML = CONFIG.problem.pains
    .map(p => `<div class="pain-item"><p>${p.text}</p></div>`)
    .join('');

  // ── SOLUTION ──────────────────────────────────────────────────────────────
  document.getElementById('solution-eyebrow').textContent  = CONFIG.solution.eyebrow;
  document.getElementById('solution-headline').textContent = CONFIG.solution.headline;
  document.getElementById('steps').innerHTML = CONFIG.solution.steps
    .map(s => `<div class="step-item card">
      <div class="step-num">${s.num}</div>
      <div><h3>${s.title}</h3><p>${s.desc}</p></div>
    </div>`)
    .join('');

  // ── FEATURES ──────────────────────────────────────────────────────────────
  document.getElementById('features-eyebrow').textContent  = CONFIG.features.eyebrow;
  document.getElementById('features-headline').textContent = CONFIG.features.headline;
  document.getElementById('features-grid').innerHTML = CONFIG.features.items
    .map(f => `<div class="card feature-card">
      <h3>${f.title}</h3>
      <p>${f.desc}</p>
    </div>`)
    .join('');

  // ── TESTIMONIALS ──────────────────────────────────────────────────────────
  document.getElementById('testimonials-eyebrow').textContent  = CONFIG.testimonials.eyebrow;
  document.getElementById('testimonials-headline').textContent = CONFIG.testimonials.headline;
  document.getElementById('testimonials-grid').innerHTML = CONFIG.testimonials.items
    .map(t => `<div class="card testimonial-card">
      <div class="stars">★★★★★</div>
      ${t.context ? `<div class="testimonial-context">${t.context}</div>` : ''}
      <p>${t.text}</p>
      ${t.result ? `<div class="testimonial-result">✓ ${t.result}</div>` : ''}
      <div class="testimonial-author">
        <div class="author-avatar">${t.initial}</div>
        <div>
          <strong>${t.name}</strong>
          <span>${t.role}</span>
        </div>
      </div>
    </div>`)
    .join('');

  // ── OFFER ─────────────────────────────────────────────────────────────────
  document.getElementById('offer-eyebrow').textContent  = CONFIG.offer.eyebrow;
  document.getElementById('offer-headline').textContent = CONFIG.offer.headline;
  document.getElementById('offer-list').innerHTML = CONFIG.offer.items
    .map(i => `<li class="offer-item"><span class="check">✔</span><span>${i}</span></li>`)
    .join('');
  document.getElementById('price-from').textContent   = CONFIG.produto.precoAntes;
  document.getElementById('price-value').textContent  = CONFIG.produto.preco;
  document.getElementById('offer-cta').textContent    = CONFIG.offer.cta;
  document.getElementById('offer-cta').href           = CONFIG.produto.checkoutUrl;
  document.getElementById('offer-microcopy').textContent = CONFIG.offer.microcopy;

  // ── GUARANTEE ─────────────────────────────────────────────────────────────
  document.getElementById('guarantee-title').textContent = CONFIG.guarantee.title;
  document.getElementById('guarantee-text').textContent  = CONFIG.guarantee.text;

  // ── FINAL CTA ─────────────────────────────────────────────────────────────
  document.getElementById('final-cta-headline').textContent  = CONFIG.finalCta.headline;
  document.getElementById('final-cta-btn').textContent       = CONFIG.finalCta.cta;
  document.getElementById('final-cta-btn').href              = CONFIG.produto.checkoutUrl;
  document.getElementById('final-cta-microcopy').textContent = CONFIG.finalCta.microcopy;

  // ── FAQ ───────────────────────────────────────────────────────────────────
  document.getElementById('faq-eyebrow').textContent  = CONFIG.faq.eyebrow;
  document.getElementById('faq-headline').textContent = CONFIG.faq.headline;
  document.getElementById('faq-list').innerHTML = CONFIG.faq.items
    .map(f => `<details class="faq-item">
      <summary>${f.q}</summary>
      <div class="faq-body">${f.a}</div>
    </details>`)
    .join('');

  // ── AUTHORITY ─────────────────────────────────────────────────────────────
  document.getElementById('authority-eyebrow').textContent  = CONFIG.authority.eyebrow;
  document.getElementById('authority-headline').textContent = CONFIG.authority.headline;
  document.getElementById('authority-text').textContent     = CONFIG.authority.text;
  document.getElementById('authority-disclaimer').textContent = CONFIG.authority.disclaimer;

  // ── FOR WHOM ──────────────────────────────────────────────────────────────
  document.getElementById('forwhom-eyebrow').textContent  = CONFIG.forWhom.eyebrow;
  document.getElementById('forwhom-headline').textContent = CONFIG.forWhom.headline;
  document.getElementById('forwhom-yes').innerHTML =
    `<h3>${CONFIG.forWhom.yes.title}</h3>
     <ul class="forwhom-list">${CONFIG.forWhom.yes.items.map(i =>
       `<li class="forwhom-item forwhom-item--yes"><span class="forwhom-check">✓</span><span>${i}</span></li>`
     ).join('')}</ul>`;
  document.getElementById('forwhom-no').innerHTML =
    `<h3>${CONFIG.forWhom.no.title}</h3>
     <ul class="forwhom-list">${CONFIG.forWhom.no.items.map(i =>
       `<li class="forwhom-item forwhom-item--no"><span class="forwhom-check">✕</span><span>${i}</span></li>`
     ).join('')}</ul>`;

  // ── VALUE COMPARISON ──────────────────────────────────────────────────────
  document.getElementById('value-comparison').innerHTML =
    `<div class="valcomp-header">
       <span class="eyebrow">${CONFIG.valueComparison.eyebrow}</span>
       <h3>${CONFIG.valueComparison.headline}</h3>
     </div>
     <div class="valcomp-grid">
       ${CONFIG.valueComparison.items.map(i =>
         `<div class="valcomp-item${i.highlight ? ' valcomp-item--highlight' : ''}">
            <span class="valcomp-label">${i.label}</span>
            <span class="valcomp-value">${i.value}</span>
            <span class="valcomp-sub">${i.sub}</span>
          </div>`
       ).join('')}
     </div>`;

  // ── FOOTER ────────────────────────────────────────────────────────────────
  document.getElementById('footer-brand').innerHTML =
    `<strong>${CONFIG.footer.brand}</strong><p>${CONFIG.footer.copy()}</p>`;
  document.getElementById('footer-links').innerHTML = CONFIG.footer.links
    .map(l => `<a href="${l.href}">${l.label}</a>`)
    .join('<span>·</span>');

  // ── STICKY CTA ────────────────────────────────────────────────────────────
  document.getElementById('sticky-cta').textContent = CONFIG.hero.cta;
  var stickyCta = document.getElementById('cta-sticky');
  window.addEventListener('scroll', function () {
    var scrolled = (window.scrollY || document.documentElement.scrollTop) /
                   (document.documentElement.scrollHeight - window.innerHeight);
    stickyCta.classList.toggle('show', scrolled > 0.35);
  }, { passive: true });

  // ── SALES POPUP ───────────────────────────────────────────────────────────
  var popup    = document.getElementById('sales-popup');
  var buyers   = CONFIG.salesPopup.buyers;
  var times    = CONFIG.salesPopup.times;
  var popupIdx = 0;

  function showSalesPopup() {
    var buyer = buyers[popupIdx % buyers.length];
    var time  = times[Math.floor(Math.random() * times.length)];
    document.getElementById('sales-initial').textContent = buyer.initial;
    document.getElementById('sales-name').textContent    = buyer.name;
    document.getElementById('sales-plan').textContent    = buyer.plan;
    document.getElementById('sales-time').textContent    = time;
    popup.classList.remove('hidden');
    popupIdx++;
    setTimeout(function () { popup.classList.add('hidden'); }, 4500);
  }

  document.getElementById('sales-close').addEventListener('click', function () {
    popup.classList.add('hidden');
  });

  setTimeout(showSalesPopup, 6000);
  setInterval(showSalesPopup, 22000);

})();
