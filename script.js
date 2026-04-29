const root = document.documentElement;
const themeToggle = document.getElementById('themeToggle');
const lightModePreferred = localStorage.getItem('qhpfh-theme') || 'light';

root.setAttribute('data-theme', lightModePreferred);

function setTheme(theme) {
  root.setAttribute('data-theme', theme);
  localStorage.setItem('qhpfh-theme', theme);
  if (themeToggle) {
    themeToggle.textContent = theme === 'dark' ? 'Light mode' : 'Dark mode';
  }
}

if (themeToggle) {
  setTheme(lightModePreferred);
  themeToggle.addEventListener('click', () => {
    const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    setTheme(next);
  });
}

function setupSingleSelect(selector) {
  document.querySelectorAll(selector).forEach((group) => {
    const items = group.querySelectorAll('a');
    items.forEach((item) => {
      item.addEventListener('click', (event) => {
        event.preventDefault();
        items.forEach((i) => i.classList.remove('is-selected'));
        item.classList.add('is-selected');
      });
    });
  });
}

setupSingleSelect('.primary-nav');
setupSingleSelect('.secondary-nav');
