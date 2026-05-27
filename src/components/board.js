/* ============================================================
   Board members
   ============================================================ */

// LinkedIn CDN URLs expire — check the `e=` timestamp in each URL.
// Most expire around June 1–17, 2026. When photos break, right-click the
// member's LinkedIn profile photo → "Open image in new tab" and update the URL here.

// Shared between VP Ana and Micromouse Lead Ana Arante — same person.
const ANA_PHOTO = 'https://media.licdn.com/dms/image/v2/D5635AQG_as9fA61w8Q/profile-framedphoto-shrink_800_800/B56Z4WWcICKUAg-/0/1778491442127?e=1780473600&v=beta&t=6BKnenuOgfgdKxhdXdeS3FBtVlYQ5807X40gfeHv-tA';

const OFFICERS = [
  { id: 'jeevan',  name: 'Jeevan Singh',   title: 'President',          bio: 'Computer engineering student leading the club into meaningful learning experiences for every member.', photo: 'https://media.licdn.com/dms/image/v2/D5635AQGcFm7CSgxO5A/profile-framedphoto-shrink_800_800/B56ZqlHUbEKwAg-/0/1763706750968?e=1780473600&v=beta&t=a2JySQCy0FJuEs4tkhgWI4zr4I-Cf3cy1w1qRjqGGx4' },
  { id: 'ana',     name: 'Ana',            title: 'Vice President',      bio: 'Coordinates project teams, events, and industry outreach across EATS.', photo: ANA_PHOTO },
  { id: 'emily',   name: 'Emily Hsu',      title: 'Treasurer',           bio: 'Manages club finances, reimbursements, and budget planning.', photo: 'https://media.licdn.com/dms/image/v2/D5635AQErzuvz7rusyg/profile-framedphoto-shrink_800_800/B56Z0eLfkOJwAg-/0/1774327822888?e=1780473600&v=beta&t=CugZs7oxgcLn1ofEowM-mmh44fPWlAXYnmON7m3Qi9s' },
  { id: 'suphia',  name: 'Suphia Sidiqi',  title: 'AESB Representative', bio: 'Represents EATS at the Associated Engineering Student Body.', photo: 'https://media.licdn.com/dms/image/v2/D5635AQFi7zqId-6aEw/profile-framedphoto-shrink_800_800/B56Z0e8_8gIMAg-/0/1774340801249?e=1780473600&v=beta&t=rNzry0sYHrIsaR-YBjoZBIoLt4rvwWYH0UGt7wzc6qo' },
  { id: 'rikkhi',  name: 'Rikhi Joseph',   title: 'Secretary',           bio: 'Handles meeting minutes, communications, and internal organization.', photo: 'https://media.licdn.com/dms/image/v2/D5603AQF_-RAblf51zw/profile-displayphoto-crop_800_800/B56ZpT7M8.IcAI-/0/1762344620805?e=1781740800&v=beta&t=yKnNuKGoUKWB1cwEVpYzW_chpKnJIiiqrFYIgygkW0k' },
];

const TECH_LEADS = [
  { id: 'jeremy',  name: 'Jeremy Canchola',  title: 'Sumo Robots Lead', bio: 'Heads the Sumo Robots program — hardware design and power electronics.' },
  { id: 'ky',      name: 'Ky Tran',          title: 'Sumo Robots Lead', bio: 'Hardware design and power electronics lead for the Sumo Robots team.', photo: 'https://media.licdn.com/dms/image/v2/D5603AQHl_L134fIoWg/profile-displayphoto-crop_800_800/B56Zsukjq7KAAI-/0/1766012894853?e=1781740800&v=beta&t=636SguXhyB26O2evyoFruQj5Q74xtWc75t9RFLQPX5M' },
  { id: 'ana_a',   name: 'Ana Arante',       title: 'Micromouse Lead',  bio: 'Leads the Micromouse team — guiding members from a blank PCB to a finished robot that competes at AAMC.', photo: ANA_PHOTO },
  { id: 'bryan',   name: 'Bryan Fuentes',    title: 'Micromouse Lead',  bio: 'Graduating December 2025 and bringing deep embedded experience to the Micromouse program.', photo: 'https://media.licdn.com/dms/image/v2/D4D35AQGM6zwwnX8Glg/profile-framedphoto-shrink_800_800/B4DZbcc6W3HsAg-/0/1747455289113?e=1780473600&v=beta&t=iAVdHnrAvqBR_x_lfaUgsmZJzVHcIxPzMrFL-4C-Pcw' },
  { id: 'imran',   name: 'Muhammad Imran',   title: 'Hardware Lead',    bio: 'Teaches members Altium Designer and the fundamentals of power electronics from the ground up.', photo: 'https://media.licdn.com/dms/image/v2/D5603AQFtdIueZT5VZg/profile-displayphoto-crop_800_800/B56Zsg28jjHYAI-/0/1765782835240?e=1781740800&v=beta&t=5SkcrahUJLIbU5SgTTeVrffvT58pLrCh6pPTd4vGPkw' },
];

