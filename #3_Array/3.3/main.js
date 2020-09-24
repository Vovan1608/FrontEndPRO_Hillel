/*
Создать массив А размерностью n. Заполнить случайными числами 
в любом диапазоне.

    - Найти максимальное число и минимальное число.
    - Элементы массива между min -- max записать в массив B.
*/

var a = [];
var n = 9;
a.length = n;

for (var i = 0; i < n; i++){
    a[i] = Math.round(Math.random() * 10);
}

var max = a[0];
var min = a[0];
var maxIndex = 0;
var minIndex = 0;

for(var i = 1; i < n; i++){
    if(max <= a[i]){
        max = a[i];
        maxIndex = i;
    }
    if(min >= a[i]){
        min = a[i];
        minIndex = i;
    }
}

var b = [];
b.length = Math.abs(minIndex - maxIndex) - 1;
if(minIndex < maxIndex){
    for(var i = 0, bSize = b.length; i < bSize; i++){
        b[i] = a[minIndex + 1 + i];
    }
}else{
    for(var i = 0, bSize = b.length; i < bSize; i++){
        b[i] = a[maxIndex + 1 + i];
    }
}



console.log(a);
console.log(min, max);
console.log(b)