// "use strict";

/*
Пусть есть объект 
obj = {
  anonim: {say: 'Hello anonim'}, 
  user: {say: 'Hello user'}, 
  admin: {say: 'Hello admin'}
}, 
и ф-я: function greeting(who) {}
при помощи метода call вызвать ф-ю greeting как метод объекта obj без записи в него, 
с одним из 3ьох значений "anonim, admin, user". Получить в ответ сообщение приветствия.
*/

var obj = {
  anonim: {say: 'Hello anonim'}, 
  user: {say: 'Hello user'}, 
  admin: {say: 'Hello admin'}
};

function greeting(who) {
  return who.say;
}

var message = greeting.call(obj, obj.admin);
console.log(message);