var db = require("../models");
var passport = require("passport");

module.exports = function(app) {
  app.get(
    "/auth/google",
    passport.authenticate("google", {
      scope: [
        "https://www.googleapis.com/auth/plus.login",
        ,
        "https://www.googleapis.com/auth/plus.profile.emails.read"
      ]
    })
  );

  app.get(
    "/auth/google/callback",
    passport.authenticate("google", {
      successRedirect: "/auth/google/success",
      failureRedirect: "/auth/google/failure"
    })
  );

  app.get("/logout", function(req, res) {
    console.log("logged out!");
    req.logout();
    res.redirect("/");
  });
};
