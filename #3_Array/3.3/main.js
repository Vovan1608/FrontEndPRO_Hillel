/*
Создать массив А размерностью n. Заполнить случайными числами 
в любом диапазоне.

    - Найти максимальное число и минимальное число.
    - Элементы массива между min -- max записать в массив B.
*/

var a = [];
var n = 9;

for (var i = 0; i < n; i++){
    a.push( Math.round( Math.random() * 10 ) );
}

console.log(a);

var minIndex = a.lastIndexOf( Math.min( ...a ), a.length - 1 );
var maxIndex = a.lastIndexOf( Math.max( ...a ), a.length - 1 );

if( minIndex > maxIndex ){
    [minIndex, maxIndex] = [maxIndex, minIndex];
}

var b = a.slice( minIndex + 1, maxIndex );

console.log(b);