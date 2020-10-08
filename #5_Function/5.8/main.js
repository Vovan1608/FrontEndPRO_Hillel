"use strict";

/*
Написать функцию, которая получает 3 аргумента: два числа и функцию. 
Произвести вызов переданной функции с двумя аргументами числами. 
doFunction(2, 3, power); в ответе должны получить 8, как 2 в степени 3.
*/

function expNum(num, pow, callback){
    
    if(isFunction(callback)){
        return callback(num, pow);
    }else{
        throw new Error("callback is not a function");
    }
}

function elevate (num, pow) {

    if(isCorrectNumber(num) && isCorrectNumber(pow)){
        return (num ** pow);
    }else{
        throw new Error("incorrect value num or pow");
    }
}

function isCorrectNumber(value){
    if(isNaN(value) || value === null || value === "" || typeof value === "string"){
        return false;
    }else{
        return true;
    }
}

function isFunction(callback){
    if(typeof callback === "function"){
        return true;
    }else{
        return false;
    }
}

let e = expNum(2, 3, elevate);
console.log(e);
