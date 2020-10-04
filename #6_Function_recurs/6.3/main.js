"use strict";

/*
Написать функция factorial(n) - которая при помощи 
рекурсии будет считать значение факториала числа n!
*/

function getFactorial(n){
    
    return (n === 1) ? 1 : (n * getFactorial(n - 1));
}

console.log(getFactorial(5));