const ADVISORS = [
  { id: 'robert',  name: 'Robert Bagalawis', title: 'Hardware Advisor',                       bio: 'Former VP of EATS, now advising on PCB design, hardware debugging, and electronics fundamentals.', photo: 'https://media.licdn.com/dms/image/v2/D5635AQGbwZ-38oaolA/profile-framedphoto-shrink_800_800/profile-framedphoto-shrink_800_800/0/1726684721166?e=1780473600&v=beta&t=ilZY-P6DcGAvn7PYMm0wWVd8LDfQHl1odSdVX8kxM0g', zoom: 1.3 },
  { id: 'bex',     name: 'Bex Sawetrattanathumrong', title: 'Software Advisor',               bio: 'Former Micromouse software lead, now guiding firmware architecture, software practices, and toolchain setup.', photo: 'https://media.licdn.com/dms/image/v2/D5603AQF4naWGrfzzmA/profile-displayphoto-scale_400_400/B56Z5btiY4GsAk-/0/1779655125626?e=1781740800&v=beta&t=8JlGhVSCZDcSI6WdpsQPWMhfmKH4KyY_w3Mougy6tIA', zoom: 1.0 },
  { id: 'yshi',    name: 'Yshi Blanco',      title: 'Software Advisor · Ex Alumni President', bio: 'Former EATS president bridging current leadership and alumni — bringing real industry perspective back to the club.', photo: 'https://media.licdn.com/dms/image/v2/D5603AQFWbuo4wuvIBw/profile-displayphoto-shrink_800_800/B56ZbrUJBqHgAc-/0/1747704648079?e=1781740800&v=beta&t=mBMi2IdKE4_tnUBQ48JrSLKJQPB3w1TBA4PIMXh5s00', zoom: 1.0 },
];

/* ── localStorage helpers ── */
const STORAGE_KEY = 'eats-board-photos-v2';

function loadPhotos() {
  try { return JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}'); } catch { return {}; }
}
function savePhoto(id, url) {
  const p = loadPhotos(); p[id] = url;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(p));
}

/* ── LinkedIn og:image fetch via CORS proxy ── */
async function fetchLinkedInPhoto(profileUrl) {
  const proxies = [
    u => `https://api.allorigins.win/get?url=${encodeURIComponent(u)}`,
    u => `https://corsproxy.io/?${encodeURIComponent(u)}`,
  ];
  for (const makeProxy of proxies) {
    try {
      const res = await fetch(makeProxy(profileUrl), { signal: AbortSignal.timeout(8000) });
      if (!res.ok) continue;
      const text = await res.text();
      let html;
      try { const json = JSON.parse(text); html = json.contents ?? text; } catch { html = text; }
      const m = html.match(/property="og:image"\s+content="([^"]+)"/i)
             || html.match(/content="([^"]+)"\s+property="og:image"/i);
      if (m?.[1]) return m[1];
    } catch { /* try next */ }
  }
  throw new Error('Could not fetch LinkedIn photo');
}

/* ── Apply photo to a card photo-area ── */
function applyPhoto(photoEl, url, zoom = 1.45) {
  if (!photoEl) return;
  photoEl.querySelector('img.board-photo-img')?.remove();
  photoEl.querySelector('.board-photo-placeholder')?.remove();
  const img = document.createElement('img');
  img.src = url;
  img.className = 'board-photo-img';
  img.loading = 'lazy';
  // --zoom is a CSS custom property so the hover rule in CSS can use calc(var(--zoom) + 0.06)
  img.style.setProperty('--zoom', zoom);
  photoEl.insertBefore(img, photoEl.firstChild);
}

