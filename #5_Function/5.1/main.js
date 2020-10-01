"use strict";

/*
Написать функцию заполнения массива. Имя произвольное.
*/

function isCoorectArrLength(value){
    if(value <= 0 || isNaN(value) || value === null || value === "" || typeof value === "undefined"){
        return false;
    }else{
        return true;
    }
}

function fillingArrey(arrSize){
    
    if( isCoorectArrLength(arrSize)){
        let arr = new Array (arrSize);
        
        for(let i = 0; i < arrSize; i++){
            arr[i] = prompt("Enter data.", "");
        }
        return arr;
    }else{
        return "arrSize is not a correct";
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

И в консоли     typeof dgh === "undefined"
                true

Если пробовать
let dgh;
console.log(fillingArrey(dgh)), то проверка срабатывает;
*/