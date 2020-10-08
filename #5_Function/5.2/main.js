"use strict";

/*
написать функцию, которая примет как аргумент(параметр) два массива и 
сравнить суммы всех ЧИСЛОВЫХ элементов. Тот массив, сумма которого 
большая - должен вернутся функцией.
*/

function checkArrs (arr1, arr2) {

    // let arrForCheck =  getSumElemArray(arr1, arr2);

    return ( getSumElemArray(arr1, arr2)[0] > getSumElemArray(arr1, arr2)[1] ) ? arr1 : arr2;
}

function isNumber(value){
    if(isNaN(value) || value === "" || typeof value === "boolean" || typeof value === "string"){
        return false;
    }else{
        return true;
    }
}

function getSumElemArray(arr1, arr2){
    
    if(isArray(arr1) && isArray(arr2)){
        let arrSize = ( arr1.length > arr2.length ) ? arr1.length : arr2.length;
        
        let sumElemArr1 = 0; 
        let sumElemArr2 = 0;
        
        for (let i = 0; i < arrSize; i++){
            
            if( isNumber(arr1[i]) ){
                sumElemArr1 += arr1[i]
            }

            if(isNumber(arr2[i])){
                sumElemArr2 += arr2[i];
            }
        }
        return [sumElemArr1, sumElemArr2];
    }else{

        throw new Error("incorrect arr");
    }
    
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