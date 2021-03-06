﻿// "use strict";

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
function SuperMath(obj) {
  if( isObject(obj) ) {
    this.x = obj.x;
    this.y = obj.y;
    this.znak = obj.znak;
  }
}

// метод input() класса SuperMath
SuperMath.prototype.input = function() {
  return new SuperMath({
    x: Number(prompt("Введите Х", "12")),
    y: Number(prompt("Введите Y", "3")),
    znak: prompt("Введите znak", "/")
  }).doMath();
}

SuperMath.prototype.getSum = function() {
  return this.x + this.y
}

SuperMath.prototype.getDifference = function() {
  return this.x - this.y;
}

SuperMath.prototype.getMultiplication = function() {
  return this.x * this.y;
}

SuperMath.prototype.getDivision = function() {
  return (this.y !==  0) ? this.x / this.y : null;
}

SuperMath.prototype.getReminder = function() {
  return this.x % this.y;
}
//сделать математическое действие znak(которое описано в прототипе)
SuperMath.prototype.doMath = function() {
  if( isZnak(this.znak) ) {

    switch(this.znak) {
      case "+":
        return this.getSum();
      case "-":
        return this.getDifference();
      case "*":
        return this.getMultiplication();
      case "/":
        return this.getDivision();
      case "%":
        return this.getReminder();
    }
  }
}

SuperMath.prototype.check = function(obj) {
  if(isObject(obj)) {
    // подтвердить у пользователя хочет ли он произвести действие znak c Х и У.
    return confirm(`Хотите ли Вы произвести действие  "${obj.znak}" c ${obj.x} и ${obj.y}?`) ? this.doMath() : this.input();
  }
}

// вспомогательные функции для проверок

function isZnak(znak) {
  return (["+", "-", "*", "/", "%"].includes(znak)) ? true : false;
}

function isObject(obj) {
  return (typeof obj === "object" || obj !== null || !Array.isArray(obj)) ? true : false;
}

var p = new SuperMath({x: 12, y: 3, znak: "-"});

console.log(p.check(p));