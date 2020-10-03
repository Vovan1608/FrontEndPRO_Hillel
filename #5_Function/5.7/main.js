"use strict";

/*
Функция должна вернуть массив из центральных элементов переданных массивов.

Центральный элемент, это один центральный, если массив по длине 
непарный [1, 2, 3, 4, 5] -> 3

Центральный элемент, это пара центральных, если массив по длине 
парный: [1, 2, 3, 4, 5, 6] -> 3, 4
*/

function getCentralElements () {
    
    var mass = [];

    // 1-st way
    for(let i of arguments){
        var rem = getCutElems(i);
        mass = mass.concat(rem);
    }
    
    //2-nd way
    // for(var i = 0; i < arguments.length; i++) {
    //     var rem = getCutElems(arguments[i]);
    //     mass = mass.concat(rem);
    // }
    console.log(mass, 'mass');
}


function getCutElems(arr) {
    
    var count = (arr.length % 2 == 0) ? 2 : 1;
    var position = Math.ceil(arr.length / 2) - 1;
    var rem = arr.splice(position, count);

    return rem;
} 

getCentralElements([1, 2, 3, 5, 7], [6, 12, 3, 5, 7, 9, 4, 5], [6, 2, 9, 4, 5], [1, 2, 2, 3, 5, 8]); // [3, 5, 7, 9, 2, 3]