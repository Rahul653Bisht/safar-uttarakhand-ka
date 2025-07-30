const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const Listing = require("../models/listing.js");//in this i am requiring the Listing model created at listing.js
const {isLoggedIn,isOwner,validateListing} = require("../middleware.js");
const listingController = require("../controllers/listings.js");
const multer  = require('multer')//Multer is used to handle file uploads in Express apps
const {storage} = require("../cloudConfig.js");
const upload = multer({storage});
//Is function me mne wrapAsync isliyea use kiya hai taki async ki errors ko catch kar shake automatically without using try catch

//router.route is used to combine multiple routes with same path into a single chain

// INDEX and CREATE ROUTES:
// GET  => Shows all listings (Index page)
// POST => Creates a new listing (Only for logged-in users)
router.route("/")
.get(wrapAsync(listingController.index))
.post(isLoggedIn,upload.single('listing[image]'),validateListing,wrapAsync(listingController.createListing));

//NEW ROUTE
router.get("/new",isLoggedIn,listingController.renderNewForm);
// SEARCH ROUTE
router.route("/search")
.get(wrapAsync(listingController.searchListing));

// ROUTES for a specific listing (/:id):
// GET   => Show a single listing
// PUT   => Update listing (Only if logged in & owner)
// DELETE  => Delete listing (Only if logged in & owner)
router.route("/:id")
.get(wrapAsync(listingController.showListing))
.put(isLoggedIn,isOwner,upload.single("listing[image]"),validateListing,wrapAsync(listingController.updateListing))
.delete(isLoggedIn,isOwner,wrapAsync(listingController.destroyListing));

//EDIT ROUTE
router.get("/:id/edit",isLoggedIn,isOwner,wrapAsync(listingController.renderEditForm));
module.exports = router;
