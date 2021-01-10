// Hamburger menu
const menuBtn = document.querySelector('.menu-btn');

menuBtn.addEventListener('click', () => {
  let menu = document.querySelector('.nav-links');
  menu.classList.toggle('hide-mobile');
  menuBtn.classList.toggle('open');
})


// Scroll to top button
const goToTopButton = document.getElementById('top-button');

const scrollFunction = () => {
  let y = window.scrollY;
  if (y > 550) {
    goToTopButton.className = 'top-link show';
  } else {
    goToTopButton.className = 'top-link hide';
  }
}

window.addEventListener("scroll", scrollFunction);
