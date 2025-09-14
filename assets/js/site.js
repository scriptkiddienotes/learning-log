// Theme toggle (light/dark) with localStorage
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

// Smooth scroll for in-page anchors
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

// Build a ToC on post pages from h2/h3 headings
(function(){
  const toc = document.getElementById('toc');
  if (!toc) return;

  const headings = Array.from(document.querySelectorAll('.post h2, .post h3'));
  if (!headings.length) return;

  // Ensure IDs for headings
  headings.forEach(h => {
    if (!h.id) h.id = h.textContent.trim().toLowerCase().replace(/[^\w]+/g, '-');
  });

  const list = document.createElement('nav');
  list.className = 'toc-inner';
  list.innerHTML = '<div class="toc-title">On this page</div>';

  headings.forEach(h => {
    const a = document.createElement('a');
    a.href = '#' + h.id;
    a.textContent = h.textContent;
    a.className = 'toc-link level-' + (h.tagName === 'H2' ? '2' : '3');
    list.appendChild(a);
  });

  toc.appendChild(list);

  // Highlight active section with IntersectionObserver
  const links = Array.from(list.querySelectorAll('.toc-link'));
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

