// "use strict";

/*
в обьекте data существует метод addRecord, который аргументами получает любой набор объектов. Метод addRecord добавляет все свойства переданных объектов в data.

В метод addRecord добавляется последний необязательный аргумент flag, который указывает приоритет присвоения свойств с одинаковым названием. Если true - берется свойство из первоначального объекта this, если false - берется свойство из arguments. По умолчанию flag = false;
*/

var data = {
  addRecord: function(flag = false) {
    
    for(var key in data) {
      
      if(key) {
        flag = true;
      }
    }
    var i = 0,
        size = arguments.length - 1;
    
    for(i; i < size; i += 1) {
      if(key === false) {
        Object.assign(data, arguments[i]);
      }
    }
  },
  p: 600,
  str: 'hello',
  y: -50
}

data.addRecord({x: 10}, {y: 20}, {z: 30, x: 50});
data.x // 50
data.y // 20
data.z // 30
data.p // 600
data.str // 'hello'
console.log(data);