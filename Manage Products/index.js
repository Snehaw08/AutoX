// index.js
// importing modules
var express = require("express"); // to include express

var app = express(); // create an Object

var mongoose = require("mongoose"); // to include mongoose ( to interact with MongoDB )
var bodyparser = require("body-parser"); // to include body parser ( to interact with front-end data )
var cors = require("cors"); // to include cors ( to create middleware functionalities )
var path = require("path"); // to include path ( to set paths  for interaction)

const routes = require("./routes/routes");

var mongoose = require("mongoose"); // to include mongoose ( to interact with MongoDB )

//port no
const port = 3000;

// adding middleware - cors
app.use(cors()); // Cross Origin Resource Sharing

// body - parser  // json: API & MONGO data sharing
app.use(bodyparser.json());

// routes  // '/api' shows data from
app.use("/api", routes);

//connect mongodb also creates new db ‘productlist’ with default port ‘:27017’
mongoose.connect("mongodb://localhost:27017/productlist");

//on connection
mongoose.connection.on("connected", () => {
  console.log("Connected to database mongodb @ 27017");
});

mongoose.connection.on("error", (err) => {
  if (err) {
    console.log("Error in Database Connection : " + err);
  }
});

// Interacting with front-end
app.get("/", (req, res) => {
  res.send("<h1>Response from 'server'...!</h1>");
});

app.listen(port, () => console.log("Server started at port: " + port)); // testing Server
