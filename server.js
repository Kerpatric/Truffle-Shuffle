var express = require("express");
var bodyParser = require("body-parser");
var data = require("./db/data.json");

var PORT = process.env.PORT || 8080;

// Requiring our models for syncing
var db = require("./models");

var app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse application/json
app.use(bodyParser.json());

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
var routes = require("./controllers/truffle-routes.js");

app.use(routes);

// Sequelize function
function seed_data() {
  var types = {};
  var createdType = {};

  for (var i = 0; i < data.length; i++) {
    types[data[i]["item_type"]] = data[i];
    console.log(data[i]);
    if ( createdType[data[i]["item_type"]] == null) {
      createdType[data[i]["item_type"]] = [];
    }
    createdType[data[i]["item_type"]].push(data[i]);
    console.log(createdType[data[i]["item_type"]]);

  }
  for (var key in types) {
    db.Item_type.create({
      item_type: types[key]["item_type"],
      img_src: types[key]["img_src"]
    }).then(function (input) {
      for (var i = 0; i < createdType[key].length; i++) {
        db.Item.create({
          ItemTypeId: input.id,
          name: createdType[key][i]["name"],
          size: createdType[key][i]["size"]
        });
      }
    });
  }
}

// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync({force: true}).then(function () {
  seed_data();
});
