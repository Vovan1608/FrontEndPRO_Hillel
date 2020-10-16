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
        // arrayTempVal - значения, которые нужно сдвинуть 
        arrayTempVal = [],
        originalArraySize = array.length,
        // кол-во итераций цикла
        numberOfIterations = (array.length - start <= arguments.length - 3) ? arguments.length - 3 : array.length - start;
        //  
    for(let i = 0; i < numberOfIterations || Boolean(arrayTempVal.length) === true; i += 1) {
        
        if(deleteCount < arguments.length - 3) {
            // получаем два массива, важен второй - для значений, которые нужно сдвинуть
            if(i < deleteCount) {
                arrayDeletedVal[arrayDeletedVal.length] = array[i + start];
                // меняем в нашем массиве значения
                array[i + start] = arguments[i + 3];
            } else {

                if(array[i + start] !== undefined) {
                    arrayTempVal[arrayTempVal.length] = array[i + start];
                }
                array[i + start] = arguments[i + 3];
            }
        } else {
            // сразу удалять с конца элементы и распихивать их по массивам
            
            if(i < deleteCount) {
                arrayDeletedVal[arrayDeletedVal.length] = array[i + start];
                // меняем в нашем массиве значения
                if(arguments[i + 3] !== undefined) {
                    array[i + start] = arguments[i + 3];
                }
            } else {
                arrayTempVal.unshift(array[array.length - 1]);
                array.length -= 1;
                console.log(array.length)
            }
        }
        
        if(arrayTempVal.length) {
            push(array, arrayTempVal[0]);
            arrayTempVal.shift();
        }
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
let spl = splice(arr, 2, 2, "num") ;

console.log(spl, "work function");
console.log(arr);