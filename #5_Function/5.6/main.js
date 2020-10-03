"use strict";

/*
Написать функицию которая вернет произведение переданных 
фактических аргументов.
*/

function mul (){
    
    // 1-st way
    // for (var res = 1, i = 0; i < arguments.length; i++) {
    //     res *= arguments[i];
    // }
    
    // 2-nd way
    let res = 1;
    
    for(let i of arguments){
        res *= i;
    }

    return res;
}

let res = mul (3, 4, 5, 10);
console.log(res);
