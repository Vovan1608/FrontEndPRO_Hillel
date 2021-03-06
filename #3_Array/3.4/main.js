﻿/*
Перевернуть массив, т.е. если был массив 1, 5, 6, 2, 4 -- то мы 
должны получить 4, 2, 6, 5, 1. Нельзя использовать стандартный 
метод reverse(). Постарайтесь не использовать дополнительный массив.
*/

var a = [1, 5, 6, 2, 4];

// Итерируем по половине массива, т.к. надо поменять местами первый - 
//последний, второй - предпоследний и т.д.
for (var i = 0, aSize = a.length; i < aSize / 2; i++){

    [a[i], a[aSize - i - 1]] = [a[aSize - i - 1], a[i]]
}

console.log(a);