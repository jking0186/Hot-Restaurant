// Dependencies
var express = require("express");
var path = require("path");

// Express App
var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extend: true }));
app.use(express.json());

// Data
// =======================================

var reservations = [{
  name: "Williams",
  phone: 6155551234,
  email: "williams@email.com",
  id: 6785
}, {
  name: "Carter",
  phone: 8655556789,
  email: "carter@email.com",
  id: 6786
}, {
  name: "Jackson",
  phone: 6155554567,
  email: "jackson@email.com",
  id: 6785
}, {
  name: "McDonald",
  phone: 8655550456,
  email: "mcdonald@email.com",
  id: 6786
},{
  name: "Brewster",
  phone: 6155557654,
  email: "brewster@email.com",
  id: 6785
}];


// Routes
// =======================================
app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});
app.get("/reserve", function (req, res) {
  res.sendFile(path.join(__dirname, "reserve.html"));
  return res.json(reservations)
});
app.get("/tables", function (req, res) {
  res.sendFile(path.join(__dirname, "tables.html"));
});


// Start our server


app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});