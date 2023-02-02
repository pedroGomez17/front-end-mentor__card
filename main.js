let numberSelector = document.querySelector('.five-button');
let rateNumber = document.querySelector('.thanks-state__result--number')
let sumbit = document.querySelector('.Submit');
let card = document.querySelector('.card');
let tankState = document.querySelector('.tanks-state');


numberSelector.addEventListener('click',event=>{
   let number = event.target.innerText;
   rateNumber.innerText = number;
   if(number >0 ||number <=5 ){

     console.log('es uno')
    sumbit.addEventListener('click', ()=>{
        card.style.display ='none';
        tankState.style.display ='flex';
    
    })

   }

});
// sumbit.addEventListener('click', ()=>{
//     card.style.display ='none';
//     tankState.style.display ='flex';

// })