const express = require("express");
const router = express.Router();

const destinationCategoryRouter = require("./destinationCategoryRouter");
const destinationRouter = require("./destinationRouter");

router.use("/api/destination-categories", destinationCategoryRouter);
router.use("/api/destinations", destinationRouter);

module.exports = router;
