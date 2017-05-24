 // *********************************************************************************
 // api-routes.js - this file offers a set of routes for displaying and saving data to the db
 // *********************************************************************************

 // Dependencies
 // =============================================================
 var db = require("../models");

 // Routes
 // =============================================================
 module.exports = function(app) {

     // Get all burgers
     app.get("/all", function(req, res) {

         // Finding all Burgers, and then returning them to the user as JSON.
         // Sequelize queries are aynchronous, which helps with percieved speed.
         // If we want something to be guaranteed to happen after the query, we'll use
         // the .then function
         db.Burger.findAll({}).then(function(Burger) {
             // results are available to us inside the .then
             res.json(Burger);
         });
     });

     // Add a Burger
     app.post("/", function(req, res) {
         db.Burger.create({
             burger_name: req.body.name,
             burger_descript: req.body.description,
             // created_at: req.body.created_at
         }).then(function(Burger) {
             // `results` here would be the newly created Burger
             res.redirect('/')
         });
     });

     // DELETE route for deleting posts
     app.delete("/:id", function(req, res) {
         // Add sequelize code to delete a post where the id is equal to req.params.id, 
         // then return the result to the user using res.json
         db.Burger.destroy({
             where: {
                 id: req.params.id
             }
         }).then(function(Burger) {
             res.redirect('/')
         })
     });

     app.put('/:id', function(req, res) {
         db.Burger.update({
             eaten: req.body.eaten
         }, {
             where: {
                 id: req.params.id
             }
         }).then(function(Burger) {
             res.redirect('/')
         })
     })

 };
