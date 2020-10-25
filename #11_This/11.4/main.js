﻿// "use strict";

/*
в обьекте data существует метод addRecord, который аргументами получает любой набор объектов. Метод addRecord добавляет все свойства переданных объектов в data.

В метод addRecord добавляется последний необязательный аргумент flag, который указывает приоритет присвоения свойств с одинаковым названием. Если true - берется свойство из первоначального объекта this, если false - берется свойство из arguments. По умолчанию flag = false;
*/

var data = {
  addRecord: function(...arg) {
    var i = 0,
        size = (typeof arg[arg.length - 1] === "object") ? arg.length : arg.length - 1; 
  
    for(i; i < size; i += 1) {

      if(size === arg.length) {
        Object.assign(this, arg[i]);
      } else {
        for(var key in arg[i]){
          flag = (key in this) ? true : false;
          
          if(!flag) {
            this[key] = arg[i][key];
          }
        }
      }
    }
  },
  p: 600,
  str: 'hello',
  y: -50
};

data.addRecord({x: 10}, {y: 20}, {z: 30, x: 50}, flag = false);
data.x // 10
data.y // -50
data.z // 30
data.p // 600
data.str // 'hello'
console.log(data);