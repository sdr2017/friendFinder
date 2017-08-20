var path = require("path");
debugger;

var htmlRoutes = function(app) {
	app.get("/survey", function(req, res) { //display the survey page
	  res.sendFile(path.join(__dirname, "/../public/survey.html"));
	});

	app.get("/", function(req, res) { //display the home html page
	  res.sendFile(path.join(__dirname, "/../public/home.html"));
	});
};

module.exports = htmlRoutes;