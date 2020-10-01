'use strict'

/*
Создать двумерный массив, заполненный случайными числами в любом диапазоне.
1.Найти колонку, где сумма элементов наименьшая.
2.Найти колонку, где сумма элементов найбольшая.
*/

let arr = [];
arr.length = 3;
let sum = 0;
let min = 0;
let max = 0;

for (let i = 0, arrSize = arr.length; i < arrSize; i++){
    
    arr[i] = new Array(arrSize);
    
    for(let j = 0; j < arrSize; j++){
        
        arr[i][j] = Math.round(Math.random() * 10);
        
        if(j === 0){
            sum += arr[i][j];
            min = sum;
            max = sum;
            continue;
        }

    }
}

console.log(arr);
console.log(sum);


// let min = sumColumn.indexOf(Math.min(...sumColumn));
// let max = sumColumn.indexOf(Math.max(...sumColumn));

// console.log(`Наименьшая сумма элементов находится в колонке ${min + 1}`);
// console.log(`Наибольшая сумма элементов находится в колонке ${max + 1}`);