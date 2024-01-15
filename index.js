const title = document.getElementById('title');

window.addEventListener('scroll', () => {
  const scrolled = window.scrollY;
  title.style.transform = `translateX(-${scrolled}px)`;
});

title.addEventListener('click', () => {
  window.location.href = 'secondPage.html'; // Replace with your actual second page URL
});
