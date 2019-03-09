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
  app.get("/api/states", function(req, res) {
    // Add sequelize code to find all items
    db.State.findAll({}).then(function(dbStates) {
      // return the result to the user with res.json
      res.json(dbStates);
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

  // GET route for getting an item
  app.get("/api/items/:id", function(req, res) {
    var query = {
      itemId: req.params.id
    };
    if (req.query.departmentId) {
      query.departmentId = req.query.departmentId;
    }
    // Here we add an "include" property to our options in our findone query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Department
    db.Item.findOne({
      where: query,
      include: [db.Department]
    }).then(function(dbItem) {
      res.json(dbItem);
    });
  });

  // DELETE route for deleting items
  app.delete("/api/items/:id", function(req, res) {
    db.Item.destroy({
      where: {
        itemId: req.params.id
      }
    }).then(function(dbItem) {
      res.json(dbItem);
    });
  });

  // PUT route for updating Items
  app.put("/api/items/:id", function(req, res) {
    db.Item.update(req.body, {
      where: {
        itemId: req.params.id
      }
    }).then(function(dbItem) {
      res.json(dbItem);
    });
  });
   //Post route for creating new Item
   app.post("/api/createItem/", function(req, res) {
    db.Item.create(req.body).then(function(dbNewItem) {
      // return the result to the user with res.json
      res.json(dbNewItem);
    });
  });
  // // Get route for retrieving a single item
  // app.get("/api/items/:id", function(req, res) {
  //   // Here we add an "include" property to our options in our findOne query
  //   // We set the value to an array of the models we want to include in a left outer join
  //   // In this case, just db.Department
  //   db.Post.findOne({
  //     where: {
  //       itemId: req.params.id
  //     },
  //     include: [db.Department]
  //   }).then(function(dbItem) {
  //     res.json(dbItem);
  //   });
  // });
};
