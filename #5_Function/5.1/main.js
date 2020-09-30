"use strict";

/*
Написать функцию заполнения массива. Имя произвольное.
*/

function isNumber(value){
    if(value <= 0 || isNaN(value) || value === null || value === ""){
        return true;
    }else{
        return false;
    }
}

function fillingArray(arrSize){
    
    if(isNumber(arrSize)){
        return "arrSize is not a correct";
    }else{
        let arr = new Array (arrSize);
    
        for(let i = 0; i < arrSize; i++){
            arr[i] = prompt("Enter data.", "");
        }
        return arr;
    }
}

console.log(fillingArray(2));