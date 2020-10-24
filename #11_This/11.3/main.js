// "use strict";

/*
в обьекте data существует метод addRecord, который аргументами получает любой набор объектов. Метод addRecord добавляет все свойства переданных объектов в data.
*/

var data = {
  addRecord: function(...arg) {
    
    //? 2-nd way
    arg.reduce((acc, curent) => {
      Object.assign(acc, curent);
      
      return acc;
    }, data)
    
    //? 1-st way
    // var i = 0,
    //     size = arg.length;
    
    // for(i; i < size; i += 1) {
    //   Object.assign(data, arg[i]);
    // }
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