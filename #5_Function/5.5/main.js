"use strict";

/*
напиши функцию filter, которая принимает функцию-предикат и массив. 
Возвращает она массив значений, для которых предикат вернет true.

var input = [1, 2, 3, 4, 5, 6];
function isEven(x) { return x % 2 == 0; } // проверяет на четность
console.log(filter(input, isEven)); // [2, 4, 6]
*/

function isEven(x) { 
    return x % 2 == 0; 
}

function filter(arr, isEven){
    
    if(isArray(arr) && isFunction(isEven)){
        
        let input = [];

        for(let i of arr){
            if(isEven(i)){
                input.push(i);
            }
        }
        return input;
        
    }else{
        return "incorrect parameters"
    }
}

function isArray(arr){
    if(Array.isArray(arr)){
        return true;
    }else{
        return false;
    }
}

function isFunction(func){
    if(typeof func === "function"){
        return true;
    }else{
        return false;
    }
}

let input = [1, 2, 3, 4, 5, 6]; 
console.log(filter(input, isEven)); // [2, 4, 6]