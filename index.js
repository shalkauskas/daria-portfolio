//jshint esversion:6

const express = require("express");
const request = require("request");

const app = express();
app.use(express.static("public"));

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.get("/about-me", function(req, res){
  res.sendFile(__dirname + "/aboutme.html");
});

app.get("/resume", function(req, res){
  res.sendFile(__dirname + "/resume.html");
});

app.get("/bloom-app", function(req, res){
  res.sendFile(__dirname + "/bloom-app.html");
});

app.get("/learning-seeds", function(req, res){
  res.sendFile(__dirname + "/learning-seeds.html");
});

app.get("/venmo", function(req, res){
  res.sendFile(__dirname + "/venmo.html");
});

app.get("/kiki", function(req, res){
  res.sendFile(__dirname + "/kiki.html");
});









app.listen(process.env.PORT || 3000, function(){
  console.log("Server is running on port 3000");
});
