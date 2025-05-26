/* hamburguer */

function myFunction(x) {
  x.classList.toggle("change");
}



/* mobile menu */

const hamburger = document.getElementById("hamburguer-container");
const mobileMenu = document.getElementById("mobile-menu");
const overlay = document.getElementById("overlay");

function toggleMenu() {
  const isOpen = mobileMenu.classList.contains("open");
  mobileMenu.classList.toggle("open");
  overlay.classList.toggle("active");
  hamburger.classList.toggle("open");
}

hamburger.addEventListener("click", toggleMenu);
overlay.addEventListener("click", toggleMenu);
