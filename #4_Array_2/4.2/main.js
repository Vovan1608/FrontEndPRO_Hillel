// 'use strict'
/*
Создать двумерный массив, заполненный случайными числами в любом диапазоне.
1.Найти колонку, где сумма элементов наименьшая.
2.Найти колонку, где сумма элементов найбольшая.
*/

// 1 СПОСОБ -  при помощи 4-х циклов
var arr = [];
arr.length = 3;

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
    
    for(var j = 0, sum = 0; j < arr.length; j++){ // sum = 0 - обнуление на каждой итерации 
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
console.log(`Наименьшая сумма элементов равна ${min}  и находится в столбце ${minI + 1}`);
console.log(`Наибольшая сумма элементов равна ${max}  и находится в столбце ${maxI + 1}`);


// 2 СПОСОБ - при помощи 2-х циклов и доп. массива
var arrey = [];
arrey.length = 3;
var sumCol = [];

for(var i = 0, arreySize = arrey.length; i < arreySize; i++){
    
    arrey[i] = new Array (arreySize);
    
    for (var j = 0; j < arreySize; j++){
        
        arrey[i][j] = Math.round(Math.random() * 10);

        if(i === 0){
            sumCol[j] = arrey[i][j]; // доп. массив
            continue;
        }
        sumCol[j] += arrey[i][j];
    }
}

console.log(arrey)
console.log(sumCol);

var minIndex = sumCol.indexOf(Math.min(...sumCol));
var maxIndex = sumCol.indexOf(Math.max(...sumCol));

console.log(`Наименьшая сумма элементов равна ${Math.min(...sumCol)}  и находится в столбце ${minIndex + 1}`);
console.log(`Наибольшая сумма элементов равна ${Math.max(...sumCol)}  и находится в столбце ${maxIndex + 1}`);