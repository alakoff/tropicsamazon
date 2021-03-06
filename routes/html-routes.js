// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");

// Routes
// =============================================================
module.exports = function(app) {
  // // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads index.html
  app.get("/", function(req, res) {
    if (req.session.token) {
      res.cookie('token', req.session.token);
      res.json({
          status: 'session cookie set'
      });
    } else {
      res.cookie('token', '')
      res.json({
          status: 'session cookie not set'
      });
    }
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  // create User route loads account.html
  app.get("/createUser", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/account.html"));
  });

  // blog route loads blog.html
  app.get("/customers", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/customer.html"));
  });

  // authors route loads author-manager.html
  app.get("/admin", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/admin.html"));
  });
  // // Each of the below routes just handles the HTML page that the user gets sent to.
  app.get("/items", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/mItems.html"));
  });
  app.get("/users", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/mUsers.html"));
  });
  app.get("/depts", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/mDept.html"));
  });
  // cureate User route loads account.html
  app.get("/signOut", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  // Success Google callback route loads account.html
  app.get("/google/success", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/account.html"));
  });

  // cureate User route loads account.html
  app.get("/googleSuccess", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/googleAccount.html"));
  });

  // logout path
  app.get("/logout", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });
  // confirm route loads confirm.html
  app.get("/confirmorder", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/confirmorder.html"));
  });
};
