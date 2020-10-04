"use strict";

/*
п.3 Написать функцию, которая получает 3 аргумента: два числа и функцию. 
Произвести вызов переданной функции с двумя аргументами числами. 
doFunction(2, 3, power); в ответе должны получить 8, как 2 в степени 3.

Из п.3 реализовать функции sum, div, mul, power

doFunction(16, -23, mul); // 16*(-23)
*/

function expNum(num, pow, callback){
    
    if(isFunction(callback)){
        return callback(num, pow);
    }else{
        return "callback is not a function";
    }
}

function getPow (num, pow) {

    if(isCorrectNumber(num) && isCorrectNumber(pow)){
        return (num ** pow);
    }else{
        return "incorrect value num or pow"
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

function getSum(a, b){
    if(isCorrectNumber(a) && isCorrectNumber(b)){
        return a + b;
    }else{
        return "incorrect value a or b"
    }
}

function getMul(a, b){
    if(isCorrectNumber(a) && isCorrectNumber(b)){
        return a * b;
    }else{
        return "incorrect value a or b"
    }
}

function getDiv(a, b){
    if(isCorrectNumber(a) && isCorrectNumber(b) && b !== 0){
        return a / b;
    }else{
        return "incorrect value a or b"
    }
}



let e = expNum(2, 0, getDiv);
console.log(e);
