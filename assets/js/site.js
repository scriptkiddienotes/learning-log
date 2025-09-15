// Theme toggle with emoji icon
(function(){
  const root = document.documentElement;
  const btn = document.getElementById('themeToggle');
  const saved = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  function applyTheme(t){
    root.setAttribute('data-theme', t);
    if (btn) btn.textContent = t === 'dark' ? '☀️' : '🌙';
  }
  applyTheme(saved || (prefersDark ? 'dark' : 'light'));

  if (btn) {
    btn.addEventListener('click', () => {
      const next = (root.getAttribute('data-theme') === 'dark') ? 'light' : 'dark';
      localStorage.setItem('theme', next);
      applyTheme(next);
    });
  }
})();

// Smooth anchor scroll (native CSS enabled; keep handler for hash update)
document.addEventListener('click', function(e){
  const a = e.target.closest('a[href^="#"]');
  if (!a) return;
  const id = decodeURIComponent(a.getAttribute('href').slice(1));
  const el = document.getElementById(id);
  if (el) {
    e.preventDefault();
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    history.replaceState(null, '', '#' + id);
  }
});

// Build a minimal, free-look ToC from h1/h2/h3
(function () {
  const toc = document.getElementById('toc');
  if (!toc) return;

  // Prefer post content; otherwise use generic prose in the page
  const scope =
    document.querySelector('.post') ||
    document.querySelector('.page-main') ||
    document;

  // Collect headings (H1/H2/H3)
  const headings = Array.from(scope.querySelectorAll('h1, h2, h3'))
    // ignore headings inside the sidebar toc itself
    .filter(h => !toc.contains(h));

  if (!headings.length) return;

  // Ensure each heading has a stable id
  headings.forEach(h => {
    if (!h.id) {
      h.id = h.textContent.trim().toLowerCase()
        .replace(/[^\p{L}\p{N}]+/gu, '-')
        .replace(/^-+|-+$/g, '');
    }
  });

  // Render links
  const nav = document.createElement('nav');
  nav.className = 'toc-inner';
  nav.innerHTML = '<div class="toc-title">On this page</div>';

  headings.forEach(h => {
    const level = h.tagName === 'H1' ? 1 : h.tagName === 'H2' ? 2 : 3;
    const a = document.createElement('a');
    a.href = '#' + h.id;
    a.textContent = h.textContent;
    a.className = 'toc-link level-' + level;
    nav.appendChild(a);
  });

  toc.innerHTML = ''; // clear if anything existed
  toc.appendChild(nav);

  // Active section highlight
  const links = Array.from(nav.querySelectorAll('.toc-link'));
  const map = Object.fromEntries(links.map(l => [l.getAttribute('href').slice(1), l]));

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        links.forEach(l => l.classList.toggle('active', l === map[id]));
      }
    });
  }, { rootMargin: '0px 0px -70% 0px', threshold: 0.1 });

  headings.forEach(h => observer.observe(h));
})();
