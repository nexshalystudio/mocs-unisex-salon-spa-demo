const navToggle = document.querySelector('.nav-toggle');
const siteHeader = document.querySelector('.header');

navToggle.addEventListener('click', () => {
  const open = siteHeader.classList.toggle('nav-open');
  navToggle.setAttribute('aria-expanded', String(open));
  navToggle.textContent = open ? '×' : '☰';
});

document.querySelectorAll('.header nav a').forEach((link) => {
  link.addEventListener('click', () => {
    siteHeader.classList.remove('nav-open');
    navToggle.setAttribute('aria-expanded', 'false');
    navToggle.textContent = '☰';
  });
});
