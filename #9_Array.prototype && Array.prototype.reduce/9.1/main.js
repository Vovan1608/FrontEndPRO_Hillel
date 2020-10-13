"use strict";

/*
Самостоятельно реализовать метод Array.prototype.slice
без использования стандартных метод Array.prototype

Он возвращает новый массив, в который копирует элементы, 
начиная с индекса start и до end (не включая end). Оба 
индекса start и end могут быть отрицательными. В таком 
случае отсчёт будет осуществляться с конца массива.
*/

function slice(array, start = 0, end = array.length) {
    start = (start >= 0) ? start : (array.length + start);
    end = (end > array.length) ? array.length : 
          (end > 0) ?  end : (array.length + end);
    let newArray = [];

    if(isArray(array)) {

        for (let i = start; i < end; i += 1) {
            newArray[newArray.length] = array[i];
        }
    }
    
    return newArray;
}

function isArray(array) {
    return Array.isArray(array);
}

let array = [1, 2, 3, 4, 5, 6, 7, 8];
let sl = slice(array, 1, 4);
console.log(sl);