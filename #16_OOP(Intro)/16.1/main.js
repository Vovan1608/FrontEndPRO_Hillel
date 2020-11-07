// "use strict";

/*
1.  Создать класс SuperMath. 
2.  Добавить к экземпляру метод - check(obj), параметр obj которого 
    имеет свойства X, Y, znak. 
3.  Метод должен подтвердить у пользователя хочет ли он произвести 
    действие znak c Х и У. 
  3.1. Если - да, сделать математическое действие znak(которое описано в прототипе), 
  3.2. иначе - запросить ввод новых данных через метод input() класса SuperMath. 

Пример обекта: obj = { X:12, Y:3, znak: “/”}, возможные 
варианты znak=> + - / * %. 
При вводе znak нужно сделать проверку корректности ввода на возможные 
математические действия

p = new SuperMath();
p.check(obj); // --> no p.input() -> 3 prompt -> считает
*/

// Создать класс SuperMath.
function SuperMath() {
  
}

// метод input() класса SuperMath
SuperMath.prototype.input = function() {
  var newObj = {
    x: Number(prompt("Введите Х", "12")),
    y: Number(prompt("Введите Х", "3")),
    znak: prompt("Введите znak", "/")
  }
  return this.doMath(newObj);
}

//сделать математическое действие znak(которое описано в прототипе)
SuperMath.prototype.doMath = function(obj) {
  // деструктуризация объекта
  var {x, y, znak} = obj;

  if(isNumber(x) && isNumber(y) && isZnak(znak) ) {

    switch(znak) {
      case "+":
        return x + y;
      case "-": 
        return x - y;
      case "*":
        return x * y;
      case "/":
        if( y !== 0) {
          return x / y;
        } else {
          throw new Error("incorrect value y");
        }
      case "%":
        return x % y;
    }
  } else {
    throw new Error("incorrect value");
  }
}

// вспомогательные функции для проверок
function isNumber(val) {
  return (isNaN(val) || val === "" || typeof val === "boolean" || typeof val === "string" || val === null) ? false : true;
}

function isZnak(znak) {
  return (["+", "-", "*", "/", "%"].includes(znak)) ? true : false;
}

function isObject(obj) {
  return (typeof obj === "object" || obj !== null || !Array.isArray(obj)) ? true : false;
}

var p = new SuperMath();

// Добавить к экземпляру метод check(obj)
p.check = function(obj) {
  // проверка на object
  if(isObject(obj)) {
    // подтвердить у пользователя хочет ли он произвести действие znak c Х и У.
    return confirm(`Хотите ли Вы произвести действие  "${obj.znak}" c ${obj.x} и ${obj.y}?`) ? this.doMath(obj) : this.input();
  }
}

var obj = {
  x: 12,
  y: 3,
  znak: "-"
};

console.log(p.check(obj));