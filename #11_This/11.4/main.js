// "use strict";

/*
в обьекте data существует метод addRecord, который аргументами получает любой набор объектов. 
Метод addRecord добавляет все свойства переданных объектов в data.

В метод addRecord добавляется последний необязательный аргумент flag, который указывает приоритет 
присвоения свойств с одинаковым названием. Если true - берется свойство из первоначального объекта 
this, если false - берется свойство из arguments. По умолчанию flag = false;
*/

var data = {
  addRecord: function(...arg) {
    var i = 0,
        flag,
        size = (typeof arg[arg.length - 1] === "object") ? arg.length : arg.length - 1;
  
    for(i; i < size; i += 1) {
      flag = (size === arg.length) ? false : arg[arg.length - 1];
    
      for(var key in arg[i]) {
        // !ТУТ ДОРАБОТАТЬ В ОДНО УСЛОВИЕ КЛЮЧЬ НЕТ и ФЛАГ НЕТ
        this[key] = (key in this) ? ((flag === true) ?  this[key] : arg[i][key]) : arg[i][key];
      }
    }
  },
  p: 600,
  str: 'hello',
  y: -50
};

var flag;

data.addRecord({x: 10}, {y: 20}, {z: 30, x: 50}, true);
data.x // 10
data.y // -50
data.z // 30
data.p // 600
data.str // 'hello'
console.log(data);