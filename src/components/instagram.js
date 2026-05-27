/* ============================================================
   Instagram feed — curated static embeds
   Instagram blocks all unauthenticated API access, so we show
   the three most recent posts as official Instagram iframes.
   ============================================================ */

const IG_PROFILE = 'https://www.instagram.com/embedded_lb/';

const CURATED_POSTS = [
  { shortcode: 'DUq8UUIEoTZ', caption: 'Sumo Robots competition' },
  { shortcode: 'DUZgtSnkV3s', caption: 'Micromouse competition' },
  { shortcode: 'DUZsaelEZLH', caption: 'Soldering Workshop' },
];

export function initInstagram() {
  const grid = document.getElementById('instaGrid');
  if (!grid) return;

  grid.innerHTML = '';
  grid.className = 'insta-embed-grid';

  CURATED_POSTS.forEach(post => {
    const wrap = document.createElement('div');
    wrap.className = 'insta-embed-wrap';
    wrap.innerHTML = `
      <iframe
        src="https://www.instagram.com/p/${post.shortcode}/embed/"
        frameborder="0"
        scrolling="no"
        loading="lazy"
        title="${post.caption}"
        allowfullscreen>
      </iframe>
      <a href="https://www.instagram.com/p/${post.shortcode}/" target="_blank" rel="noopener" class="insta-embed-link" aria-label="View on Instagram"></a>
    `;
    grid.appendChild(wrap);
  });
}
