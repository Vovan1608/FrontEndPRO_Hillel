"use strict";

/*
Создать объект с такой структурой: obj = 
{ a: 10, b: 12, c: { f: 13, g: { m: 20} } } 
Написать функцию convert(obj), он получает 
аргументом obj. Функция должна вернуть новый 
объект: newObj = { a: 10, b: 12, f: 13, m: 20 }
*/

function convert(obj, newObj) {
    
    // for(let key in obj){
        
    //     if(typeof obj[key] === "object") {
    //         convert(obj[key], newObj);
    //     } else {
    //         newObj[key] = obj[key];
    //     }
    // }
    
    // Object.entries - позволяет гарантированно перебрать объект
    // for(let key in obj) - переберет еще и prototype 
    Object.entries(obj).forEach( ([key, element]) => {
        
        if(isObject(element)) {
            convert(element, newObj);
        } else {
            newObj[key] = element;
        }
    });
    return newObj;
}

function isObject(object) {
    if(typeof object === "object" && object !== null && !Array.isArray(object)) {
        return true;
    }
}

let any = { 
    a: 10, 
    b: 12, 
    c: { 
        f: 13, 
        g: { 
            m: 20
        } 
    } 
};
let newObj = {};

let res = convert(any, newObj);
console.log(res);