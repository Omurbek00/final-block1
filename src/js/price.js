let buttonprice = document.querySelector('.button__repair');
buttonprice.addEventListener('click', function(){
   let item = document.querySelectorAll('.repair__hide');
   let content = document.querySelector('.button__text--repair');
   let img = document.querySelector('.button__repair--img');
   for (let i = 0; i < item.length; i++ ){
     item[i].classList.toggle('repair__open--visible');
     if (item[i].classList.contains('repair__open--visible')){
       content.textContent = 'Скрыть'
     }
     else {
       content.textContent = 'Показать все';
     }
     img.classList.toggle('button__repair--rotate');
   }  
 });
 