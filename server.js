const express = require("express");

const app = express();

app.get("/", function(request, response){
  response.send("<h1>Hello World!</h1>");
});
app.get("/contact", function(request, response){
  response.send("<h1>Contact me at ZiadElalaily@outlook.com</h1>");
});

app.get("/about", function(request, response){
  response.send("I am Ziad Elalaily, a mechatronics and a full stack engineer.");
});

app.listen(3001, function(){
  console.log("Server started on port 3001");
});
