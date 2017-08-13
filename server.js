
//requireing the routes
var htmlRoutes = require("/app/routing/htmlRoutes.js");
var htmlRoutes = require("/app/routing/apiRoutes.js");

var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

//connecting to port
var app = express();
var PORT = 3000;

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});


module.exports = server;