/* ── Auto-fetch LinkedIn photos for members who have a URL but no cached photo ── */
async function autoFetchPhotos(allMembers) {
  const saved = loadPhotos();
  const toFetch = allMembers.filter(m => m.linkedin && !saved[m.id]);
  for (const member of toFetch) {
    try {
      const url = await fetchLinkedInPhoto(member.linkedin);
      savePhoto(member.id, url);
      // Update live card if it exists
      const card = document.querySelector(`[data-member-id="${member.id}"] .board-photo`);
      if (card) applyPhoto(card, url);
    } catch { /* silently skip */ }
  }
}

/* ── Modal ── */
let activeModal = null;

function openPhotoModal(member) {
  if (activeModal) return;
  const overlay = document.createElement('div');
  overlay.className = 'photo-modal-overlay';
  overlay.innerHTML = `
    <div class="photo-modal" role="dialog" aria-modal="true">
      <div class="photo-modal-title">Add Photo — ${member.name}</div>
      <p class="photo-modal-sub">Paste a direct image URL (ends in .jpg, .png, .webp, etc.).</p>
      <input class="photo-modal-input" type="url" placeholder="https://example.com/photo.jpg" autocomplete="off" spellcheck="false">
      <div class="photo-modal-status"></div>
      <div class="photo-modal-actions">
        <button class="photo-modal-cancel" type="button">Cancel</button>
        <button class="photo-modal-save" type="button">Save Photo</button>
      </div>
    </div>
  `;
  document.body.appendChild(overlay);
  activeModal = overlay;

  const input   = overlay.querySelector('.photo-modal-input');
  const status  = overlay.querySelector('.photo-modal-status');
  const saveBtn = overlay.querySelector('.photo-modal-save');

  const close = () => { overlay.remove(); activeModal = null; };

  overlay.querySelector('.photo-modal-cancel').addEventListener('click', close);
  overlay.addEventListener('click', e => { if (e.target === overlay) close(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') close(); }, { once: true });

  requestAnimationFrame(() => { overlay.classList.add('open'); input.focus(); });

  const doSave = () => {
    const url = input.value.trim();
    if (!url) { status.textContent = 'Please paste an image URL.'; return; }
    savePhoto(member.id, url);
    const card = document.querySelector(`[data-member-id="${member.id}"] .board-photo`);
    if (card) applyPhoto(card, url);
    status.textContent = 'Saved!';
    setTimeout(close, 600);
  };

  saveBtn.addEventListener('click', doSave);
  input.addEventListener('keydown', e => { if (e.key === 'Enter') doSave(); });
}

/* ── Card builder ── */
function buildCard(member, savedPhotos) {
  const card = document.createElement('div');
  card.className = 'board-card reveal';
  card.dataset.memberId = member.id;

  const photoArea = document.createElement('div');
  photoArea.className = 'board-photo';

  const photoUrl = savedPhotos[member.id] || member.photo || null;
  if (photoUrl) {
    applyPhoto(photoArea, photoUrl, member.zoom ?? 1.45);
  } else {
    const initials = member.name.split(' ').map(w => w[0]).join('').slice(0, 2).toUpperCase();
    photoArea.innerHTML = `
      <div class="board-photo-placeholder">
        <span>${initials}</span>
      </div>
    `;
  }

  card.innerHTML = `
    <div class="board-info">
      <div class="board-name">${member.name}</div>
      <div class="board-title">${member.title}</div>
      <p class="board-bio">${member.bio}</p>
      ${member.linkedin ? `<a class="board-linkedin" href="${member.linkedin}" target="_blank" rel="noopener" aria-label="LinkedIn profile">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
        LinkedIn
      </a>` : ''}
    </div>
  `;
  card.insertBefore(photoArea, card.firstChild);
  return card;
}

function buildGroup(label, members, gridClass, savedPhotos) {
  const section = document.createElement('div');
  section.className = 'board-group';
  section.innerHTML = `<div class="board-group-label">${label}</div>`;
  const grid = document.createElement('div');
  grid.className = gridClass;
  members.forEach(m => grid.appendChild(buildCard(m, savedPhotos)));
  section.appendChild(grid);
  return section;
}

/* ── Entry point ── */
export function initBoard() {
  const rootEl = document.getElementById('boardRoot');
  if (!rootEl) return;

  const saved = loadPhotos();
  rootEl.appendChild(buildGroup('Officers', OFFICERS, 'board-grid-5', saved));
  rootEl.appendChild(buildGroup('Technical Leads — 2026', TECH_LEADS, 'board-grid board-grid-5', saved));
  const advisorSection = buildGroup('Advisors', ADVISORS, 'board-grid-3', saved);
  advisorSection.classList.add('advisors');
  rootEl.appendChild(advisorSection);

}
