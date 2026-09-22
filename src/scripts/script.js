window.addEventListener('DOMContentLoaded', () => {

  const elementos = [
    document.querySelector('nav'),
    document.querySelector('header')
  ];


  elementos.forEach((el) => {
    if (el) {
      el.style.opacity = '0';
      el.style.transform = 'translateY(20px)';
      el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    }
  });

  elementos.forEach((el, index) => {
    if (el) {
      setTimeout(() => {
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
      }, index * 250);
    }
  });
});
