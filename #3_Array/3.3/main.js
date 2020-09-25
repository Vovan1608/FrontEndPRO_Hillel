/*
Создать массив А размерностью n. Заполнить случайными числами 
в любом диапазоне.

    - Найти максимальное число и минимальное число.
    - Элементы массива между min -- max записать в массив B.
*/

var a = [];
var n = 9;

for (var i = 0; i < n; i++){
    a[i] = Math.round( Math.random() * 10 );
}

console.log(a);

var max = Math.max( ...a );
var min = Math.min( ...a );

console.log( min, max );

minIndex = a.lastIndexOf( min, a.length - 1 );
maxIndex = a.lastIndexOf( max, a.length - 1 );

if( minIndex > maxIndex ){
    var temp = minIndex;
    minIndex = maxIndex;
    maxIndex = temp;
}

var b = a.slice( minIndex + 1, maxIndex );

console.log(b);