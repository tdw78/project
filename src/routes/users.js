const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router.get("/users/signUp", userController.signUpForm);
router.post("/users", userController.signUp);

router.get("/users/sign_out", userController.signOut);

router.get("/users/signIn", userController.signIn);
router.post("/users/signIn", userController.userSignIn);

module.exports = router;
