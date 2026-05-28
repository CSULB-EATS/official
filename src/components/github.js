/* ============================================================
   GitHub Repos — fetches CSULB-EATS public repos live
   ============================================================ */

const GITHUB_ORG = 'CSULB-EATS';
const SKIP = new Set(['official']);

const LANG_COLORS = {
  'C':          '#555555',
  'C++':        '#f34b7d',
  'JavaScript': '#f1e05a',
  'TypeScript': '#3178c6',
  'Python':     '#3572A5',
  'CSS':        '#563d7c',
  'HTML':       '#e34c26',
  'Assembly':   '#6E4C13',
};

async function fetchRepos() {
  try {
    const res = await fetch(
      `https://api.github.com/orgs/${GITHUB_ORG}/repos?sort=updated&per_page=12&type=public`,
      { headers: { Accept: 'application/vnd.github.v3+json' } }
    );
    if (!res.ok) throw new Error('GitHub API error');
    const data = await res.json();
    return data.filter(r => !SKIP.has(r.name) && !r.fork);
  } catch {
    return null;
  }
}

function timeAgo(dateStr) {
  const diff = Date.now() - new Date(dateStr);
  const days = Math.floor(diff / 86400000);
  if (days === 0) return 'today';
  if (days < 7)  return `${days}d ago`;
  if (days < 30) return `${Math.floor(days / 7)}w ago`;
  if (days < 365) return `${Math.floor(days / 30)}mo ago`;
  return `${Math.floor(days / 365)}y ago`;
}

function renderRepos(container, repos) {
  container.innerHTML = '';
  repos.forEach(repo => {
    const card = document.createElement('a');
    card.className = 'gh-card';
    card.href = repo.html_url;
    card.target = '_blank';
    card.rel = 'noopener';

    const langColor = LANG_COLORS[repo.language] || '#888888';
    const desc = repo.description || '';

    card.innerHTML = `
      <div class="gh-card-top">
        <svg class="gh-repo-icon" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true">
          <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
          <path d="M9 18c-4.51 2-5-2-7-2"/>
        </svg>
        <span class="gh-name">${repo.name}</span>
        <svg class="gh-arrow" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
          <path d="M7 7h10v10M7 17 17 7"/>
        </svg>
      </div>
      ${desc ? `<p class="gh-desc">${desc}</p>` : ''}
      <div class="gh-meta">
        ${repo.language ? `
          <span class="gh-lang">
            <span class="gh-lang-dot" style="background:${langColor}"></span>
            ${repo.language}
          </span>` : ''}
        ${repo.stargazers_count > 0 ? `
          <span class="gh-stat">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26"/></svg>
            ${repo.stargazers_count}
          </span>` : ''}
        ${repo.forks_count > 0 ? `
          <span class="gh-stat">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="12" cy="18" r="3"/><circle cx="6" cy="6" r="3"/><circle cx="18" cy="6" r="3"/><path d="M18 9v2a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V9"/><line x1="12" y1="12" x2="12" y2="15"/></svg>
            ${repo.forks_count}
          </span>` : ''}
        <span class="gh-updated">${timeAgo(repo.updated_at)}</span>
      </div>
    `;
    container.appendChild(card);
  });
}

export async function initGitHub() {
  const container = document.getElementById('githubRepos');
  if (!container) return;

  container.innerHTML = '<div class="gh-loading">Loading repos…</div>';

  const repos = await fetchRepos();
  if (repos?.length) {
    renderRepos(container, repos);
  } else {
    container.innerHTML = `
      <div class="gh-fallback">
        <p>Could not load repos. Visit us directly on GitHub.</p>
        <a href="https://github.com/${GITHUB_ORG}" target="_blank" rel="noopener" class="btn-primary">View on GitHub</a>
      </div>
    `;
  }
}
