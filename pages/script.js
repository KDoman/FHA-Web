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




// scrolling
// window.addEventListener('scroll', () => {
//     const scroll = window.scrollY;
//     console.log(scroll);
//     if(scroll >= c) ){
//         for(let art of martialArtsClasss){
//             art.style.opacity = `1`;
//         }
//     }else{
//         for(let art of martialArtsClasss){
//             art.style.opacity = '0';
//         }
//     }
// })