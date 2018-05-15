function add(a, b){
  return a + b;
}
add();

function subtract(a, b){ 
  return a - b;
}
subtract();

function mutiply(a, b){
  return a * b;
}
multiply();

function division(a, b){
  return a / b;
}
division();

var number = 10;

function add5() {
  number += 5;
}

function divideBy3() {
  number /= 3;
}

divideBy3();

console.log(number);

add5();

console.log(number);

number = 10;

add5();

console.log(number);

divideBy3();

console.log(number);


function makeInt(n){
  return parseInt(n, 10);
}

makeInt('3');

function preserveDecimal(n){
  return parseFloat(n);
}

preserveDecimal('590.28');