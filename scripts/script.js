let menuMob = document.querySelector('.menu-mb');
let headerMenu = document.querySelector('.header__menu');

menuMob.addEventListener('click', function() {
  headerMenu.classList.toggle('header__menu--active');
  menuMob.classList.toggle('menu-mp--open');
  document.body.classList.toggle('hidden');
})



const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    
    const blockID = anchor.getAttribute('href').substr(1)
    
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'center'
    })
  })
}

new WOW().init();



var element = document.querySelector('.contacts__inp--tel');
var maskOptions = {
  mask: '+{7} (000) 000-00-00'
};
var mask = IMask(element, maskOptions);