"use strict";

/*
Создать функцию, которая убирает из строки все символы, 
которые мы передали вторым аргументом.

'func("hello world", ['l', 'd'])' вернет нам "heo wor"
*/

function deleteChar(str, arr){

    if(isString(str) && isArray(arr)){
        
        let temp = str.split("");
    
        for (let i = temp.length; i >= 0; i--){
            
            for (let j = 0, arrSize = arr.length; j < arrSize; j++){
                
                if(temp[i] === arr[j]){
                    temp.splice(i, 1);
                }
            }
        }
        return temp.join("");
    }else{
        return "incorrect value"
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
    if(arr.constructor === Array){
        return true;
    }else{
        return false;
    }
}

let d = deleteChar("hello world", ['l', 'd']); // вернет нам "heo wor"
console.log(d)