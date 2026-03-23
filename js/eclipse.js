document.addEventListener('DOMContentLoaded', () => {
  // Reading Progress Bar
  const progressBar = document.getElementById('progress-bar');
  if (progressBar) {
    window.addEventListener('scroll', () => {
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      progressBar.style.width = scrolled + "%";
    });
  }

  // Fade-in animations on scroll
  const observerOptions = { threshold: 0.1 };
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll('.post-item').forEach(item => observer.observe(item));

  // Lightbox
  const lightbox = document.createElement('div');
  lightbox.id = 'lightbox';
  document.body.appendChild(lightbox);

  const setupLightbox = () => {
    const images = document.querySelectorAll('#main img');
    images.forEach(img => {
      img.addEventListener('click', () => {
        lightbox.innerHTML = `<img src="${img.src}" alt="${img.alt}">`;
        lightbox.classList.add('active');
      });
    });
  };

  setupLightbox();

  lightbox.addEventListener('click', () => {
    lightbox.classList.remove('active');
  });

  // Mobile Menu Toggle
  const menuToggle = document.getElementById('menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');

  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener('click', () => {
      menuToggle.classList.toggle('is-active');
      mobileMenu.classList.toggle('is-active');
    });
  }
});
