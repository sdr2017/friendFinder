
//requireing the routes
var htmlRoutes = require("./app/routing/htmlRoutes.js");
var apiRoutes = require("./app/routing/apiRoutes.js");
var friends = require("./app/data/friends.js");

var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());


//need to send user to the homepage
htmlRoutes(app);
apiRoutes(app);

//connecting to port
var PORT = process.env.PORT || 3000;

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});

//module.exports = server;