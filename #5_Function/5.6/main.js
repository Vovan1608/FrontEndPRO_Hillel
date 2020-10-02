"use strict";

/*
Написать функицию которая вернет произведение переданных 
фактических аргументов.
*/

function mul (){
    
    let res = 1;
    
    for(let i = 0, size = arguments.length; i < size; i++){
        res *= arguments[i]; 
    }

    return res;
}

let res = mul (3, 4, 5, 1, 10);
console.log(res);
