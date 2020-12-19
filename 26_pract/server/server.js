var express = require("express");
var fs = require("fs");
var bodyParser = require("body-parser");
var app = express();

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

app.get("/check-reg", function(req, res) {
  const data = true;

  res.send(data).json();
})

app.post("/reg", function(req, res) {
  const body = JSON.parse(req.body);
  read("./server/users.json", (error, jsonPayload) => {
    const data = JSON.parse(jsonPayload);
    (checkClient(body, data)) ?
      res.status(200).send(JSON.stringify(data[0].id)) : res.status(401).send("[Unauthorized]");
  });
});