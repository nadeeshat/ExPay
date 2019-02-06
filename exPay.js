const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended:true }));

app.get("/", function(req,res){
  res.sendFile(__dirname + "/index.html");
});

app.get("/login", function(req,res){
  res.sendFile(__dirname + "/login.html");
});

app.get("/addExam", function(req, res){
  res.sendFile(__dirname + "/addExam.html");
});

app.get("/viewExams", function(req, res){
  res.sendFile(__dirname + "/viewExams.html");
});

app.get("/changeRates", function(req, res){
  res.sendFile(__dirname + "/changeRates.html");
});

app.post("/login", function(req, res){
  var uname = req.body.username;
  var pwd = req.body.password;

  res.send("<h2>Username :"+uname +"password :"+pwd+"</h2>");
});

app.listen(3000, function(){
  console.log("Server started on port 3000");
});
