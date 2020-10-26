// "use strict";

/*
в обьекте data существует метод addRecord, который аргументами получает любой набор объектов. 
Метод addRecord добавляет все свойства переданных объектов в data.

В метод addRecord добавляется последний необязательный аргумент flag, который указывает приоритет 
присвоения свойств с одинаковым названием. Если true - берется свойство из первоначального объекта 
this, если false - берется свойство из arguments. По умолчанию flag = false;
*/

var data = {
  addRecord: function(flag = false) {
    var i = 0,
        size = (typeof arguments[arguments.length - 1] === "object") ? arguments.length : arguments.length - 1;
  
    for(i; i < size; i += 1) {

      if(size === arguments.length) {
        Object.assign(this, arg[i]);
      } else {
        
        for(var key in arguments[i]) {
          flag = (key in this) ? true : false;
          
          if(!flag) {
            this[key] = arguments[i][key];
          }
        }
      }
    }
  },
  p: 600,
  str: 'hello',
  y: -50
};

var flag;

data.addRecord({x: 10}, {y: 20}, {z: 30, x: 50}, flag);
data.x // 10
data.y // -50
data.z // 30
data.p // 600
data.str // 'hello'
console.log(data);