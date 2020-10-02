"use strict";

/*
Написать функцию doMath(x, znak, y), которая получает 
3 аргумента: числа x и y, строку znak. В переменной знак 
может быть: +, -, *, /, %, ^. Вывести результат математического 
действия, указанного в переменной znak.
*/

function isNumber(value){
    if(isNaN(value) || value === "" || typeof value === "boolean" || typeof value === "string" || value === null){
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
            break;
        default:
            return false;
    }
}

function doMath (x, znak, y){
    
    if( isNumber(x) && isNumber(y) && isZnak(znak)){
        return eval(`${x} ${znak} ${y}`);
    }else{
        return "uncorrect value";
    }
}

let s = doMath(2, "+", 5); // 7
console.log(s);

let minus = doMath(9, "-", 7); // 2
console.log(minus);