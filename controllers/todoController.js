var express = require("express");

var router = express.Router();

// Import the model (cat.js) to use its database functions.
var todo = require("../models/todo.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  todo.all(function(data) {
    var hbsObject = {
      items: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/api/items", function(req, res) {
  todo.create([
    "name", "done"
  ], [
    req.body.name, req.body.done
  ], function(result) {
    // Send back the ID of the new quote
    res.json({ id: result.insertId });
  });
});

router.put("/api/items/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  todo.update({
    done: req.body.done
  }, condition, function(result) {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

router.delete("/api/items/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  todo.delete(condition, function(result) {
    if (result.affectedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

// Export routes for server.js to use.
module.exports = router;
