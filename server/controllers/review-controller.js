const Review = require("../models/review-model");
const mongoose = require("mongoose");

// GET all reviews
const getReviews = async (req, res) => {
  const userId = req.user._id;

  const reviews = await Review.find({ userId }).sort({ createdAt: -1 });

  res.status(200).json(reviews);
};

// GET single review
const getReview = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).json({ error: "Invalid id" });

  const review = await Review.findById(id);

  if (!review) return res.status(400).json({ error: "No review found" });

  res.status(200).json(review);
};

// create review
const createReview = async (req, res) => {
  const { productId, productBackdrop, productTitle, userReview, userRating } =
    req.body;

  if (!userRating) res.status(400).json("Please leave a rating");

  const user_id = req.user._id;

  try {
    const review = await Review.create({
      userId: user_id,
      productId,
      productBackdrop,
      productTitle,
      userReview,
      userRating,
    });
    res.status(200).json(review);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// DELETE review
const deleteReview = async (req, res) => {
  const { id } = req.params;

  const review = await Review.findOneAndDelete({ _id: id });

  if (!review) {
    return res.status(404).json({ error: "No review found" });
  }

  res.status(200).json(review);
};

// UPDATE review
const updateReview = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).json({ error: "Invaid id" });

  const review = await Review.findOneAndUpdate(
    { _id: id },
    { ...req.body },
    { new: true }
  );

  if (!review) res.status(404).json({ error: "No review found" });

  res.status(200).json(review);
};

module.exports = {
  getReviews,
  getReview,
  createReview,
  deleteReview,
  updateReview,
};
