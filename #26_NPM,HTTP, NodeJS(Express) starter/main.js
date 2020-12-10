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