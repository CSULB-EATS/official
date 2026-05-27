import './styles/variables.css';
import './styles/base.css';
import './styles/sections.css';
import './styles/responsive.css';

import { initNav }          from './components/nav.js';
import { initBoard }        from './components/board.js';
import { initGallery }      from './components/gallery.js';
import { initInstagram }    from './components/instagram.js';
import { initGitHub }       from './components/github.js';
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
  // Async — don't block other init
  initGitHub();
  initInstagram();
});
