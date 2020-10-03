"use strict";

/*
написать функцию, которая примет как аргумент(параметр) два массива и 
сравнить суммы всех ЧИСЛОВЫХ элементов. Тот массив, сумма которого 
большая - должен вернутся функцией.
*/

function checkArrs (arr1, arr2) {

    if(isArray(arr1) && isArray(arr2)){
        return ( getSumElemArray(arr1) > getSumElemArray(arr2) ) ? arr1 : arr2;
    }else{
        return "incorrect arr"
    }
}

function isNumber(value){
    if(isNaN(value) || value === "" || typeof value === "boolean" || typeof value === "string"){
        return false;
    }else{
        return true;
    }
}

function getSumElemArray(arr){
    
    // 1-st way
    let sum = arr.reduce( (sum, next) => {
        if( isNumber( next) ){
            sum += next;
        }
        return sum;
    }, 0);

    // 2-nd way
    // for (let i = 0, arrSize = arr.length; i < arrSize; i++){
        
    //     if( isNumber(arr[i]) ){
    //         sum += arr[i]
    //     }
    // }
    return sum;
}

function isArray(arr){
    if(Array.isArray(arr)){
        return true;
    }else{
        return false;
    }
}

let arr1 = [1, "1ghjk", 2, null, undefined, 3, 1];
let arr2 = [4, 5, "rty", 1, true, "", NaN, " "];

let c = checkArrs(arr1, arr2);
console.log(c); // [4, 5, "rty", 1, true, "", NaN, " "]