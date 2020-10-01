"use strict";

/*
написать функцию, которая примет как аргумент(параметр) два массива и 
сравнить суммы всех ЧИСЛОВЫХ элементов. Тот массив, сумма которого 
большая - должен вернутся функцией.
*/

function isNumber(value){
    if(value <= 0 || isNaN(value) || value === null || value === ""){
        return true;
    }else{
        return false;
    }
}

function getSumElemArray(arr){
    
    let sum = 0;
    for (let i = 0, arrSize = arr.length; i < arrSize; i++){
        
        if( !isNumber(arr[i]) ){
            sum += arr[i]
        }
    }
    return sum;
}

function checkArrs (arr1, arr2) {

    let check = ( getSumElemArray(arr1) > getSumElemArray(arr2) ) ? arr1 : arr2;

    return check;
}

let arr1 = [1, "ghjk", 2, null, undefined, 3, 1];
let arr2 = [4, 5, "rty", 1, true];

let c = checkArrs(arr1, arr2);
console.log(c);
