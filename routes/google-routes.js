var passport = require("passport");

module.exports = function(app) {
  app.get("/auth/google",
    passport.authenticate("google", {
      scope: "profile"
    })
  );

  app.get('/auth/google/callback', 
    passport.authenticate('google', { failureRedirect: '/' }),
    function(req, res) {
      // Successful authentication, redirect 
        //new account
          res.redirect('/google/success');
        
    });


};
