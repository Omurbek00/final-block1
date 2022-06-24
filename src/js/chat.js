let chatburger = document.querySelector('.chat__burger');
let openchat = document.querySelector('.aside__chat');
let closechat = chatburger.querySelector('.chat__cancel')
let body = document.querySelector('.body__proect')
let menuburgerchat = document.querySelector('.aside')
let footerclose = document.querySelector('.footer__proect')

   openchat.addEventListener('click', function () {
       chatburger.classList.toggle('open__chat')
       body.classList.toggle('chat__cancel--body')
       menuburgerchat.classList.toggle('aside__close')
       footerclose.classList.toggle('footer__cancel--chat')
   })
   closechat.addEventListener('click', function() {
       chatburger.classList.remove('open__chat')
       body.classList.remove('chat__cancel--body')
       menuburgerchat.classList.remove('aside__close')
       footerclose.classList.remove('footer__cancel--chat')
   })