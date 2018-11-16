var express = require("express");

var router = express.Router();

// Import the model (cat.js) to use its database functions.
var todo = require("../models/todo.js");


router.get("/", function (req, res) {

    todo.all(function (data) {
        var hbsObject = {
            items: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
})