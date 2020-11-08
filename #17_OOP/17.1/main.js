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

Field.prototype.renderField = function() {
  document.write("<hr/>");

  for(var i = 0; i < this.height; i += 1) {
    
    for(var j = 0; j < this.width; j += 1) {
      document.writeln("0");
    }
    document.write("<br/>");
  }
  document.write("<hr/>");
}

Field.prototype.clearField = function() {

}

Field.prototype.changeSize = function() {

}

function Person(name, XPosition, YPosition) {
  this.name = name;
  this.XPosition = XPosition;
  this.YPosition = YPosition;
}

Person.prototype = Object.create(Field.prototype);
Person.prototype = Person;

Person.prototype.start = function(XPosition, YPosition) {

}

Person.prototype.go = function(direction, step) {

}

Person.prototype.resetPosition = function() {

}

var field = new Field(10, 10);
var persone = new Person("Bob", 5, 8);

field.renderField();