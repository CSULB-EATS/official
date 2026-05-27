/* ============================================================
   Instagram feed — multi-proxy, graceful fallback
   ============================================================ */

// Instagram blocks all unauthenticated API access from browsers.
// The fetch attempts below will always fail in production — the fallback
// card is the expected outcome. The fetch code is kept in case Instagram
// relaxes restrictions or a working proxy emerges.
const IG_USER   = 'embedded_lb';
const IG_URL    = `https://www.instagram.com/${IG_USER}/`;
const MAX_POSTS = 9;

const PROXIES = [
  u => `https://api.allorigins.win/get?url=${encodeURIComponent(u)}`,
  u => `https://corsproxy.io/?${encodeURIComponent(u)}`,
];

async function proxyFetch(rawUrl) {
  for (const make of PROXIES) {
    try {
      const res = await fetch(make(rawUrl), { signal: AbortSignal.timeout(7000) });
      if (!res.ok) continue;
      const text = await res.text();
      // allorigins wraps in { contents: '...' }, corsproxy returns raw HTML/JSON
      try {
        const json = JSON.parse(text);
        return json.contents ?? text;
      } catch {
        return text;
      }
    } catch { /* try next proxy */ }
  }
  return null;
}

async function fetchPosts() {
  // Attempt 1 — internal GraphQL endpoint used by IG web frontend
  const apiUrl = `https://i.instagram.com/api/v1/users/web_profile_info/?username=${IG_USER}`;
  const apiRaw = await proxyFetch(apiUrl);
  if (apiRaw) {
    try {
      const data = typeof apiRaw === 'string' ? JSON.parse(apiRaw) : apiRaw;
      const edges = data?.data?.user?.edge_owner_to_timeline_media?.edges;
      if (edges?.length) return edges.slice(0, MAX_POSTS).map(toPost);
    } catch { /* fall through */ }
  }

  // Attempt 2 — legacy JSON endpoint
  const legacyRaw = await proxyFetch(`${IG_URL}?__a=1&__d=dis`);
  if (legacyRaw) {
    try {
      const data = typeof legacyRaw === 'string' ? JSON.parse(legacyRaw) : legacyRaw;
      const edges = data?.graphql?.user?.edge_owner_to_timeline_media?.edges;
      if (edges?.length) return edges.slice(0, MAX_POSTS).map(toPost);
    } catch { /* fall through */ }
  }

  // Attempt 3 — scrape HTML profile page, try multiple JSON patterns
  const html = await proxyFetch(IG_URL);
  if (html) {
    // Try pattern 1: classic shared_data edge format
    const p1 = html.matchAll(/"shortcode":"([^"]+)"[^}]{0,300}"thumbnail_src":"([^"]+)"/g);
    const m1 = [...p1];
    if (m1.length) {
      return m1.slice(0, MAX_POSTS).map(m => ({
        url:     `https://www.instagram.com/p/${m[1]}/`,
        thumb:   m[2].replace(/\\u0026/g, '&'),
        caption: '',
        isVideo: false,
      }));
    }

    // Try pattern 2: newer format with display_url
    const p2 = html.matchAll(/"shortcode":"([^"]+)"[^}]{0,300}"display_url":"([^"]+)"/g);
    const m2 = [...p2];
    if (m2.length) {
      return m2.slice(0, MAX_POSTS).map(m => ({
        url:     `https://www.instagram.com/p/${m[1]}/`,
        thumb:   m[2].replace(/\\u0026/g, '&'),
        caption: '',
        isVideo: false,
      }));
    }
  }

  return null;
}

function toPost(e) {
  return {
    url:     `https://www.instagram.com/p/${e.node.shortcode}/`,
    thumb:   e.node.thumbnail_src || e.node.display_url,
    caption: e.node.edge_media_to_caption?.edges?.[0]?.node?.text ?? '',
    isVideo: e.node.__typename === 'GraphVideo',
  };
}

function renderPosts(grid, posts) {
  grid.innerHTML = '';
  posts.forEach((post, i) => {
    const a = document.createElement('a');
    a.className = 'insta-post';
    a.href = post.url;
    a.target = '_blank';
    a.rel = 'noopener';
    a.style.setProperty('--delay', `${i * 55}ms`);
    a.innerHTML = `
      <img src="${post.thumb}" alt="${post.caption.slice(0, 60)}" loading="lazy">
      ${post.isVideo ? '<div class="insta-video-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="white"><polygon points="5 3 19 12 5 21"/></svg></div>' : ''}
      <div class="insta-hover-overlay">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1.5" aria-hidden="true">
          <rect x="2" y="2" width="20" height="20" rx="5"/>
          <circle cx="12" cy="12" r="4"/>
          <circle cx="17.5" cy="6.5" r="0.5" fill="white"/>
        </svg>
      </div>
    `;
    grid.appendChild(a);
  });
}

function renderFallback(grid) {
  // Show a visually rich fallback — not just a button
  grid.innerHTML = `
    <div class="insta-fallback-card">
      <div class="insta-fb-icon">
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2" aria-hidden="true">
          <rect x="2" y="2" width="20" height="20" rx="5"/>
          <circle cx="12" cy="12" r="4"/>
          <circle cx="17.5" cy="6.5" r="0.7" fill="currentColor"/>
        </svg>
      </div>
      <div class="insta-fb-handle">@${IG_USER}</div>
      <p class="insta-fb-text">Follow us on Instagram for the latest builds, events, and club moments.</p>
      <a href="${IG_URL}" target="_blank" rel="noopener" class="btn-primary insta-fb-btn">View on Instagram</a>
    </div>
  `;
}

export async function initInstagram() {
  const grid = document.getElementById('instaGrid');
  if (!grid) return;

  grid.innerHTML = `<div class="insta-loading" aria-live="polite">
    <div class="insta-loading-dots"><span></span><span></span><span></span></div>
  </div>`;

  const posts = await fetchPosts();
  if (posts?.length) {
    renderPosts(grid, posts);
  } else {
    renderFallback(grid);
  }
}
