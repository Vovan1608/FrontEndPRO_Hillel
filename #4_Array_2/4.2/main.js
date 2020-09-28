'use strict'

/*
Создать двумерный массив, заполненный случайными числами в любом диапазоне.
1.Найти колонку, где сумма элементов наименьшая.
2.Найти колонку, где сумма элементов найбольшая.
*/

let arr = [];

arr.length = Math.round(Math.random() * 4);

let sumColumn = 0;

for (let i = 0, arrSize = arr.length; i < arrSize; i++){
    
    arr[i] = new Array(arrSize);
    
    for(let j = 0; j < arrSize; j++){
        arr[i][j] = Math.round(Math.random() * 10);
    }

    sumColumn += arr[i][0];

}

console.log(arr);
console.log(sumColumn)

