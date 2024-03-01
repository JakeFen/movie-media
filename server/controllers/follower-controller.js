const Follower = require("../models/follower-model");
const mongoose = require("mongoose");

// GET all followers
const allFollowers = async (req, res) => {
  const user_id = req.user._id;

  const followers = await Follower.find({ userId: user_id });

  res.status(200).json(followers);
};

// GET all following
const allFollowing = async (req, res) => {
  const user_id = req.user._id;

  const followers = await Follower.find({ followerId: user_id });

  res.status(200).json(followers);
};

// GET all following
const postFollower = async (req, res) => {
  const { id } = req.params;
  const user_id = req.user._id;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).json({ error: "Invalid id" });

  if (user_id.equals(id))
    return res.status(404).json({ error: "Cannot follow yourself" });

  const exisitingFollower = await Follower.findOne({
    userId: user_id,
    followerId: id,
  });

  if (exisitingFollower)
    return res.status(404).json({ error: "Already following this user" });

  try {
    const follower = await Follower.create({
      userId: user_id,
      followerId: id,
    });
    res.status(200).json(follower);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// GET all following
const deleteFollower = async (req, res) => {
  const { id } = req.params;
  const user_id = req.user._id;

  const follower = await Follower.findOneAndDelete({
    userId: id,
    followerId: user_id,
  });

  res.status(200).json(follower);
};

// GET all following
const deleteFollowing = async (req, res) => {
  const { id } = req.params;
  const user_id = req.user._id;

  const follower = await Follower.findOneAndDelete({
    userId: user_id,
    followerId: id,
  });

  res.status(200).json(follower);
};

module.exports = {
  allFollowers,
  allFollowing,
  postFollower,
  deleteFollower,
  deleteFollowing,
};
