const express = require("express");
const router = express.Router();
const controller = require("../controllers/authController");
const isAuthenticated = require("../middleware/auth");

router.post("/login", controller.login);
router.post("/register", controller.register);
router.get("/me", isAuthenticated, controller.getUserDetails);

module.exports = router;