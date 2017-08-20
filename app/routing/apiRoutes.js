var path = require("path");
var friends = require("../data/friends")

var apiRoutes = function(app){
	//get request to display all friends
	app.get("/api/friends", function(req, res) {
	    res.json(friends);
	});

	//post request to handle determining friend compatibility
	app.post("/api/new", function(req, res) {
	  var newFriend = req.body;

	  console.log(newFriend);

	  // characters.push(newcharacter);

	  res.json(newFriend);
	});

};



module.exports = apiRoutes;