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














app.listen(process.env.PORT || 3000, function(){
  console.log("Server is running on port 3000");
});
