let menuburger = document.querySelector('.aside');
let openmenuburger = document.querySelector('.menu__burger');
let closemenuburger = menuburger.querySelector('.menuburger__cancel')
let body = document.querySelector('.body__proect')
let footerclose = document.querySelector('.footer__proect')

   openmenuburger.addEventListener('click', function () {
       menuburger.classList.toggle('open__menuburger')
       body.classList.toggle('body__cancel')
       footerclose.classList.toggle('footer__cancel')
   })
   closemenuburger.addEventListener('click', function() {
        menuburger.classList.remove('open__menuburger')
        body.classList.remove('body__cancel')
        footerclose.classList.remove('footer__cancel')
   })