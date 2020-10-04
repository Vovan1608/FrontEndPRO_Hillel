"use strict";

/*
Cоздать конвертер-функцию которая получает на вход 
массив вида: mass = [[1,2,3, [3.1]], 4, [5,6, [7, 8]]]; 
а на выходе получим переобразованый 
массив: [1,2,3,3.1,4,5,6,7,8]
*/



function mutationArray(arr){
    
    for(let i = 0; i < arr.length; i++){
        if(Array.isArray(arr[i])){
            mutationArray(arr[i]);
        }else{
            
            mutArray.push(arr[i]);
            console.log(arr[i]);
        }
    }
    return arr;
}


let mass = [[1,2,3, [3.1]], 4, [5,6, [7, 8]]];
let mutArr = [];
// mutationArray(mass)
console.log(mutationArray(mass))
// console.log(mutationArray(mass));