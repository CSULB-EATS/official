export function initNav() {
  const navbar   = document.getElementById('navbar');
  const hamburger = document.getElementById('navHamburger');
  const drawer    = document.getElementById('navDrawer');
  const drawerLinks = drawer?.querySelectorAll('a');

  // Scroll: add shadow + border when past 60px
  const onScroll = () => {
    navbar.classList.toggle('scrolled', window.scrollY > 60);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Mobile hamburger toggle
  let drawerOpen = false;

  const openDrawer = () => {
    drawerOpen = true;
    hamburger.classList.add('open');
    hamburger.setAttribute('aria-expanded', 'true');
    drawer.classList.add('open');
    drawer.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  };

  const closeDrawer = () => {
    drawerOpen = false;
    hamburger.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
    drawer.classList.remove('open');
    drawer.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  };

  hamburger?.addEventListener('click', () => {
    drawerOpen ? closeDrawer() : openDrawer();
  });

  // Close when a drawer link is clicked
  drawerLinks?.forEach(link => {
    link.addEventListener('click', closeDrawer);
  });

  // Close on outside click
  document.addEventListener('click', e => {
    if (drawerOpen && !navbar.contains(e.target)) {
      closeDrawer();
    }
  });

  // Close on Escape
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && drawerOpen) closeDrawer();
  });
}
