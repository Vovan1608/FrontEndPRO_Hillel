"use strict";

/*
Реализовать функцию copy(list) по копированию массива
*/

function copyArr(arr){
    
    if(isArray(arr)){
        return arr.map( (index) => index);
    }else{
        return "arr is not arrey"
    }
    
}

function isArray(arr){
    if(Array.isArray(arr)){
        return true;
    }else{
        return false;
    }
}

let arr = [1, 2, 3];
let a = copyArr(arr);
console.log(a);