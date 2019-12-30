const express = require("express");
const router = express.Router();
const staticController = require("../controllers/staticController");

router.get("/", staticController.index);
router.get("/about", staticController.about);
router.get("/contact", staticController.contact);
router.get("/gallery", staticController.gallery);

module.exports = router;