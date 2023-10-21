const express = require("express");
const router = express.Router();

const {
  getDestinationByID,
  getDestinationsByRate,
  getDestinationsByCategoryAndProvince,
  getHighlightDestination,
} = require("../controllers/destinationController");

router.get("/rates", getDestinationsByRate);
router.get("/search", getDestinationsByCategoryAndProvince);
router.get("/highlight", getHighlightDestination);
router.get("/:id", getDestinationByID);

module.exports = router;
