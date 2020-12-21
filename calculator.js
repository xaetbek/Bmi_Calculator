const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req,res){

  var num1 = Number(req.body.num1);
  var num2 = Number(req.body.num2);
  var result = num1 + num2;

  res.send("The result of the calculation is " + result);
});

app.get("/bmiCalculator", function(req,res){
  res.sendFile(__dirname + "/bmiCalculator.html")
});

app.post("/bmiCalculator", function(req,res){
  var yourWeight = parseFloat(req.body.weight);
  var yourHeight = parseFloat(req.body.height);
  var yourBmi = (yourWeight / (yourHeight*yourHeight));

  res.send("Your BMI calculation is " + yourBmi);
});

app.listen(3000, function(){
  console.log("Server started on port 3000");
});
