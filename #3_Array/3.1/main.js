/*
Заполнить массив А случайными числами (диазпазон на ваше усмотрение). 
Заменить каждый элемент массива с нечетным индексом на ноль.
*/

var a = [];
a.length = Math.round(Math.random() * 10);

for (var i = 0, aSize = a.length; i < aSize; i++){
    if( (i % 2) != 0 ){
        a[i] = 0; 
    }else{
        a[i] = Math.round(Math.random() * 100);
    }
}

console.log(a);