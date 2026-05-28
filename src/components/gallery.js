/* ============================================================
   Photo Gallery — Auto-advancing Slideshow
   ============================================================ */

const PHOTOS = {
  competitions: [
    { src: 'images/alumni/photo15_micromouse1.jpg',   caption: 'Micromouse Competition' },
    { src: 'images/alumni/photo16_micromouse2024.jpg', caption: 'Micromouse 2024' },
    { src: 'images/alumni/photo13_stage_award.png',   caption: 'Award Ceremony' },
    { src: 'images/alumni/photo9_awards.png',         caption: 'Year-End Celebration' },
  ],
  workshops: [
    { src: 'images/alumni/photo3_soldering.png',    caption: 'Soldering Workshop' },
    { src: 'images/alumni/photo6_meeting_room.png', caption: 'Friday Meeting' },
    { src: 'images/alumni/photo10_office_build.png',caption: 'Setting Up Shop' },
  ],
  events: [
    { src: 'images/alumni/photo5_booth_table.png',  caption: 'Campus Club Fair' },
    { src: 'images/alumni/photo1_booth_outdoor.png',caption: 'Club Fair Demo' },
    { src: 'images/alumni/photo17_wow.png',         caption: 'Week of Welcome 2023' },
    { src: 'images/alumni/photo14_halloween.png',   caption: 'Halloween Hackathon' },
  ],
  history: [
    { src: 'images/alumni/photo4_group_jump.png',   caption: 'Big Crew Energy' },
    { src: 'images/alumni/photo7_officers.png',     caption: 'Officer Team' },
    { src: 'images/alumni/photo11_group_jump2.png', caption: 'Classic Jump Shot' },
    { src: 'images/alumni/photo8_early_group.png',  caption: 'Early Chapter' },
    { src: 'images/alumni/photo12_night_group.png', caption: 'After the Meetup' },
    { src: 'images/alumni/photo2_members_indoor.png',caption: 'Club Members' },
  ],
};

const CATEGORIES = [
  { id: 'all',          label: 'All' },
  { id: 'competitions', label: 'Competitions' },
  { id: 'workshops',    label: 'Workshops' },
  { id: 'events',       label: 'Events' },
  { id: 'history',      label: 'History' },
];

const INTERVAL_MS = 4000;

let category = 'all';
let idx = 0;
let root = null;
let timer = null;

function photos() {
  if (category === 'all') {
    return [
      ...PHOTOS.competitions,
      ...PHOTOS.workshops,
      ...PHOTOS.events,
      ...PHOTOS.history,
    ];
  }
  return PHOTOS[category] || [];
}

function jumpTo(i) {
  idx = i;
  refresh();
}

function advance() {
  const list = photos();
  idx = (idx + 1) % list.length;
  refresh();
}

function startTimer() {
  clearInterval(timer);
  timer = setInterval(advance, INTERVAL_MS);
}

function stopTimer() {
  clearInterval(timer);
  timer = null;
}

function refresh() {
  if (!root) return;
  const list = photos();
  const photo = list[idx];

  const mainImg = root.querySelector('.gslide-img');
  const caption = root.querySelector('.gslide-caption');
  const counter = root.querySelector('.gslide-counter');
  const thumbs  = root.querySelectorAll('.gslide-thumb');
  const tabs    = root.querySelectorAll('.gcat-tab');

  if (mainImg) {
    mainImg.style.opacity = '0';
    setTimeout(() => {
      mainImg.src = photo.src;
      mainImg.alt = photo.caption;
      mainImg.style.opacity = '1';
    }, 180);
  }
  if (caption) caption.textContent = photo.caption;
  if (counter) counter.textContent = `${idx + 1} / ${list.length}`;

  thumbs.forEach((th, i) => th.classList.toggle('active', i === idx));
  tabs.forEach(t => t.classList.toggle('active', t.dataset.cat === category));

  const activeThumb = root.querySelector('.gslide-thumb.active');
  if (activeThumb) {
    activeThumb.scrollIntoView({ block: 'nearest', inline: 'center', behavior: 'smooth' });
  }
}

function buildThumbs() {
  const strip = root.querySelector('.gslide-thumbstrip');
  if (!strip) return;
  const list = photos();
  strip.innerHTML = '';
  list.forEach((photo, i) => {
    const btn = document.createElement('button');
    btn.className = 'gslide-thumb' + (i === idx ? ' active' : '');
    btn.type = 'button';
    btn.setAttribute('aria-label', photo.caption);
    btn.innerHTML = `<img src="${photo.src}" alt="" loading="lazy">`;
    btn.addEventListener('click', () => { jumpTo(i); startTimer(); });
    strip.appendChild(btn);
  });
}

export function initGallery() {
  root = document.getElementById('galleryRoot');
  if (!root) return;

  const list = photos();
  const first = list[0];

  root.innerHTML = `
    <div class="gcat-tabs">
      ${CATEGORIES.map(c => `
        <button class="gcat-tab${c.id === category ? ' active' : ''}" data-cat="${c.id}" type="button">${c.label}</button>
      `).join('')}
    </div>

    <div class="gslide-wrap">
      <div class="gslide-stage">
        <img class="gslide-img" src="${first.src}" alt="${first.caption}" loading="eager">
        <div class="gslide-overlay">
          <div class="gslide-caption">${first.caption}</div>
          <div class="gslide-counter">1 / ${list.length}</div>
        </div>
      </div>
    </div>

    <div class="gslide-thumbstrip"></div>
  `;

  buildThumbs();

  // Category tabs restart the slideshow from photo 0
  root.querySelectorAll('.gcat-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      category = tab.dataset.cat;
      idx = 0;
      buildThumbs();
      refresh();
      startTimer();
    });
  });

  // Pause when section is off-screen, resume when visible
  const observer = new IntersectionObserver(
    entries => entries[0].isIntersecting ? startTimer() : stopTimer(),
    { threshold: 0.1 }
  );
  observer.observe(root);
}
