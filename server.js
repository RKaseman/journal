
const express = require("express");


// +
// const passport = require('passport');
// const Strategy = require('passport-local').Strategy;
// ^


const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;


// +
// passport.use(new Strategy(
//     function (username, password, cb) {
//         db.users.findByUsername(username, function (err, user) {
//             if (err) { return cb(err); }
//             if (!user) { return cb(null, false); }
//             if (user.password != password) { return cb(null, false); }
//             return cb(null, user);
//         });
//     }));
// passport.serializeUser(function (user, cb) {
//     cb(null, user.id);
// });

// passport.deserializeUser(function (id, cb) {
//     db.users.findById(id, function (err, user) {
//         if (err) { return cb(err); }
//         cb(null, user);
//     });
// });

// Use application-level middleware for common functionality, including
// logging, parsing, and session handling.
// app.use(require('morgan')('combined'));
// app.use(require('cookie-parser')());
// app.use(require('body-parser').urlencoded({ extended: true }));
// app.use(require('express-session')({ secret: 'keyboard cat', resave: false, saveUninitialized: false }));

// Initialize Passport and restore authentication state, if any, from the
// session.
// app.use(passport.initialize());
// app.use(passport.session());
// ^


// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/reactreadinglist");
// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/userdb");

// Start the API server
app.listen(PORT, function () {
    console.log(`API Server on PORT ${PORT}`);
});
