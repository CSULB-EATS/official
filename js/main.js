/**
 * EATS Website — Main JavaScript
 * Handles: custom cursor, nav scroll, scroll reveal
 */

document.addEventListener('DOMContentLoaded', () => {

  const cursor     = document.getElementById('cursor');
  const cursorRing = document.getElementById('cursorRing');

  let mx = 0, my = 0;  // mouse position
  let rx = 0, ry = 0;  // ring position (lagged)

  document.addEventListener('mousemove', e => {
    mx = e.clientX;
    my = e.clientY;
  });

  function animateCursor() {
    // Dot follows mouse exactly
    cursor.style.left = mx + 'px';
    cursor.style.top  = my + 'px';

    // Ring lags behind for smooth trail feel
    rx += (mx - rx) * 0.12;
    ry += (my - ry) * 0.12;
    cursorRing.style.left = rx + 'px';
    cursorRing.style.top  = ry + 'px';

    requestAnimationFrame(animateCursor);
  }

  animateCursor();

  // Expand ring on interactive elements
  document.querySelectorAll('a, button').forEach(el => {
    el.addEventListener('mouseenter', () => {
      cursor.style.width            = '6px';
      cursor.style.height           = '6px';
      cursorRing.style.width        = '52px';
      cursorRing.style.height       = '52px';
      cursorRing.style.borderColor  = 'rgba(255,149,0,0.8)';
    });
    el.addEventListener('mouseleave', () => {
      cursor.style.width            = '10px';
      cursor.style.height           = '10px';
      cursorRing.style.width        = '36px';
      cursorRing.style.height       = '36px';
      cursorRing.style.borderColor  = 'rgba(255,149,0,0.5)';
    });
  });

  const navbar = document.getElementById('navbar');

  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 60);
  });

  const revealEls = document.querySelectorAll('.reveal');

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target); // only animate once
        }
      });
    },
    { threshold: 0.1 }
  );

  revealEls.forEach(el => observer.observe(el));

});
