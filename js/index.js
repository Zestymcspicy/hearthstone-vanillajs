const hamburger = document.getElementById("hamburger");
const navList = document.getElementById("nav-list");

hamburger.addEventListener('click', event => {
  navList.classList.toggle("show-menu")
});
