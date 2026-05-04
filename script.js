const root = document.documentElement;
const themeToggle = document.getElementById('themeToggle');
const themePreference = localStorage.getItem('qhpfh-theme') || 'light';

function setTheme(theme) {
  root.setAttribute('data-theme', theme);
  localStorage.setItem('qhpfh-theme', theme);
  if (themeToggle) themeToggle.textContent = theme === 'dark' ? 'Light mode' : 'Dark mode';
}

setTheme(themePreference);

if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    setTheme(next);
  });
}

const primaryNav = document.querySelector('.primary-nav');
if (primaryNav) {
  const items = primaryNav.querySelectorAll('a');
  items.forEach((item) => {
    item.addEventListener('click', (event) => {
      event.preventDefault();
      items.forEach((i) => i.classList.remove('is-selected'));
      item.classList.add('is-selected');

      const targetId = item.getAttribute('href');
      const target = targetId ? document.querySelector(targetId) : null;
      if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
}
