
const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar_menu');
const navLogo = document.querySelector('#navbar_logo');

// Display mobile menu
const mobileMenu = () => {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
};

menu.addEventListener('click', mobileMenu);

// Highlight menu items on scroll
const highlightMenu = () => {
    const elem = document.querySelector('.highlight');
    const introMenu = document.querySelector('#home-page');
    const projectsMenu = document.querySelector('#about-page');
    const extraMenu = document.querySelector('#extracurricular-page');
    const scrollPos = window.scrollY;

    // Remove the highlight class by default
  //  if (elem) elem.classList.remove('highlight');

    // Add highlight based on scroll position
     if (window.innerWidth >= 960) {
         if (scrollPos < 240) {
             introMenu.classList.add('highlight');
             projectsMenu.classList.remove('highlight');
             return;
         } else if (scrollPos < 850) {
             projectsMenu.classList.add('highlight');
             introMenu.classList.remove('highlight');
             extraMenu.classList.remove('highlight');
             return;
         } else if (scrollPos < 1250) {
             extraMenu.classList.add('highlight');
             projectsMenu.classList.remove('highlight');
             return;
         }
     }
 };



window.addEventListener('scroll', highlightMenu);
window.addEventListener('click', highlightMenu);

const hideMobileMenu = () => {
    const menuBars = document.querySelector('.is-active');
    if (window.innerWidth <= 960 && menuBars) {
        menu.classList.remove('is-active');
        menuLinks.classList.remove('active');
    }
};

menuLinks.addEventListener('click', hideMobileMenu);
navLogo.addEventListener('click', hideMobileMenu);



