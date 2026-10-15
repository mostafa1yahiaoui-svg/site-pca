const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
menuButton.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
});
document.querySelectorAll('.nav a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
}));
let language = 'fr';
document.getElementById('langToggle').addEventListener('click', () => {
  language = language === 'fr' ? 'ar' : 'fr';
  document.documentElement.lang = language;
  document.body.dir = language === 'ar' ? 'rtl' : 'ltr';
  document.getElementById('langToggle').textContent = language === 'fr' ? 'العربية' : 'Français';
  document.querySelectorAll('[data-fr][data-ar]').forEach(el => {
    el.textContent = el.dataset[language];
  });
});
document.getElementById('year').textContent = new Date().getFullYear();
