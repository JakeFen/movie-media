const express = require("express");
const {
  getReviews,
  getReview,
  postReview,
  deleteReview,
  updateReview,
} = require("../controllers/review-controller");

const router = express.Router();

// require auth for all review routes

// GET all reviews
router.get("/", getReviews);

// GET single review
router.get("/:id", getReview);

// POST review
router.post("/", postReview);

// DELETE review
router.delete("/:id", deleteReview);

// UPDATE review
router.patch("/:id", updateReview);

module.exports = router;
