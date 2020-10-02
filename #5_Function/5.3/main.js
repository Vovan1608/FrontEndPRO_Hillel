﻿"use strict";

/*
Написать функцию doMath(x, znak, y), которая получает 
3 аргумента: числа x и y, строку znak. В переменной знак 
может быть: +, -, *, /, %, ^. Вывести результат математического 
действия, указанного в переменной znak.
*/

function doMath (x, znak, y){
    
    if( isNumber(x) && isNumber(y) && isZnak(znak)){
        return eval(`${x} ${znak} ${y}`);
    }else{
        return "incorrect value";
    }
}

function isNumber(val){
    if(isNaN(val) || val === "" || typeof val === "boolean" || typeof val === "string" || val === null){
        return false;
    }else{
        return true;
    }
}

function isZnak(znak){

    switch(znak){
        case "+":
        case "-":
        case "*":
        case "/":
        case "%":
        case "^":
            return true;
        default:
            return false;
    }
}

let s = doMath(2, "+", 5); // 7
console.log(s);

let minus = doMath(9, "-", 7); // 2
console.log(minus);