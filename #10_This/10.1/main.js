// "use strict";

/*
Задан обьект с любым количеством свойств. Одно из свойств является функция renderObject(), которая описана в window. При вызове метода obj.renderObject() -> выводит в document всё содержимое объекта, кроме самого метода renderObject

    obj => { x:10, y: 20 }
    obj.renderObject() -> x:10, y: 20
*/

var obj = {
  a: 12,
  rt: 5
}

obj.renderObject = function () {
  
  console.log(Object.values(obj));
}

obj.renderObject(); 