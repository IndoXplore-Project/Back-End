const express = require("express");
const router = express.Router();

const destinationCategoryRouter = require("./destinationCategoryRouter");

router.use("/api/destination-categories", destinationCategoryRouter);

module.exports = router;
