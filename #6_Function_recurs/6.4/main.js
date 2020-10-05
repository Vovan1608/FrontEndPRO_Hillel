"use strict";

/*
Cоздать конвертер-функцию которая получает на вход 
массив вида: mass = [[1,2,3, [3.1]], 4, [5,6, [7, 8]]]; 
а на выходе получим переобразованый 
массив: [1,2,3,3.1,4,5,6,7,8]
*/

let mutArr = [];

function mutationArray(arr){
    
    for(let i = 0; i < arr.length; i++){
        if(Array.isArray(arr[i])){
            mutationArray(arr[i]);
        }else{
            mutArr.push(arr[i]);
        }
    }
    return mutArr;
}

let mass = [[1,2,3, [3.1]], 4, [5,6, [7, 8]]];
let changed = [];
console.log(mutationArray(mass, changed));