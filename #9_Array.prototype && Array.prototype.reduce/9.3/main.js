"use strict";

/*
Самостоятельно реализовать метод Array.prototype.splice 
без использования стандартных метод Array.prototype 
(допускаются методы push,pop, shift, unshift)

Метод arr.splice(str) – Умеет всё: добавлять, удалять и заменять элементы

Метод splice() изменяет содержимое массива, удаляя существующие элементы 
и/или добавляя новые.
*/

function splice(array, start, deleteCount = 0) {
    start = getIndexForSplice(array, start);
    // deleteCount - сколько элементов удалить из массива; тут ограничение нужно для цикла, если вдруг число больше длины массива
    deleteCount = (arguments[2] <= array.length - start) ? getIndexForSplice(array, deleteCount) : array.length - start;
    // arrayDeletedVal - то,что функция возвращает (массив из удаленных элементов)
    let arrayDeletedVal = [],
        tempFirst = slice(array, 0, start),
        tempSecond = slice(array, start, array.length);
        
    // тут впихнул в конец первого временного массива то, что вcтавить 
    for(let i = 3, size = arguments.length; i < size; i += 1) {
        push(tempFirst, arguments[i]);
    }
    // тут копирую в возвращаемый массив удаляемые єлементы,
    // удалил из второго временного массива, все что нужно убить
    for(let i = 0; i < deleteCount; i += 1) {
        arrayDeletedVal[arrayDeletedVal.length] = tempSecond[0];
        tempSecond.shift(i);
    }
    // объединил оба временных массива
    array = tempFirst.concat(tempSecond);
    console.log(array, "array after splice");
    
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

function slice(array, start = 0, end = array.length) {
    start = getIndexForSplice(array, start);
    end = getIndexForSplice(array, end);
    let newArray = [];

    if(isArray(array)) {

        for (let i = start; i < end; i += 1) {
            push(newArray, array[i]);
        }
    }
    
    return newArray;
}

function push(array, element) {
    array[array.length] = element;

    return array.length;
}

let arr = [1, 3, 4, 6, 9, 11];
let spl = splice(arr, 2, 3, "num", "mki", "bnm") ;

console.log(spl);