"use strict";

/*
Самостоятельно реализовать метод Array.prototype.splice 
без использования стандартных метод Array.prototype 
(допускаются методы push,pop, shift, unshift)

Метод arr.splice(str) – Умеет всё: добавлять, удалять и заменять элементы

Метод splice() изменяет содержимое массива, удаляя существующие элементы 
и/или добавляя новые.
*/

function splice(array, start, deleteCount) {
    start = getIndexForSplice(array, start);
    deleteCount = getIndexForSplice(array, deleteCount);
    let arrayDeletedVal = [];

    for(let i = start; i < start + deleteCount; i += 1) {
        delete array[i];
        array[i] = arguments[3]
    }
    if(deleteCount === 0) {
        
        arrayDeletedVal = [];
    }

    return arrayDeletedVal;
}

function isArray(array) {
    return Array.isArray(array);
}

function getIndexForSplice(array, index) {
    index = (index > array.length) ? array.length : 
            (index >= 0) ?  index : (array.length + index);
    
    return index;
}

let arr = [1, 3, 4, 6, 9, 11];
let spl = splice(arr, 2, 0, "num");
console.log(arr);
console.log(spl);