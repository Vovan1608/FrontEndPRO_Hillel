"use strict";

/*
Написать функцию assignObjects(obj1, obj2), которая принимает 
аргументами 2 обьекта и возвращает новый, который состоит из 
свойство обоих обьектов (склеить). Если свойство повторяется, 
то взять значение второго обьекта

assignObjects({ x: 10, y: 20 }, { z: 30 }) -> { x:10, y:20, z: 30 }

assignObjects({ x: 10 }, { x: 20, y: 30 }) - > { x:20, y: 30 }
*/

function assignObjects(obj1, obj2){
    
    return Object.assign(obj1, obj2);
}

let res = assignObjects({ x: 10, y: 20 }, { z: 30 }); //-> { x:10, y:20, z: 30 }
console.log(res);

let res2 = assignObjects({ x: 10 }, { x: 20, y: 30 }); // - > { x:20, y: 30 }
console.log(res2);