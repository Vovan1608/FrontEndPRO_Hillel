"use strict";

/*
Реализовать функцию copy(list) по копированию массива
*/

function copyArr(arr){
    
    if(isArray(arr)){
        return arr.map( (index) => index);
    }else{
        throw new Error("array is not array");
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