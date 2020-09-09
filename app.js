// inlcude all of our necessary libraries
var express = require("express");
var path = require('path');
var bodyParser = require('body-parser')
var cookieParser = require('cookie-parser');
var expressValidator = require('express-validator');
var hbs = require('express-handlebars');

var app = express();

var index = require('./routes/index.js');

app.use(cookieParser());

app.use(express.static(__dirname + '/assets'));
app.set('views', path.join(__dirname, 'views'));

app.set('view engine', 'hbs');

app.engine('hbs', hbs({
  extname: 'hbs',
  partialsDir: [
    path.join(__dirname, 'views/partials'),
  ],
  helpers: {

  }
}));

app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));
app.use(expressValidator());


// to load homepage
app.use("/", index);

// starts the server instance
app.listen(process.env.PORT || 8000, function () {
  console.log("Live at Port 8000");
});

module.exports = app