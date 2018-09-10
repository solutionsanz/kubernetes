var config = require('./config');
var express = require('express');

// Create an Express web app
var app = express();

//Create API root Endpoint to listen to
app.get('/', function (req, res) {

    // Returning Hello World Message:
    res.send('<font size="7" color="red">Hello World from a NodeJS Application</font>');
});

// Create an HTTP server to run our application
var server = app.listen(config.PORT, function () {

    console.log('Hello World Application running on port ' + config.PORT + "!!!");
});