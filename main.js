const menuBtn = document.querySelector('.menu-btn');
menuBtn.addEventListener('click', () => {
  let menu = document.querySelector('.nav-links');
  menu.classList.toggle('hide-mobile')
  menuBtn.classList.toggle('open')
})


