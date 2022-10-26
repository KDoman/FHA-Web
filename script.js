const hambMenu = document.querySelector('#hamburgerMenu');
const hambMenuOn = document.querySelector('.hambMenuOn');
const displayClass = document.querySelector('.hambMenuOnButton')
const hambMenuLogoLineOn = document.querySelectorAll(`.hambMenuLogoLine`);
const martialArtsClasss = document.querySelectorAll(`.martialArtsClass`);

// hamburger menu
hambMenu.addEventListener('click', () => {
    hambMenuOn.classList.toggle('hambMenuOnButton')
    for(let logo of hambMenuLogoLineOn){
        logo.classList.toggle('hambMenuLogoLineOn')
    }
})

// PICTURE SLIDER ON PAGE "ABOUT US"

const leftArrow = document.querySelector('#leftArrowDiv');
const rightArrow = document.querySelector('#rightArrowDiv');