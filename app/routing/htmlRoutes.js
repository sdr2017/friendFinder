var path = require("path");
debugger;

var htmlRoutes = function(app) {
	app.use("/", function(req, res) { //display the home html page
	  res.sendFile(path.join(__dirname, "/../public/home.html"));
	});

	app.get("/survey", function(req, res) { //display the survey page
	  res.sendFile(path.join(__dirname, "survey.html"));
	});

};

module.exports = htmlRoutes;