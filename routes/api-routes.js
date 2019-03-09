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

  // })
  app.get("/api/states", function(req, res) {
    // Add sequelize code to find all items
    db.State.findAll({}).then(function(dbStates) {
      // return the result to the user with res.json
      res.json(dbStates);
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
  // // Get route for returning Items of all department
  // app.get("/api/items/", function(req, res) {
  //   // Add sequelize code to find all items
  //   db.Item.findAll({}).then(function(dbItems) {
  //     // return the result to the user with res.json
  //     res.json(dbItems);
  //   });
  // });
  //Post route for creating new Item
  app.post("/api/createItem/", function(req, res) {
    db.Item.create(req.body).then(function(dbNewItem) {
      // return the result to the user with res.json
      res.json(dbNewItem);
    });
  });
  // Get route for returning Items of all department
  app.get("/api/users/", function(req, res) {
    // Add sequelize code to find all items
    db.UserProfile.findAll({}).then(function(dbUsers) {
      // return the result to the user with res.json
      res.json(dbUsers);
    });
  });
  // Get route for returning Items of all department
  app.get("/api/depts/", function(req, res) {
    // Add sequelize code to find all items
    db.Department.findAll({}).then(function(dbDept) {
      // return the result to the user with res.json
      res.json(dbDept);
    });
  });
  //Post route for creating new department
  app.post("/api/createDept", function(req, res) {
    db.Department.create(req.body).then(function(dbNewDept) {
      // return the result to the user with res.json
      res.json(dbNewDept);
    });
  });
  app.get("/api/depts/:id", function(req, res) {
    db.Department.findOne({
      where: {
        departmentId: req.params.id
      }
    }).then(function(dbdept) {
      res.json(dbdept);
    });
  });

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
  // GET route for getting all of the posts
  app.get("/api/items", function(req, res) {
    var query = {};
    if (req.query.departmentId) {
      query.departmentId = req.query.departmentId;
    }
    // Here we add an "include" property to our options in our findAll query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Department
    db.Item.findAll({
      where: query,
      include: [db.Department]
    }).then(function(dbItems) {
      res.json(dbItems);
    });
  });
};
