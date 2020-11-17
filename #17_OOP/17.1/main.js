// "use strict";

/*
Создать игру:
Есть поле field, является экземпляром класса Field(width, height), 
предпочитаемые размеры 10 на 10.

Есть герой person, класс Person(name, XPosition, YPosition)

Поле являет собой двумерный массив, который состоит из нулей.
Там где находится наш герой - стоит 1.

Field имеет такие методы:
    * renderField() - выводит поле в document, устанавливает
      разделители `<hr />` сверху и снизу
    * clearField() - убирает героя с доски
    * changeSize(newX, newY) - меняет размер поля

Person имеет такие методы:
    * start() - герой появляется на доске
    * go(direction, step) - движение по переданом параметру
      (direction может быть: 'left', 'right', 'top', 'bottom') и
      с шагом step
    * resetPosition() - перенос в начальную позицию
Нужно самим решить какие методы получают аргументы, какие нет.
Организовывать код можно любым образом.

Вызов методов происходит из консоли.

Суть такая:

field.renderField();
person.start();
person.go('left', 2);
person.go('top', 1);
field.renderField();
последовательно вызываются команды, renderField - отображает новую
доску в document. В результате мы должны увидеть 2 нарисованных
состояния поля.
*/

// возвращает объект с заданной шириной и высотой (будующие размеры поля)
function Field(width = 10, height = 10) {
  if (isPositiveInteger(width) && isPositiveInteger(height)) {
    this._width = width;
    this._height = height;
  }
}
// рисует поле(принимает два параметра - ширину и высоту поля, в
// document.write отрисовывает поле, ничего не возвращает)
// логика должна быть следующая:
//  - если в функцию параметры не передали, то параметры беруться из объекта new Field()
//  - если параметры передали, то поле строится по указанным параметрам
Field.prototype.renderField = function (...args) {
  document.write("<hr/>");
  // если передано два аргумента (для метода changeSize())
  if (args.length === 2 && isPositiveInteger(args[0]) && isPositiveInteger(args[1])) {
    width = args[0];
    height = args[1];
  } else {
    if (Array.isArray(args[0])) { // если переданный аргумент массив, значит рисуем героя по координатам
      var x = args[0][1],
        y = args[0][0];
    }
    // из объекта new Field()
    width = this._width;
    height = this._height;
  }

  for (var i = 0; i < height; i += 1) {

    for (var j = 0; j < width; j += 1) {

      if (i === x && j === y) {
        document.writeln("1");
      } else {
        document.writeln("0");
      }
    }
    document.write("<br/>");
  }
  document.write("<hr/>");
}
// функция вызывает метод renderField() без параметров (чистое поле)
Field.prototype.clearField = function () {
  this.renderField();
}
// функция вызывает метод renderField() с двумя пар-ми пр которым рисуется новое поле
Field.prototype.changeSize = function (newX, newY) {
  this.renderField(newX, newY);
}
// возвращает объект new Person
function Person(name, XPosition, YPosition) {
  // наследование св-в родителя
  Field.call(this);
  this.name = name;
  // проверка,что герой не выпадает из пределов поля
  if (XPosition <= this._width) {
    this.XPosition = XPosition;
  }

  if (YPosition <= this._height) {
    this.YPosition = YPosition;
  }
}
//наследуюсь от класса Field
Person.prototype = Object.create(Field.prototype);
Person.prototype.constructor = Person;
// функция возвращает массив стартовых координат, которые берутся из new Person()
// (нужны для отрисовки героя на доске)
Person.prototype.start = function () {
  return [this.XPosition, this.YPosition];
}
// функция принимает два параметра(стринг и число) и возвращает
// массив координат, куда переместился герой
Person.prototype.go = function (direction, step) {
  if (direction) {
    // массив координат старта
    var coord = this.start(),
      x = coord[0],
      y = coord[1];
    switch (direction) {
      case "right":
        x = (x + step > this._width) ? x : x + step;
        return [x, y];
      case "left":
        x = (x - step < 0) ? x : x - step;
        return [x, y];
      case "top":
        y = (y - step < 0) ? y : y - step;
        return [x, y];
      case "bottom":
        y = (y + step > this._height) ? y : y + step;
        return [x, y];
    }
  }
}
// функция устанавливает стартовые координаты
Person.prototype.resetPosition = function () {
  return this.start();
}
// Вспом. функции
function isDirecton(direction) {
  return ["left", "right", "top", "bottom"].includes(direction) ? true : false;
}

function isPositiveInteger(num) {
  if (isNumber(num)) {
    return (num > 0 && Number.isInteger(num)) ? true : false;
  }
}

function isNumber(val) {
  return (isNaN(val) || val === "" || typeof val === "boolean" || typeof val === "string" || val === null) ? false : true;
}

var field = new Field(10, 10);

var person = new Person("Bob", 5, 3);
field.renderField()
field.renderField(person.start());
field.renderField(person.go("top", 2))