//jshint esversion:6

const express = require("express");
const request = require("request");
const ejs = require("ejs");

const app = express();
app.use(express.static("public"));
app.set('view engine', 'ejs');

app.get("/", function(req, res) {
  res.render("pages/index", {
    page_name: 'index'
  });
});

app.get("/about-me", function(req, res){
  res.render("pages/aboutme", {
    page_name: 'aboutme'
  });
});

app.get("/resume", function(req, res){
  res.render("pages/resume", {
    page_name: 'resume'
  });
});

app.get("/bloom-app", function(req, res){
  res.render("pages/bloom-app", {
    page_name: 'index'
  });
});

app.get("/learning-seeds", function(req, res){
  res.render("pages/learning-seeds", {
    page_name: 'index'
  });
});

app.get("/venmo", function(req, res){
  res.render("pages/venmo", {
    page_name: 'index'
  });
});

app.get("/kiki", function(req, res){
  res.render("pages/kiki", {
    page_name: 'index'
  });
});
app.get("/tete-a-tete", function(req, res){
  res.render("pages/tete-a-tete", {
    page_name: 'index'
  });
});








app.listen(process.env.PORT || 3000, function(){
  console.log("Server is running on port 3000");
});
