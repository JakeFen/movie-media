const Review = require("../models/review-model");

// GET all reviews
const getReviews = async (req, res) => {
  console.log("Get all reviews");
  res.status(200).json("Get all reviews");
};

// GET single review
const getReview = async (req, res) => {
  console.log("Get single review");
  res.status(200).json("Get single review");
};

// POST review
const postReview = async (req, res) => {
  console.log("Post review");
  res.status(200).json("Post review");
};

// DELETE review
const deleteReview = async (req, res) => {
  console.log("Delete review");
  res.status(200).json("Delete review");
};

// UPDATE review
const updateReview = async (req, res) => {
  console.log("Update review");
  res.status(200).json("Update review");
};

module.exports = {
  getReviews,
  getReview,
  postReview,
  deleteReview,
  updateReview,
};
