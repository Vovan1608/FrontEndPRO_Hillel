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
    deleteCount = (arguments[2] < array.length) ? getIndexForSplice(array, deleteCount) : getIndexForSplice(array, deleteCount) - start;
    let arrayDeletedVal = [];

    for(let i = start; i < start + deleteCount; i += 1) {
        arrayDeletedVal[arrayDeletedVal.length] = array[i];
        delete array[i];
        
        for(let j = 3, size = arguments.length; j < size; j += 1) {
            array[i] = arguments[j];
            break;
        }    
    }
    // if(deleteCount === 0) {
        
    //     arrayDeletedVal = [];
    // }

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
let spl = splice(arr, 2, 50);
console.log(arr);
console.log(spl);