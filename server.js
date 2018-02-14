//Dependencies
var express = require('express');
var bodyParser = require('body-parser');

//Create express server
var app = express();

//Set initial port
var PORT = process.env.PORT || 8080;

//Set up data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Router
//require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

//Listener
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});