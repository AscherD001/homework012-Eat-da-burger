var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var exphbs = require("express-handlebars");
var express = require("express");

var app = express();
var port = process.env.PORT || 3000;

app.use(express.static("public"));
app.use(methodOverride("_method"));
app.use(bodyParser.urlencoded({ extended: false }));
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var routes = require("./controllers/controller.js");

app.use("/", routes);

app.listen(port, function() {
    console.log("listening on PORT: " + port);
});