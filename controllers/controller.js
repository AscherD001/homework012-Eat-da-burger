var express = require("express");
var router = express.Router();

var connection = require("../config/connection.js");
var burgers = require("../models/burger.js");

router.get("/", function(req, res) {
   burgers.all(function(data) {
    res.render("index", { burgers: data });
   });
});
router.post("/", function(req, res) {
    burgers.post(req.body.name, function(data) {
        res.redirect("/");
    });
});
router.put("/:burger_name", function(req, res) {
    burgers.put([req.params.burger_name], function(data) {
        res.redirect("/");
    });
});

module.exports = router;