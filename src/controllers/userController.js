const userQueries = require("../db/queries.users.js");
const passport = require("passport");

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
      res.redirect("/");

    } else {

      passport.authenticate("local")(req, res, () => {
        req.flash("notice", "You've successfully signed up!");
        res.redirect("/");
      });          
    }
  });
},

}