const express = require("express");
const router = express.Router();
const isAuthenticated = require("../middleware/auth");
const controller = require("../controllers/predictionController");

router.post("/save", isAuthenticated, controller.savePrediction);
router.get("/get", isAuthenticated, controller.getPredictionsByUser);

module.exports = router;