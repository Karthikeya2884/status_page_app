const express = require("express");
const serviceRoutes = require("./serviceRoutes");
const incidentRoutes = require("./incidentRoutes");

const router = express.Router();

// API base routes
router.use("/services", serviceRoutes);
router.use("/incidents", incidentRoutes);

router.get("/", (req, res) => res.send("API is running..."));

module.exports = router;