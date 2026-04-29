const root = document.documentElement;
const toasterToggle = document.getElementById('toasterToggle');
const toasterMenu = document.getElementById('toasterMenu');

const storedTheme = localStorage.getItem('qhpfh-theme');
if (storedTheme) root.setAttribute('data-theme', storedTheme);

function closeToaster() {
  toasterMenu.hidden = true;
  toasterToggle.setAttribute('aria-expanded', 'false');
}

function openToaster() {
  toasterMenu.hidden = false;
  toasterToggle.setAttribute('aria-expanded', 'true');
}

toasterToggle.addEventListener('click', () => {
  if (toasterMenu.hidden) openToaster();
  else closeToaster();
});

document.addEventListener('click', (event) => {
  if (!toasterMenu.contains(event.target) && !toasterToggle.contains(event.target)) {
    closeToaster();
  }
});

toasterMenu.querySelectorAll('button').forEach((button) => {
  button.addEventListener('click', () => {
    toasterMenu.querySelectorAll('button').forEach((b) => b.classList.remove('is-selected'));
    button.classList.add('is-selected');
  });
});

window.addEventListener('keydown', (event) => {
  if (event.key === 'd') {
    const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    localStorage.setItem('qhpfh-theme', next);
  }
  if (event.key === 'Escape') closeToaster();
});
