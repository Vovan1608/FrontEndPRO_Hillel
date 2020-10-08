"use strict";

/*
Создать функцию, которая убирает из строки все символы, 
которые мы передали вторым аргументом.

'func("hello world", ['l', 'd'])' вернет нам "heo wor"
*/

function deleteChar(str, arr){

    if(isString(str) && isArray(arr)){
        
        let temp = str.split("");
    
        for (let i = temp.length - 1; i >= 0; i--){
            
            if( arr.includes(temp[i])){
                temp.splice(i, 1);
            }
        }
        return temp.join("");
    }else{
        throw new Error("incorrect value");
    }
}

function isString(str){
    if(typeof str === "string"){
        return true 
    }else{
        return false
    }
}

function isArray(arr){
    if(Array.isArray(arr)){
        return true;
    }else{
        return false;
    }
}

let d = deleteChar("hello world", ['l', 'd']); // вернет нам "heo wor"
console.log(d)