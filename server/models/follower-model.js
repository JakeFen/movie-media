const { default: mongoose } = require("mongoose");

const followerSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  followerId: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Follower", followerSchema);
