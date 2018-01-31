// declaring dependencies

var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// server set up 

var app = express();

// determining which port to use
var PORT = process.env.PORT || 3000;

// data parsing
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

// setting static dir
app.use(express.static("public"));

// routing
require("routing/htmlRoutes")(app);
require("routing/apiRoutes")(app);

// the following starts the server
app.listen(PORT, function() {
    console.log("Listening on PORT " + PORT);
});
