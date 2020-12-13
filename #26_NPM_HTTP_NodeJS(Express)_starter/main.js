"use strict";

/*
в Node.js служебное слово require
служит для подключения одного независимого модуля (файла) к другому независимому модулю (файлу). 
Принцип подключения через require заключается в создании в целевом модуле объекта и 
помещении в этот объект подключаемого модуля.
*/

// Служебное слово require используют для загрузки модуля, обычно присваивая результат его работы какой-то переменной:
var express = require("express"); // подключить express(упрощение для NodeJs) из папки node_modules
var fs = require("fs"); // fs -- объект который дает возможность читать файлы(например json)
var bodyParser = require("body-parser"); // 'body-parser' -- библиотека дает возможность прочитать post запрос на NodeJs
var app = express();


const port = 3003;

app.listen(port, function() {
  console.log(`Example app listening on port http://localhost:${port}/`);
});

app.get('/candidates', function(request, response) {
  fs.readFile('./models/data.json', 'utf-8', function(error, data) {
    const users = JSON.parse(data);
    const user = users[users.length - 1];

      response
      .send(JSON.stringify(user));
  });
});

app.get('/vacancies', function() {
  console.log('vacancies callback');
});




function read(url, callback) {
  fs.readFile(url, "utf-8", callback);
}

