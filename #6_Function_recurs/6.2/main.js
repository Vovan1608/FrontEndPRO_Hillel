"use strict";

/*
Написать рекурсивную функцию sumTo(n), которая для 
данного n вычисляет сумму чисел от 1 до n, например:
sumTo(1) = 1
sumTo(2) = 2 + 1 = 3
sumTo(3) = 3 + 2 + 1 = 6
*/

function sumTo(n){
    
    return (n === 1) ? 1 : (n + sumTo(n - 1));
}

console.log(sumTo(3));