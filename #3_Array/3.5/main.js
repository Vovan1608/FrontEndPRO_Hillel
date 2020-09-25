/*
Получить среднее арифметическое всех чётных элементов 
массива(заполненных случайными числами диапазон на ваше 
усмотрение), стоящих на нечётных местах.
*/

var a = [];
var n = 6;
var sum = 0;
var count = 0;

for(var i = 0; i < n; i++){
    a[i] = Math.round(Math.random() * 10);
    
    if( (i % 2) != 0 && (a[i] % 2) == 0 ){
        sum += a[i];
        count++;
    }
}

var average = Math.round(sum / count);

if(isNaN(average)){
    average = "В массиве нет чётных элементов, стоящих на нечётных местах."
}

console.log(a);
console.log(average);