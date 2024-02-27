const express = require("express");
const {
  allFollowers,
  allFollowing,
} = require("../controllers/follower-controller");

const router = express.Router();

// Get all followers
router.get("/followers/:userId", allFollowers);

// Get all following
router.get("/following/:userId", allFollowing);

module.exports = router;
