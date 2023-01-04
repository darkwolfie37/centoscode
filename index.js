const express = require('express');
var querystring = require('querystring');

var request = require('request'); // "Request" library
var cors = require('cors');

var app = express();


app.use(express.static(__dirname + '/html'))
   .use(cors())

app.listen(8000);