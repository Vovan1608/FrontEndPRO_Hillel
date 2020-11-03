// "use strict";

/*
Cоздать глобальную ф-ю greeting которая каждые 5000ms смотрит в тег 
input с id='name' (получить при помощи document.querySelector('input[id="name"]')) берет значение по ключу value и выводит сообщение преветствия из 
глобальной переменной greetingMessage.
alеrt(greetingMessage + input.value)
*/

var greetingMessage = "Hello",
    person = document.querySelector('input[id="name"]');

function greeting(greetingMessage) {
  alert(greetingMessage + ", " + person.value);
}

setInterval(greeting.bind(person, greetingMessage), 5000);