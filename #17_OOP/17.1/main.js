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
  this.width = width;
  this.height = height;
}

Field.prototype.renderField = function(width, height, x, y) {
  document.write("<hr/>");
  
  if(arguments.length === 0) {
    width = this.width;
    height = this.height;
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
  this.renderField();
}

Field.prototype.changeSize = function(newX, newY) {
  this.renderField(newX, newY);
}

function Person(name, XPosition, YPosition) {
  this.name = name;
  
  if(XPosition <= field.width) {
    this.XPosition = XPosition;
  }
  
  if(YPosition <= field.height) {
    this.YPosition = YPosition;
  }
}

Person.prototype = Object.create(Field.prototype);
Person.prototype.constructor = Person;

Person.prototype.start = function() {
  return [this.XPosition, this.YPosition];
}

Person.prototype.go = function(direction, step) {
  if(direction) {

    switch(direction) {
      case "right":
        this.XPosition = (this.XPosition + step > field.width) ? this.XPosition : this.XPosition + step;
        return [this.XPosition, this.YPosition];
      case "left":
        this.XPosition = (this.XPosition - step < 0) ? this.XPosition : this.XPosition - step;
        return [this.XPosition, this.YPosition];
      case "top":
        this.YPosition = (this.YPosition - step < 0) ? this.YPosition : this.YPosition - step;
        return [this.XPosition, this.YPosition];
      case "bottom":
        this.YPosition = (this.YPosition + step > field.height) ? this.YPosition : this.YPosition + step;
        return [this.XPosition, this.YPosition];
    }
  }
}

Person.prototype.resetPosition = function() {
  this.start(); 
}

function isDirecton(direction) {
  return ["left", "right", "top", "bottom"].includes(direction) ? true : false;
}

function isPositiveInteger(num) {
  return (num > 0 && Number.isInteger(num)) ? true : false;
}

var field = new Field(10, 10);
var persone = new Person("Bob", 5, 3);

field.renderField();
var start = persone.start();
console.log(start);

console.log(persone.go("left", 2));
var res = persone.resetPosition();
console.log(res);