(function() {
  const themeToggle = document.getElementById('themeToggle');
  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  const saved = localStorage.getItem('theme');
  if (saved === 'light') document.documentElement.classList.add('light');
  if (!saved && !prefersDark) document.documentElement.classList.add('light');

  function setIcon() {
    const isLight = document.documentElement.classList.contains('light');
    if (themeToggle) themeToggle.textContent = isLight ? '🌞' : '🌙';
  }
  setIcon();

  if (themeToggle) {
    themeToggle.addEventListener('click', function() {
      document.documentElement.classList.toggle('light');
      const isLight = document.documentElement.classList.contains('light');
      localStorage.setItem('theme', isLight ? 'light' : 'dark');
      setIcon();
    });
  }

  // Smooth scroll for internal links
  document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId.length > 1) {
        const el = document.querySelector(targetId);
        if (el) {
          e.preventDefault();
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    });
  });

  // Current year in footer
  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
})();





