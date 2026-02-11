const express = require("express");
const router = express.Router();
const ListingModel = require("../models/Listing.js")
const ListingController = require("../controllers/ListingsController.js")


router.get("/listings" ,ListingController.getAllListings)
router.get("/listings/:id" , ListingController.getListing)


module.exports = router;

