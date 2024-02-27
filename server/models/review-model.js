const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  productId: {
    type: String,
    required: true,
  },
  productBackdrop: {
    type: String,
    required: true,
  },
  productTitle: {
    type: String,
    required: true,
  },
  userReview: {
    type: String,
  },
  userRating: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("Review", reviewSchema);
