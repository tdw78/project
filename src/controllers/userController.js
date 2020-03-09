const userQueries = require("../db/queries.users.js");
const passport = require("passport");
const flash = require("express-flash");

module.exports = {

signUpForm(req, res, next){
  res.render("users/signUpForm");
},
signIn(req, res, next){
  res.render("users/signIn");
},
signUp(req, res, next){
  let newUser = {
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    passwordConfirmation: req.body.passwordConfirmation
  };
  userQueries.createUser(newUser, (err, user) => {
    if(err){
      req.flash("error", err);
      console.log(err);
      res.redirect("/users/signUp");

    } else {

      passport.authenticate("local")(req, res, () => {
        req.flash("notice", "You've successfully signed up!");
        res.redirect("/");
      });          
    }
  });
},
signOut(req, res, next){
   req.logout();
   req.flash("notice", "You have signed out");
   res.redirect("/");
},
userSignIn(req, res, next){
  passport.authenticate("local")(req, res, function () {
    if(!req.user){
      req.flash("notice", "Sign in failed. Please try again.")
      res.redirect("/users/signIn");
    } else {
      req.flash("notice", "You've successfully signed in!");
      res.redirect("/");
    }
  })
}


}