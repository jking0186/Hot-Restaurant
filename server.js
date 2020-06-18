var express = require("express");
var path = require("path");
var http = require("http");

var PORT = process.env.PORT || 3000;

// Create a generic function to handle requests and responses
function handleRequest(request, response) {
  response.end("It Works!! Path Hit: " + request.url);
}

var server = http.createServer(handleRequest);

// Start our server
server.listen(PORT, function() {
  console.log("Server listening on: http://localhost:" + PORT);
});