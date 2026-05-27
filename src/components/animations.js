/* ============================================================
   Animations — scroll reveal, counter, smooth scroll
   ============================================================ */

export function initScrollReveal() {
  const els = document.querySelectorAll('.reveal');
  if (!els.length) return;

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;

        // Stagger cards that share the same grid parent
        const parent = entry.target.parentElement;
        const siblings = [...parent.querySelectorAll('.reveal:not(.visible)')];
        const idx = siblings.indexOf(entry.target);

        if (idx > 0) {
          entry.target.style.transitionDelay = `${idx * 90}ms`;
        }

        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.07, rootMargin: '0px 0px -32px 0px' }
  );

  els.forEach(el => observer.observe(el));
}

export function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
      const href = anchor.getAttribute('href');
      if (href === '#') return;
      const target = document.querySelector(href);
      if (!target) return;
      e.preventDefault();
      const navH = 68;
      const top = target.getBoundingClientRect().top + window.scrollY - navH;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });
}

/* Animate stat numbers from 0 to their value */
export function initCounters() {
  const cards = document.querySelectorAll('.stat-card');
  if (!cards.length) return;

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const numEl = entry.target.querySelector('.stat-num');
      if (!numEl || numEl.dataset.counted) return;

      const text = numEl.textContent.trim();
      const num = parseInt(text.replace(/\D/g, ''));
      if (isNaN(num) || num <= 0 || num > 9999) return;

      numEl.dataset.counted = '1';
      const suffix = text.replace(/[\d]/g, '');
      const start = num > 100 ? num - Math.round(num * 0.12) : 0;
      const duration = 900;
      const startTime = performance.now();

      const tick = (now) => {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        // Ease-out cubic
        const eased = 1 - Math.pow(1 - progress, 3);
        const current = Math.round(start + (num - start) * eased);
        numEl.textContent = current + suffix;
        if (progress < 1) requestAnimationFrame(tick);
        else numEl.textContent = text; // restore exact original (e.g. "3+")
      };

      requestAnimationFrame(tick);
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.5 });

  cards.forEach(c => observer.observe(c));
}

/* Parallax on hero orb — subtle only */
export function initHeroParallax() {
  const orb = document.querySelector('.hero-orb');
  if (!orb) return;

  const onScroll = () => {
    const y = window.scrollY;
    if (y > window.innerHeight) return;
    orb.style.transform = `translate(0, ${y * 0.25}px) scale(1)`;
  };

  window.addEventListener('scroll', onScroll, { passive: true });
}
