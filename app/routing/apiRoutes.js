var server = require("../../server.js");
var htmlRoutes = require("./htmlRoutes.js");

var apiRoutes = function(){
	//get request to display all friends
	app.get("/api/friends", function(req, res) {
	    res.json(characters[i]);
	});

	//post request to handle determining friend compatibility
	app.post("/api/new", function(req, res) {
	  var friends = req.body;

	  console.log(newcharacter);

	  characters.push(newcharacter);

	  res.json(newcharacter);
	});

};


module.exports = apiRoutes;