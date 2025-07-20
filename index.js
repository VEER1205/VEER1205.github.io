// Typed.js
var typed = new Typed("#element", {
  strings: [
    "Web Developer",
    "Backend Developer",
    "Competitive Programmer"
  ],
  typeSpeed: 80,
});

// Scroll animation fallback
document.addEventListener("DOMContentLoaded", () => {
  if (!CSS.supports("animation-timeline: view()")) {
    const elements = document.querySelectorAll(".auto-show");
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });

    elements.forEach(el => observer.observe(el));
  }
});

// Mobile nav toggle
const navtoggle = document.querySelector('.menu-toggle');
const navlinks = document.querySelector('.nav-links');
const navcontainer = document.querySelector('.nav');

navtoggle.addEventListener('click', () => {
  navlinks.classList.toggle('active');
  navtoggle.classList.toggle('active');
});
