var express = require("express"); // подключить express(упрощение для NodeJs) из папки node_modules
var fs = require("fs"); // fs -- объект который дает возможность читать файлы(например json)
var bodyParser = require("body-parser"); // 'body-parser' -- библиотека дает возможность прочитать post запрос на NodeJs
var app = express(); // создаем объект приложения
// доступ к объекту из файла index.js который содержит функции
// для чтения данных и записи данных
const {read, write} = require("./index");

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

app.get('/users', function(req, res) {
  
  fs.readFile("./server/users.json", "utf-8", (error, data) => {
    const myData = JSON.parse(data);
    res
    .status(200)
    .send(myData);
  })
});

app.post("/reg", function(req, res) {
  // пришли данные с фронт-энд(от клиента)
  const body = req.body;
  
  read("./server/users.json", (error, jsonPayload) => {
    const data = JSON.parse(jsonPayload);
    data.push(JSON.parse(body));

    console.log(data);

    if(jsonPayload) {
      write("./server/users.json", data);
      res
        .send("OK!!!"); 
    }
  });
});