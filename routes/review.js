const express = require("express");
const router = express.Router({mergeParams: true});//i use this mergeParams:true so that child router can access the id params form parent route
//i use this becaue when i am creating review in post review route in id the real id is not comming and it is showing undefined
const wrapAsync = require("../utils/wrapAsync.js");//we require this to import wrapAsync function
//const ExpressError = require("../utils/ExpressError.js");//we require this for ExpressError
//const {listingSchema,reviewSchema} = require("../schema.js");//first we do npm i joi then we are requiring the schema created using joi for serverside validation 
const {validateReview,isLoggedIn,isReviewAuthor} = require("../middleware.js");
const Review = require("../models/review.js");//in this i am requiring the Review model created at review.js
const Listing = require("../models/listing.js");
const reviewController = require("../controllers/reviews.js");
//Is function me mne wrapAsync isliyea use kiya hai taki async ki errors ko catch kar shake automatically without using try catch
//REVIEWS 
//POST REVIEW ROUTE
router.post("/",isLoggedIn,validateReview,wrapAsync(reviewController.createReview));
//DELETE REVIEW ROUTE
router.delete("/:reviewId",isLoggedIn,isReviewAuthor,wrapAsync(reviewController.destroyReview));
module.exports = router;