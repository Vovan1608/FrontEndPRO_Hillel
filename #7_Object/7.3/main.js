"use strict";

/*
Адаптировать функцию assignObjects() под неопределенное 
количество объектов. assignObjects(obj1, obj2, ....., objn);
*/

function assignObjects(){
    
    let data = Object.assign({}, arguments[0]);
    
    for(let i = 1, size = arguments.length; i < size; i++){
        Object.assign(data, arguments[i]); 
    }
    return data;
}

let res = assignObjects({ x: 10, y: 20 }, { z: 30 }, {s: 12, t: 25}); //-> { x: 10, y: 20, z: 30, s: 12, t: 25 }
console.log(res);

let res2 = assignObjects({ x: 10 }, { y: 20, z: 30 }, {y: 12, z: 25}); // - > { x: 10, y: 12, z: 25 }
console.log(res2);