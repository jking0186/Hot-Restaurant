// Dependencies
var express = require("express");
var path = require("path");

// Express App
var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extend: true}));
app.use(express.json());

// Data
// =======================================


// Routes
// =======================================
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

// Start our server
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});