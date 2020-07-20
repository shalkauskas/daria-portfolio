//jshint esversion:6

const express = require("express");
const request = require("request");

const app = express();
app.use(express.static("public"));
app.set('view engine', 'ejs');

app.get("/", function(req, res) {
  res.render("pages/index");
});

app.get("/about-me", function(req, res){
  res.render("pages/aboutme");
});

app.get("/resume", function(req, res){
  res.render("pages/resume");
});

app.get("/bloom-app", function(req, res){
  res.render("pages/bloom-app");
});

app.get("/learning-seeds", function(req, res){
  res.render("pages/learning-seeds");
});

app.get("/venmo", function(req, res){
  res.render("pages/venmo");
});

app.get("/kiki", function(req, res){
  res.render("pages/kiki");
});









app.listen(process.env.PORT || 3000, function(){
  console.log("Server is running on port 3000");
});
