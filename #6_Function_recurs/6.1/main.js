"use strict";

/*
Вывести в консоль последовательность чисел в обратном порядке,
используя рекурсию.
*/

function callBack(n){

    n == 1 ? n : callBack (n - 1);
    console.log(n)
}

callBack(5);

