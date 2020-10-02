"use strict";

/*
Написать функицию которая вернет произведение переданных 
фактических аргументов.
*/

function mul (){
    
    let res = 1;
    
    for(let i of arguments){
        res *= i;
    }

    return res;
}

let res = mul (3, 4, 5, 10);
console.log(res);
