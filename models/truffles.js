// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var truffle = {
  all: function(cb) {
    orm.all("truffles", function(res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller (trufflesController.js).
module.exports = truffle;
