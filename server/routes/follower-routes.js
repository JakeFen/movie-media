const express = require("express");
const {
  allFollowers,
  allFollowing,
  postFollower,
  deleteFollower,
  deleteFollowing,
} = require("../controllers/follower-controller");
const requireAuth = require("../middleware/requireAuth");

const router = express.Router();

// require auth for all workout routes
router.use(requireAuth);

// Get all followers
router.get("/followers", allFollowers);

// Get all following
router.get("/following", allFollowing);

// POST follower
router.post("/followers/:id", postFollower);

// DELETE follower
router.delete("/followers/:id", deleteFollower);

// DELETE following
router.delete("/following/:id", deleteFollowing);

module.exports = router;
