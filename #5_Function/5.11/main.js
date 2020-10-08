"use strict";

/*
Предусмотреть возможность передачи вторым аргументом функции. 
При копировании массива - функция применится к каждому элементу 
копируемого массива. 
newL = copy(list, function(value){ return value*10; })
*/

function copyArr(arr, func){
    
    if(isArray(arr) && isFunction(func)){
        return arr.map( (i) => mutationValue(i));
    }else{
        throw new Error("incorrect arr or func");
    }
    
}

let mutationValue = function (value) { 
    return value * 10; 
}

function isArray(arr){
    if(Array.isArray(arr)){
        return true;
    }else{
        return false;
    }
}

function isFunction(callback){
    if(typeof callback === "function"){
        return true;
    }else{
        return false;
    }
}

let arr = [1, 2, 3];
let a = copyArr(arr, mutationValue);
console.log(a);