var express = require("express");

var router = express.Router();

// Import the model (cat.js) to use its database functions.
var truffle = require("../models/truffles.js");


// Create all our routes and set up logic within those routes where required.

router.get("/", function(req, res) {
  truffle.all(function(data) {
    var hbsObject = {
      truffles: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

// Export routes for server.js to use.
module.exports = router;
