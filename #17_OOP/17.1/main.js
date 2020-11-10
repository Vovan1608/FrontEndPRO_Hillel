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

function Field(width, height) {
  // проверка на правильные значения
  if( isPositiveInteger(width) && isPositiveInteger(height) ){
    this._width = width;
    this._height = height;
  }
}

Field.prototype.renderField = function(width, height) {
  document.write("<hr/>");
  // если передано два аргумента
  if(arguments.length === 2) {
    // и они положительные целые, то это и есть ширина и высота(для метода changeSize())
    if( isPositiveInteger(width) && isPositiveInteger(height) ) {
      width = width;
      height = height;
    }
  } else if(arguments.length === 1) {
    // если переданный аргумент массив, значит рисуем героя по координатам
    if( Array.isArray(arguments[0]) ) {
      var x = arguments[0][1],
          y = arguments[0][0];
      // берем переданные в конструктор значения
      width = this._width;
      height = this._height;
    }
    // если ничего не передали, рисуем пустое поле
  } else {
    // берем переданные в конструктор значения
    width = this._width,
    height = this._height;
  }

  for(var i = 0; i < height; i += 1) {
    
    for(var j = 0; j < width; j += 1) {
      
      if(i === x && j === y) {
        document.writeln("1");
      } else {
        document.writeln("0");
      }
    }
    document.write("<br/>");
  }
  document.write("<hr/>");
}

Field.prototype.clearField = function() {
  // пустое поле с размерами из конструктора, т.к. ничего не передаем
  this.renderField();
}

Field.prototype.changeSize = function(newX, newY) {
  // поле с этими размерами
  this.renderField(newX, newY);
}
// добавил width, height из конструктора родителя
function Person(width, height, name, XPosition, YPosition) {
  // наследование св-в родителя
  Field.apply(this, arguments);
  this.name = name;
  // проверка,что герой не выпадает из пределов поля
  if(XPosition <= this._width) {
    this.XPosition = XPosition;
  }
  
  if(YPosition <= this._height) {
    this.YPosition = YPosition;
  }
}
//наследуюсь от класса Field
Person.prototype = Object.create(Field.prototype);
Person.prototype.constructor = Person;

Person.prototype.start = function() {
  //возвр. массив начальных координат
  return [this.XPosition, this.YPosition];
}

Person.prototype.go = function(direction, step) {
  if(direction) {
    // массив координат старта
    var coord = this.start(),
        x = coord[0],
        y = coord[1];
    switch(direction) {
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

Person.prototype.resetPosition = function() {
  // для сброса вызыв метод старт, где массив начальных координат
  return this.start(); 
}
// Вспом. функции
function isDirecton(direction) {
  return ["left", "right", "top", "bottom"].includes(direction) ? true : false;
}

function isPositiveInteger(num) {
  if(isNumber(num)) {
    return (num > 0 && Number.isInteger(num) ) ? true : false;
  }
}

function isNumber(val) {
  return (isNaN(val) || val === "" || typeof val === "boolean" || typeof val === "string" || val === null) ? false : true;
}

var field = new Field(10, 10);

var person = new Person(10, 10, "Bob", 5, 3);

field.renderField(person.start());
field.renderField(person.go("top", 2))