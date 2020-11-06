// "use strict";

/*
1.  Создать класс SuperMath. 
2.  Добавить к экземпляру метод - check(obj), параметр obj которого 
    имеет свойства X, Y, znak. 
3.  Метод должен подтвердить у пользователя хочет ли он произвести 
    действие znak c Х и У. 
  3.1. Если - да, сделать математическое действие znak(которое описано в прототипе), 3.2. иначе - запросить ввод новых данных через метод input() класса SuperMath. 

Пример обекта: obj = { X:12, Y:3, znak: “/”}, возможные 
варианты znak=> + - / * %. 
При вводе znak нужно сделать проверку 
корректности ввода на возможные математические действия

p = new SuperMath();
p.check(obj); // --> no p.input() -> 3 prompt -> считает
*/

// Создать класс SuperMath.
function SuperMath() {
  
}
// метод input() класса SuperMath
SuperMath.prototype.input = function() {

}

var p = new SuperMath();
// Добавить к экземпляру метод check(obj)
p.check = function(obj) {

}

var obj = {
  x: 12,
  y: 3,
  znak: "/"
}