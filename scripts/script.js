//===моб. меню
let menuMob = document.querySelector('.menu-mb');
let headerMenu = document.querySelector('.header__menu');


let toggleMenu = function() {
  headerMenu.classList.toggle('header__menu--active');
  menuMob.classList.toggle('menu-mp--open');
  document.body.classList.toggle('hidden');
}
menuMob.addEventListener('click', toggleMenu);

//===корректная высота моб. меню
window.addEventListener('resize', () => {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
});

//===смузи прокрутка
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

//===анимация
new WOW().init();


//===маска на телефон
var element = document.querySelector('.contacts__inp--tel');
if (element) {
  var maskOptions = {
    mask: '+{7} (000) 000-00-00'
  };
  var mask = IMask(element, maskOptions);
}



//===печать текста

jQuery(document).ready(function () {
  var typed = new Typed('.typed-text', {
    strings: ["онлайн-школы", "вебинары", "мероприятия", "фестивали", "семинары"],
    typeSpeed: 50,
    backSpeed: 20,
    loop: true
  });
})


//===фикс моб меню
let headerMenuList = document.querySelector('.header__menu-list');

headerMenuList.addEventListener('click', function(e) {
  let target = e.target;
  let headerMenu = headerMenuList.closest('.header__menu');

  if (headerMenu.classList.contains('header__menu--active')) {
    if (target.tagName != 'LI') {
      toggleMenu();
    }
  }

})

//===Отложенная загрузка CSS
function asyncCSS(href) {
  setTimeout(() => {
      let css = document.createElement('link');
      css.rel = "stylesheet";
      css.href = href;
      document.head.appendChild(css);
      console.log('2sec');
  }, 2000);
}

asyncCSS('https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css');


if (!!$('#form-order')) {

  $('#form-order').validate({
      rules: {
        user_name: {
              required: true,
              minlength: 2
          },
          user_phone: {
              required: true,
              minlength: 10
          },

      },
      messages: {
        user_name: {
              required: '',
              minlength: ''
          },
          user_phone: {
              required: '',
              minlength: ''
          },
      },
      errorClass: 'invalid'
  });
}
