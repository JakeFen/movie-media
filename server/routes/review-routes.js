const express = require("express");
const {
  getReviews,
  getReview,
  deleteReview,
  updateReview,
  createReview,
} = require("../controllers/review-controller");
const requireAuth = require("../middleware/requireAuth");

const router = express.Router();

// require auth for all workout routes
router.use(requireAuth);

// GET all reviews
router.get("/", getReviews);

// GET single review
router.get("/:id", getReview);

// POST review
router.post("/", createReview);

// DELETE review
router.delete("/:id", deleteReview);

// UPDATE review
router.patch("/:id", updateReview);

module.exports = router;
