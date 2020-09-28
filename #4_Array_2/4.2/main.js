'use strict'

/*
Создать двумерный массив, заполненный случайными числами в любом диапазоне.
1.Найти колонку, где сумма элементов наименьшая.
2.Найти колонку, где сумма элементов найбольшая.
*/

let arr = [];
arr.length = 3;

let sumColumn = 0;
let sumColumnMin = 0;
let sumColumnMax = 0;
let count = 0;

for (let i = 0, arrSize = arr.length; i < arrSize; i++){
    
    arr[i] = new Array(1);
    
    for(let j = 0; j <= 0; j++){
        
        arr[i][j] = Math.round(Math.random() * 10);

        sumColumn += arr[i][j]; 
    }
}

console.log(arr);
console.log(sumColumn);
console.log(sumColumnMin, sumColumnMax);