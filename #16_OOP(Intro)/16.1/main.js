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
  if(isNumber(obj.x) && isNumber(obj.y) && isZnak(obj.znak) ) {
    switch(obj.znak) {
      case "+":
        return obj.x + obj.y;
      case "-": 
        return obj.x - obj.y;
      case "*":
        return obj.x * obj.y;
      case "/":
        if( obj.y !== 0) {
          return obj.x / obj.y;
        } else {
          throw new Error("incorrect value y");
        }
      case "%":
        return obj.x % obj.y;
    }
    
    // return eval(x + znak + y); // or `${x} ${znak} ${y}` 
  } else {
    throw new Error("incorrect value");
  }
}

function isNumber(val) {
  if(isNaN(val) || val === "" || typeof val === "boolean" || typeof val === "string" || val === null){
      return false;
  }else{
      return true;
  }
}

function isZnak(znak) {
  if(["+", "-", "*", "/", "%"].includes(znak)) {
      return true;
  }else{
      return false;
  }
}

var p = new SuperMath();

// Добавить к экземпляру метод check(obj)
p.check = function(obj) {
  // проверка на object
  if(typeof obj === "object" && obj !== null) {
    // подтвердить у пользователя хочет ли он произвести действие znak c Х и У.
    return confirm(`Хотите ли Вы произвести действие ${obj.znak} c ${obj.x} и ${obj.y}?`) ? this.doMath(obj) : 
      this.input();
  }
}

var obj = {
  x: 12,
  y: 3,
  znak: "-"
};

console.log(p.check(obj));