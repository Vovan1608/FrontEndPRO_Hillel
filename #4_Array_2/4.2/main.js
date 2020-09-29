'use strict'

/*
Создать двумерный массив, заполненный случайными числами в любом диапазоне.
1.Найти колонку, где сумма элементов наименьшая.
2.Найти колонку, где сумма элементов найбольшая.
*/

let arr = [];
arr.length = 4;
let sumColumn = [];

for (let i = 0, sizeSumCol = arr.length; i < sizeSumCol; i++) {
	sumColumn[i] = 0;
}

for (let i = 0, arrSize = arr.length; i < arrSize; i++){
    
    arr[i] = new Array(arrSize);
    
    for(let j = 0; j < arrSize; j++){
        
        arr[i][j] = Math.round(Math.random() * 10);
        
        sumColumn[j] += arr[i][j];   
    }
}

console.log(arr);

console.log(sumColumn);