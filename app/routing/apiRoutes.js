var path = require("path");
var friends = require("../data/friends")

var apiRoutes = function(app){
	//get request to display all friends
	app.get("/api/friends", function(req, res) {
	    res.json(friends);
	});

	//post request to handle determining friend compatibility
	app.post("/api/friends", function(req, res) {
	  var newFriend = req.body;
	  friends.push(req.body);

	  console.log(newFriend);

	  res.json(newFriend);
	});

};



module.exports = apiRoutes;