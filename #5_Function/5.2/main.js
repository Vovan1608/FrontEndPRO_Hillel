"use strict";

/*
написать функцию, которая примет как аргумент(параметр) два массива и 
сравнить суммы всех ЧИСЛОВЫХ элементов. Тот массив, сумма которого 
большая - должен вернутся функцией.
*/

function isNumber(value){
    if(isNaN(value) || value === "" || typeof value === "boolean" || typeof value === "string"){
        return false;
    }else{
        return true;
    }
}

function getSumElemArray(arr){
    
    let sum = 0;
    for (let i = 0, arrSize = arr.length; i < arrSize; i++){
        
        if( isNumber(arr[i]) ){
            sum += arr[i]
        }
    }
    return sum;
}

function checkArrs (arr1, arr2) {

    let check = ( getSumElemArray(arr1) > getSumElemArray(arr2) ) ? arr1 : arr2;

    return check;
}

let arr1 = [1, "1ghjk", 2, null, undefined, 3, 1];
let arr2 = [4, 5, "rty", 1, true, "", NaN, " "];

let c = checkArrs(arr1, arr2);
console.log(c);

console.log(getSumElemArray(arr1)); // 7
console.log(getSumElemArray(arr2));// 10
