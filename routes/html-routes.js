// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");
var db = require("../models");


// Routes
// =============================================================
module.exports = function(app) {

  app.get("/", function(req, res) {
  	db.Burger.findAll({}).then(function(Burger) {
            // results are available to us inside the .then
   	res.render("index", {
   		burgers: Burger
   	});
  });

});
}

