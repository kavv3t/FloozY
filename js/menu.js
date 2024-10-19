const menuHamburger = document.querySelector(".menu_hamburger");
const navLinks = document.querySelector(".nav-links");

menuHamburger.addEventListener('click', () => {
    navLinks.classList.toggle('mobile-menu');
});