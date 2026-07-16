
const anchors = document.querySelectorAll('a[href^="#"]');
anchors.forEach((a) => {
  a.addEventListener('click', (event) => {
    const target = document.querySelector(a.getAttribute('href'));
    if (target) {
      event.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});
