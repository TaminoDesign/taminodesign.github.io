const hamburger = document.querySelector('.hamburger');
const overlayMenu = document.querySelector('.overlay-menu');

hamburger.addEventListener('click', () => {
  overlayMenu.classList.toggle('active');
  hamburger.classList.toggle('active');
});


const form = document.getElementById('contactCaptcha');

form.addEventListener('submit', function(e) {

    const hCaptcha = form.querySelector('textarea[name=h-captcha-response]').value;

    if (!hCaptcha) {
        e.preventDefault();
        alert("Please fill out captcha field")
        return
    }
});