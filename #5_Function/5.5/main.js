"use strict";

/*
Создать функцию, которая убирает из строки все символы, 
которые мы передали вторым аргументом.

'func("hello world", ['l', 'd'])' вернет нам "heo wor"
*/

function deleteValue(str, arr){

    let temp = str.split("");
    for (let i = temp.length - 1 ; i > 0; i--){
        for (let j = 0, arrSize = arr.length; j < arrSize; j++){
            if(temp[i] === arr[j]){
                temp.splice(i, 1);
            }
        }
    }
    return temp.join("");
}

let d = deleteValue("hello world", ['l', 'd']); // вернет нам "heo wor"
console.log(d)