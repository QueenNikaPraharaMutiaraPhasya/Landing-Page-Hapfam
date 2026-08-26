const menuButton = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuButton?.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', isOpen);
});

navLinks?.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
  navLinks.classList.remove('open');
  menuButton?.setAttribute('aria-expanded', 'false');
}));

const slides = [...document.querySelectorAll('.testimonial')];
let activeSlide = 0;
function showSlide(index) {
  slides[activeSlide]?.classList.remove('active');
  activeSlide = (index + slides.length) % slides.length;
  slides[activeSlide]?.classList.add('active');
}
document.querySelector('.next')?.addEventListener('click', () => showSlide(activeSlide + 1));
document.querySelector('.prev')?.addEventListener('click', () => showSlide(activeSlide - 1));

const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
  if (entry.isIntersecting) {
    entry.target.classList.add('visible');
    observer.unobserve(entry.target);
  }
}), { threshold: 0.15 });
document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));

document.querySelector('#year').textContent = new Date().getFullYear();
