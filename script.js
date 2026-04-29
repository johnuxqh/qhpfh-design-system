const root = document.documentElement;
const lightModeBtn = document.getElementById('lightModeBtn');
const darkModeBtn = document.getElementById('darkModeBtn');
const primaryNav = document.querySelector('.primary-nav');
const secondaryNav = document.querySelector('.secondary-nav');
const toasterMenu = document.getElementById('toasterMenu');

const storedTheme = localStorage.getItem('qhpfh-theme');
if (storedTheme === 'light' || storedTheme === 'dark') {
  root.setAttribute('data-theme', storedTheme);
}

function setTheme(theme) {
  root.setAttribute('data-theme', theme);
  localStorage.setItem('qhpfh-theme', theme);
}

function setupSingleSelect(container, selector) {
  const items = [...container.querySelectorAll(selector)];
  items.forEach((item) => {
    item.addEventListener('click', (event) => {
      event.preventDefault();
      items.forEach((entry) => entry.classList.remove('is-selected'));
      item.classList.add('is-selected');
    });
  });
}

setupSingleSelect(primaryNav, 'a');
setupSingleSelect(secondaryNav, 'a');
setupSingleSelect(toasterMenu, 'button');
setupSingleSelect(document.querySelector('.filter-inline'), '.filter-chip');

lightModeBtn.addEventListener('click', () => setTheme('light'));
darkModeBtn.addEventListener('click', () => setTheme('dark'));

window.addEventListener('keydown', (event) => {
  if (event.key.toLowerCase() === 'd') {
    const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    setTheme(next);
  }
});
