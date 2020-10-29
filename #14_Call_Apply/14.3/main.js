// "use strict";

/*
Пусть дан следующий код:
var user = {name: 'Алексей'}

function func(surname, patronymic) { 
  alert('привет' + ', ' + this.name + ' ' + patronymic + ' ' + surname); 
}

Тут напишите конструкцию с bind()

func('Николаев', 'Иванович'); //тут должно вывести 'привет, Алексей Иванович Николаев '

Напишите в указанном месте конструкцию с методом bind() так, чтобы this внутри функции func всегда указывал на объект user.
*/

var user = {name: 'Алексей'};

function func(surname, patronymic) { 
  console.log('привет' + ', ' + this.name + ' ' + patronymic + ' ' + surname); 
}
// функция bind не вызывает функцию, а создаёт новую функцию, которая при вызове 
// устанавливает в качестве контекста выполнения this предоставленное значение
var messageFunc = func.bind(user);
messageFunc("Николаев", "Иванович");