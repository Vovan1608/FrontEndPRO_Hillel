"use strict";

/*
напиши функцию filter, которая принимает функцию-предикат и массив. 
Возвращает она массив значений, для которых предикат вернет true.

var input = [1, 2, 3, 4, 5, 6];
function isEven(x) { return x % 2 == 0; } // проверяет на четность
console.log(filter(input, isEven)); // [2, 4, 6]
*/

function isEven(x) { return x % 2 == 0; }

function filter(arr, check){

    let input = [];

    for(let i of arr){
        if(isEven(i)){
            input.push(i);
        }
    }
    return input;
}

let input = [1, 2, 3, 4, 5, 6]; // [2, 4, 6]
console.log(filter(input, isEven));