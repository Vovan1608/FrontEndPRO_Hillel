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
    start = getIndexForSlice(array, start);
    end = getIndexForSlice(array, end);
    let newArray = [];

    if(isArray(array)) {

        for (let i = start; i < end; i += 1) {
            push(newArray, array[i]);
        }
    }
    
    return newArray;
}

function isArray(array) {
    return Array.isArray(array);
}

function getIndexForSlice(array, index) {
    index = (index > array.length) ? array.length : 
            (index >= 0) ?  index : (array.length + index);
    
    return index;
}

function push(array, element) {
    array[array.length] = element;

    return array.length;
}

let array = [1, 2, 3, 4, 5, 6, 7, 8];
let sl = slice(array, 1, 4);
console.log(sl);