import './styles/variables.css';
import './styles/base.css';
import './styles/sections.css';
import './styles/responsive.css';

import { initNav }          from './components/nav.js';
import { initBoard }        from './components/board.js';
import { initGallery }      from './components/gallery.js';
import { initInstagram }    from './components/instagram.js';
import {
  initScrollReveal,
  initSmoothScroll,
  initCounters,
  initHeroParallax,
} from './components/animations.js';

document.addEventListener('DOMContentLoaded', () => {
  initNav();
  initBoard();
  initGallery();
  initScrollReveal();
  initSmoothScroll();
  initCounters();
  initHeroParallax();
  // Instagram is async — don't block other init
  initInstagram();
});
