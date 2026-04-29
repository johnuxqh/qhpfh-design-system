const root = document.documentElement;
const toggle = document.getElementById('themeToggle');
const storedTheme = localStorage.getItem('qhpfh-theme');
if (storedTheme) root.setAttribute('data-theme', storedTheme);

toggle.addEventListener('click', () => {
  const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  root.setAttribute('data-theme', next);
  localStorage.setItem('qhpfh-theme', next);
});

const panel = document.getElementById('panel');
document.getElementById('openPanel').addEventListener('click', () => panel.setAttribute('aria-hidden', 'false'));
document.getElementById('closePanel').addEventListener('click', () => panel.setAttribute('aria-hidden', 'true'));
