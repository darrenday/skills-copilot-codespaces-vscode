// Create web server
// 1. Load http module
var http = require('http');
var fs = require('fs');
var url = require('url');

// 2. Create server
http.createServer(function (req, res) {
  var pathname = url.parse(req.url).pathname;
    // Log
  }).listen(8080);