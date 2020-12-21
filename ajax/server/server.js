var express = require("express"); // подключить express(упрощение для NodeJs) из папки node_modules
var fs = require("fs"); // fs -- объект который дает возможность читать файлы(например json)
var bodyParser = require("body-parser"); // 'body-parser' -- библиотека дает возможность прочитать post запрос на NodeJs
var app = express(); // создаем объект приложения
// доступ к объекту из файла index.js который содержит функции
// для чтения данных и записи данных
const {read, write, checkClient} = require("./index");

// эти настройки нужны чтобы сервер мог получать тело запроса
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/json" }));

app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
});

const port = 3000;

app.listen(port, function() {
  console.log(`Example app listening on port http://
  localhost:${port}/`);
});

app.post("/reg", function(req, res) {
  // пришли данные с фронт-энд(от клиента)
  const body = JSON.parse(req.body);
  // читаем файл с пользователями(jsonPayload это те данные, которые хранятся в файле users.json)
  read("./server/users.json", (error, jsonPayload) => {
    // распарсить файл с пользователями
    const data = JSON.parse(jsonPayload);

    (checkClient(body, data)) ? 
      res.status(200).send(JSON.stringify(data[0].id)) : res.status(401).send("[Unauthorized]");
  });
});

app.post('/', function(req, res) {
  // новый запрос от клиента
  const clientReq = req.body;

  fs.readFile(`./server/${clientReq}.json`, "utf-8", (error, data) => { 
    const myData = JSON.parse(data);
    // новый ответ
    res.send(JSON.stringify(myData));
    console.log(myData);
  })
});








/* 
!то что с лекции пригодится
app.post("/reg", function(req, res) {
  // пришли данные с фронт-энд(от клиента)
  const body = JSON.parse(req.body);

  // читаем файл с пользователями(jsonPayload это те данные, которые хранятся в файле users.json)
  read("./server/users.json", (error, jsonPayload) => {
    // распарсить файл с пользователями
    const data = JSON.parse(jsonPayload);
    // добавить в пользователей то что прилетело
    // data.push(body);

    const result = checkClient(body, data);

    if(jsonPayload) {
      // записываем в файл изменеия(stryngify уже произошел в функции)
      // write("./server/users.json", data);
      // отправляем ответ клиенту
      res
        .send(data); 
    }
  });
});
*/