//DOM Variables
let input1 = document.getElementById('input1')
let input2 = document.getElementById('input2')
let result = document.getElementById('result')
let plusBtn = document.getElementById('plus')
let clear = document.getElementById('c')
let minusBtn = document.getElementById('minus')
let timesBtn = document.getElementById('times')
let divideBtn = document.getElementById('divide')
let modBtn = document.getElementById('mod')

//EVENT HANDLERS
clear.addEventListener('click', clearResult)
plusBtn.addEventListener('click', add)
minusBtn.addEventListener('click', subtract)
timesBtn.addEventListener('click', multiply)
divideBtn.addEventListener('click', divide)
modBtn.addEventListener('click', modulus)



//FUNCTIONS

function clearResult (){
   input1.value = 0
   input2.value = 0
   result.innerText = ""
}

function add (){
   let sum = parseInt(input1.value) + parseInt(input2.value)
   result.innerText = sum
   console.log('plus')
}

function subtract (){
   let diff = parseInt(input1.value) - parseInt(input2.value)
   result.innerText = diff
   console.log('minus')
}

function multiply (){
   let product = parseInt(input1.value) * parseInt(input2.value)
   result.innerText = product
   console.log('product')
}

function divide (){
   let quotient = parseInt(input1.value) / parseInt(input2.value)
   result.innerText = quotient
   console.log('quotient')
}

function modulus (){
   let modulus = parseInt(input1.value) % parseInt(input2.value)
   result.innerText = modulus
   console.log('mod')
}


 
