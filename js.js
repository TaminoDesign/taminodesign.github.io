const hamburger = document.querySelector('.hamburger');
const overlayMenu = document.querySelector('.overlay-menu');

hamburger.addEventListener('click', () => {
  overlayMenu.classList.toggle('active');
  hamburger.classList.toggle('active');
});

