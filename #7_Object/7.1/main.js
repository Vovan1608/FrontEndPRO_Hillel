"use strict";

/*
Написать функцию convert(obj), он получает аргументом obj. 
Функция должна вернуть новый объект: newObj = { a: 10, b: 12, f: 13 }
*/

function convert(obj){
    
    return { a: 10, b: 12, f: 13 };
}

let any = {
    a: 456,
    v: 123,
    s: 1235

}

let res = convert(any);
console.log(res);