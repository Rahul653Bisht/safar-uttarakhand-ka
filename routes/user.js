const express = require("express");
const router = express.Router();
const User = require("../models/user.js");
const wrapAsync = require("../utils/wrapAsync");
const passport = require("passport");
const {saveRedirectUrl} = require("../middleware.js");
const userController = require("../controllers/users.js");

//i have used router.route to combine multiple routs with same path
// SIGNUP ROUTE:
// GET  => Renders the signup form
// POST => Handles user registration logic
router.route("/signup")
.get(userController.renderSignupForm)
.post(wrapAsync(userController.signup));

// LOGIN ROUTE:
// GET => Renders the login form
// POST => Authenticates user using Passport and redirects accordingly
router.route("/login")
.get(userController.renderLoginForm)
.post(saveRedirectUrl,passport.authenticate("local",{failureRedirect: '/login',failureFlash: true}),userController.login);

router.get("/logout",userController.logout);
module.exports = router;