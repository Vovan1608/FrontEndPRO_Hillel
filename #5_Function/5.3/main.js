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

function isString(znak){
    if(znak === "+" ||  "-" || "*" || "/" || "%" || "^"){
        return true;
    }else{
        return false;
    }
}

function doMath (x, znak, y){
    if(isNumber(x) && isNumber(y) && isString(znak)){

    }
}

let zn = isString("3");
console.log(zn)

/*
--------------------еоды UTF-8 для +, -, * и т.д.
*/