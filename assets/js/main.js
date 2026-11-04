(() => {
  const root = document.documentElement;
  const themeToggle = document.querySelector('.theme-toggle');
  const savedTheme = localStorage.getItem('portfolio-theme');
  const preferredTheme = window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';

  root.dataset.theme = savedTheme || preferredTheme;

  themeToggle?.addEventListener('click', () => {
    const nextTheme = root.dataset.theme === 'dark' ? 'light' : 'dark';
    root.dataset.theme = nextTheme;
    localStorage.setItem('portfolio-theme', nextTheme);
  });

  const navToggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.site-nav');
  navToggle?.addEventListener('click', () => {
    const open = nav?.classList.toggle('is-open') ?? false;
    navToggle.setAttribute('aria-expanded', String(open));
  });
  nav?.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      nav.classList.remove('is-open');
      navToggle?.setAttribute('aria-expanded', 'false');
    });
  });

  document.querySelectorAll('[data-current-year]').forEach((node) => {
    node.textContent = String(new Date().getFullYear());
  });

  const reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    reveals.forEach((element) => observer.observe(element));
  } else {
    reveals.forEach((element) => element.classList.add('is-visible'));
  }

  document.querySelectorAll('[data-video-frame]').forEach((frame) => {
    const video = frame.querySelector('video');
    if (!video) return;
    const markReady = () => frame.classList.add('is-ready');
    video.addEventListener('loadedmetadata', markReady, { once: true });
    if (video.readyState >= 1) markReady();
  });
})();
