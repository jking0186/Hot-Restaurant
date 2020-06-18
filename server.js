var express = require("express");
var path = require("path");
var http = require("http");

var PORT = process.env.PORT || 3000;

var app = express();

// Create a generic function to handle requests and responses
function handleRequest(request, response) {
  response.end("It Works!! Path Hit: " + request.url);
}

var server = http.createServer(handleRequest);

// Start our server
server.listen(PORT, function() {
  console.log("Server listening on: http://localhost:" + PORT);
});

// Data

var reservation = [{
      name: "Williams",
      phone: 615-555-1234,
      email: "williams@email.com",
      id: 6785
  }, {
    name: "Carter",
    phone: 865-555-6789,
    email: "carter@email.com",
    id: 6786
  }];


  // Displays all reservations
app.get("/", function(req, res) {
  return res.json(reservations);
});