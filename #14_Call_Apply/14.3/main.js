// "use strict";

/*
Пусть дан следующий код:
var user = {name: 'Алексей'}

function func(surname, patronymic) { 
  alert('привет' + ', ' + this.name + ' ' + patronymic + ' ' + surname); 
}

func(); //тут должно вывести 'привет, Алексей Алексеевич Петров'

при помощи apply вывести сообщение 'привет, Алексей Алексеевич Петров' 
'Алексеевич', 'Петров' должно быть параметрами ф-ии.
*/

var user = {name: 'Алексей'};

function func(surname, patronymic) { 
  console.log('привет' + ', ' + this.name + ' ' + patronymic + ' ' + surname); 
}

func.apply(user, ["Петров", "Алексеевич"]);