var passport = require("passport");

module.exports = function(app) {
    app.get('/auth/google',
    passport.authenticate('google', { scope: ['profile'], prompt: 'select_account' }));

    app.get( '/auth/google/callback',
      passport.authenticate( 'google', {
          successRedirect: '/customers',
          failureRedirect: '/'
  }))};



  // app.get("/auth/google", passport.authenticate("google"), function(req, res) {
  //   // The request will be redirected to Google for authentication, so
  //   // this function will not be called.
  // });

  // app.get(
  //   "/auth/google/callback",
  //   passport.authenticate("google", { failureRedirect: "/" }),
  //   function(req, res) {
  //     // Successful authentication, redirect to customers page
  //     res.redirect("/customers");
  //   }
  // );

