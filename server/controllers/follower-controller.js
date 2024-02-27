const Follower = require("../models/follower-model");

// GET all followers
const allFollowers = async (req, res) => {
  res.status(200).json("Get all followers");
};

// GET all following
const allFollowing = async (req, res) => {
  res.status(200).json("Get all following");
};

module.exports = { allFollowers, allFollowing };
