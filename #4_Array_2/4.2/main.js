// 'use strict'

/*
Создать двумерный массив, заполненный случайными числами в любом диапазоне.
1.Найти колонку, где сумма элементов наименьшая.
2.Найти колонку, где сумма элементов найбольшая.
*/

var arr = [];
arr.length = 3;
var sumArr = [];


for (var i = 0, arrSize = arr.length; i < arrSize; i++){
    
    arr[i] = new Array(arrSize);
    
    for(var j = 0; j < arrSize; j++){
        
        arr[i][j] = Math.round(Math.random() * 50);
    }
}

var min = 0;
var max = 0;
var minI = 0;
var maxI = 0;

for(var i = 0; i < arr.length; i++){
    
    for(var j = 0, sum = 0; j < arr.length; j++){
        sum += arr[j][i];
    }
    if(i === 0){
        min = sum;
        max = sum;
    }

    if(min > sum){
        min = sum;
        minI = i;
    }

    if(max < sum){
        max = sum;
        maxI = i;
    }
}



console.log(arr);
console.log(`Наименьшая сумма єлементов равна ${min}  и находится в столбце ${minI + 1}`);
console.log(`Наибольшая сумма єлементов равна ${max}  и находится в столбце ${maxI + 1}`);