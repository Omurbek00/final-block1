let callburger = document.querySelector('.call__burger');
let opencall = document.querySelector('.aside__call');
let closecall = callburger.querySelector('.call__cancel');
let body = document.querySelector('.body__proect')
let menuburgerchat = document.querySelector('.aside')
let footerclose = document.querySelector('.footer__proect')

   opencall.addEventListener('click', function () {
       callburger.classList.add('open__call')
       body.classList.toggle('call__cancel--body')
       menuburgerchat.classList.toggle('aside__close')
       footerclose.classList.toggle('call__open--footer')
   })
   closecall.addEventListener('click', function() {
       callburger.classList.remove('open__call')
       body.classList.remove('call__cancel--body')
       footerclose.classList.remove('call__open--footer')
       menuburgerchat.classList.remove('aside__close')
   })