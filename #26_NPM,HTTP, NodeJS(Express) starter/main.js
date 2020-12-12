"use strict";

/*

*/

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

