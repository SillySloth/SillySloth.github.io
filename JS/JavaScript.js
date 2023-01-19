//#region Responsive nav
const navButton = document.querySelector('.dropdown-navbar');
const navLinks = document.querySelector('.nav-menu');

navButton.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});
//#endregion

//#region Return to top button
window.addEventListener('scroll', () => {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    document.querySelector('#buttonReturn').style.display = 'inline-block';
  } else {
    document.querySelector('#buttonReturn').style.display = 'none';
  }
});

document.querySelector('#buttonReturn').addEventListener('click', () => {
  window.scroll({ top: 0, behavior: 'smooth' });
});
//#endregion
