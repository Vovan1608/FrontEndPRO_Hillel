'use strict';

/*
В каждом объекте посчитать сумму свойств и перемножить значения объектов
*/

let obj = [
    {a: 2, b: 2},        // a + b * ->
    {a: 20, b: 20},      // a + b * ->
    {a: 200, b: 200}     // a + b
];

let res = obj.reduce( (accum, next) => {
    return accum * (next.a + next.b); 
}, 1)

console.log(res);