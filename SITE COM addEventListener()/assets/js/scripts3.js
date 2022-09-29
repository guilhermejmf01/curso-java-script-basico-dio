var currentNumberWrapper = document.getElementById('currentNumber')
var currentNumber=0;
adicionar.addEventListener('click', ()=>{
    currentNumber= currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber;
    colorNumber(currentNumber)
  
  })
subtrair.addEventListener('click', ()=>{
    currentNumber= currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber;
    colorNumber(currentNumber)
  })
function colorNumber(numero) {
    if(numero=>0){
        document.getElementById("currentNumber").style.color= "black";
    }
    if(numero<0){
        document.getElementById("currentNumber").style.color= "red";
    }
}