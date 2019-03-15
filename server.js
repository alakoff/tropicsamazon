require("dotenv").config();
// *****************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
//
//
// Dependencies
// =============================================================
var express = require("express");
var passport = require("passport");
// var cookieParser = require('cookie-parser');
// var cookieSession = require('cookie-session');

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;

// Requiring our models for syncing
var db = require("./models");

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// app.use(cookieSession({
//   name: 'session',
//   keys: [process.env.COOKIE_KEYS]
// }));
// app.use(cookieParser());

//Passport initialize middleware
app.use(passport.initialize());

// Static directory
app.use(express.static("public"));

// Routes
// =============================================================
require("./routes/google-routes.js")(app);
require("./routes/html-routes.js")(app);
require("./routes/api-routes.js")(app);

// require("./routes/author-api-routes.js")(app);
// require("./routes/post-api-routes.js")(app);

var syncOptions = { force: false };

// If running a test, set syncOptions.force to true
// clearing the `testdb`
if (process.env.NODE_ENV === "test") {
  syncOptions.force = true;
}

//Passport.js serialize user
var GoogleStrategy = require("passport-google-oauth2").Strategy;

passport.serializeUser((user, done) => {
  console.log(user.userId);
  done(null, user.userId);
});

passport.deserializeUser((id, done) => {
 db.UserProfile.findById(id).then(function(res){
   done(null, res);
 })
});

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      // callbackURL: "http://localhost:8080/auth/google/callback",
      callbackURL: "https://blooming-waters-74378.herokuapp.com/auth/google/callback",
      passReqToCallback: true
    },
    function(request, accessToken, refreshToken, profile, done){
        var userId = profile.id;
        userId = userId.slice(0,6);
        db.UserProfile.findOne({where: {googleId:userId}}).then(function(res){
          console.log('line 65:',res);
          done(null, res);
        })
    }))
        
        // var userId = profile.id;
        // userId = userId.slice(0,6);
        // db.UserProfile
        //   .findOrCreate({where: {googleId:userId}})
        //   .spread((userId,created)=> {
        //     console.log(userId.get(
        //       {
        //       plain:true
        //       }
        //       ));
        //   console.log(created);
        //     if (created===false) {
        //       console.log('existing user');
        //       // done(null, user);
        //     }
        //   }).then(function(err, profile){
        //     console.log("Hi ANYA!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
        //     console.log()
        //   })
        // //  function(err, user) {
        // //   console.log('server line 79');
        // //   return done(err, user);
        // //   }
        // }));

        


       

// Starting the server, syncing our models ------------------------------------/
db.sequelize.sync(syncOptions).then(function() {
  app.listen(PORT, function() {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });
});

module.exports = app;
