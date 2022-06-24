let text = document.querySelector('.text__hide');
let opentext = document.querySelector('.read__text');
let readimg = document.querySelector('.read__img')
   opentext.addEventListener('click', function () {
    if (opentext.classList.toggle('open__text')) {
       text.classList.toggle('open__text');
       opentext.textContent = 'Скрыть';
    }
    else {
        text.classList.remove('open__text');
        opentext.textContent = 'Читать далее';
    }
    readimg.classList.toggle('read__img--rotate')
   })