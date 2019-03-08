// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our Todo model
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {
  // GET route for getting all of the posts
  app.post("/api/signIn/", function(req, res) {
    // Add sequelize code to find  and login Admin, and return them to the adminDashbord with res.json
    db.UserProfile.findOne({
      where: {
        userName: req.body.userName,
        userPasswd: req.body.userPasswd,
        userType: req.body.userType
      }
    }).then(function(dbUser) {
      // return the result to the user with res.json
      res.json(dbUser);
    });
  });

  // // Get route for returning posts of a specific category
  // app.get("/api/posts/category/:category", function (req, res) {
  //   // Add sequelize code to find all posts where the category is equal to req.params.category,

  //   db.Post.findAll({
  //     where: {
  //       category: req.params.category
  //     }
  //   }).then(function (dbPost) {
  //     // return the result to the user with res.json
  //     res.json(dbPost);

  //   });

  // });
  app.get("api/createAccount/states", function(req, res) {
    db.State.findAll({
      where: {
        tableName: State
      }
    }).then(function(result) {
      res.json(result);
    });
  });

  // // Get route for retrieving a single post
  // app.get("/api/posts/:id", function (req, res) {
  //   // Add sequelize code to find a single post where the id is equal to req.params.id,
  //   db.Post.findOne({
  //     where: {
  //       id: req.params.id
  //     }
  //   }).then(function (dbPost) {
  //     // return the result to the user with res.json
  //     res.json(dbPost);

  //   });

  // });

  // // POST route for saving a new post
  // app.post("/api/posts", function (req, res) {
  //   // Add sequelize code for creating a post using req.body,
  //   db.Post.create({
  //     title: req.body.title,
  //     body: req.body.body,
  //     category: req.body.category
  //   }).then(function (dbPost) {
  //     // then return the result using res.json
  //     res.json(dbPost);
  //   });
  // });

  // // DELETE route for deleting posts
  // app.delete("/api/posts/:id", function (req, res) {
  //   // Add sequelize code to delete a post where the id is equal to req.params.id,
  //   db.Post.destroy({
  //     where: {
  //       id: req.params.id
  //     }
  //   }).then(function(dbPost) {
  //     // then return the result to the user using res.json
  //     res.json(dbPost);
  //   });

  // });

  // // PUT route for updating posts
  // app.put("/api/posts", function (req, res) {
  //   // Add code here to update a post using the values in req.body, where the id is equal to req.body.id and
  //   db.Post.update({
  //     title: req.body.title,
  //     body: req.body.body,
  //     category: req.body.category
  //   }, {
  //     where: {
  //       id: req.body.id
  //     }
  //   }).then(function(dbPost) {
  //    // return the result to the user using res.json
  //     res.json(dbPost);
  //   });

  // });
};
