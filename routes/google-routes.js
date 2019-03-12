// var db = require("../models");
var passport = require("passport");

module.exports = function(app) {
  app.get(
    "/auth/google",
    passport.authenticate("google", {
      scope: "profile"
      // "https://www.googleapis.com/auth/user.login",
      // "https://www.googleapis.com/auth/user.emails.read"
      
    })
  );


  app.get('/auth/google/callback', 
    passport.authenticate('google', { failureRedirect: '/' }),
    function(req, res) {
      // Successful authentication, redirect home.
      var person = new Person("get","https://people.googleapis.com/v1/{resourceName=people/me}");
      console.log(person.emailAddresss[0]);
      res.redirect('/google/success');
    });


};
