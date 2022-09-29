var currentNumberWrapper = document.getElementById('currentNumber')
var currentNumber=0;
adicionar.addEventListener('click', ()=>{
    if(currentNumber<10){
    currentNumber= currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber;
    }
  })
subtrair.addEventListener('click', ()=>{
    if(currentNumber>0){
    currentNumber= currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber;
    }
  })
