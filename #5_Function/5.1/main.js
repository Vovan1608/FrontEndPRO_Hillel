"use strict";

/*
Написать функцию заполнения массива. Имя произвольное.
*/

function fillingArrey(arrSize){
    
    if( isCoorectArrLength(arrSize)){
        let arr = new Array (arrSize);
        
        for(let i = 0; i < arrSize; i++){
            arr[i] = prompt("Enter data.", "");
        }
        return arr;
    }else{
        throw new Error("arrSize is not a correct");
    }
}

function isCoorectArrLength(val){
    if(val <= 0 || isNaN(val) || val === null || val === "" || typeof val === "undefined"){
        return false;
    }else{
        return true;
    }
}

let arr = fillingArrey(2);
console.log(arr); // заполняем массив из двух элементов

let dgh;
console.log(fillingArrey(dgh));// arrSize is not a correct


/*
А вот если пробовать console.log( fillingArrey( dgh ) ) - ПАРАМЕТР без кавычек,
то выдает ошибку Uncaught ReferenceError: dgh is not defined
хотя проверка typeof value === "undefined" есть.

Да потому, что dgh НЕ СУЩЕСТВУЕТ В ПАМЯТИ, а с let dgh- хотябы память выделилась под 
переменную и она undefined.
*/