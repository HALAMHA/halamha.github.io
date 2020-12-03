const menuBtn = document.querySelector('.menu-btn');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
  if (menuOpen === false) {
    menuBtn.classList.add('open');
    menuOpen = true;
  } else {
    menuBtn.classList.remove('open');
    menuOpen = false;
  }
});

const burgerMenu = document.querySelector('.menu-btn');
burgerMenu.addEventListener('click', displayMenu);

function displayMenu() {
  let menu = document.querySelector('.nav-links')

  if (window.getComputedStyle(menu, null).display === 'none') {
    menu.style.display = 'flex';
  } else {
    menu.style.display = 'none';
  }
}