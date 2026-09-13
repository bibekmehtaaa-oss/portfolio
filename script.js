const menuButton = document.querySelector('.menu-button');
const navLinks = document.querySelector('.nav-links');

if (menuButton && navLinks) {
  menuButton.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(isOpen));
  });
}

const contactForm = document.querySelector('#contact-form');
const formStatus = document.querySelector('.form-status');

if (contactForm && formStatus) {
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    formStatus.textContent = 'Thanks - your message is ready for the next step.';
    formStatus.classList.add('visible');
    contactForm.reset();
  });
}