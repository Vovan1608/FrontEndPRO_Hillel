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
    a.push( Math.round(Math.random() * 10) );
    
    if( (i % 2) !== 0 && (a[i] % 2) === 0 ){
        sum += a[i];
        count++;
    }
}

console.log(a);

var average = Math.round(sum / count);

if(count == 0){
    average = `В массиве [${a}] нет чётных элементов, стоящих на нечётных местах.`
}

console.log(average);