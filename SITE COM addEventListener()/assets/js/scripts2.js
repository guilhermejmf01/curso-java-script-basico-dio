var currentNumberWrapper = document.getElementById('currentNumber')
var currentNumber=0;
adicionar.addEventListener('click', ()=>{
    currentNumber= currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber;
  })
subtrair.addEventListener('click', ()=>{
    currentNumber= currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber;
  })
