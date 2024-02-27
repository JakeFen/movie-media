const User = require("../models/user-model");

// Login user
const loginUser = async (req, res) => {
  const { email, password } = req.body;

  console.log("Login user");
  res.status(200).json("Login user");
};

// Signup user
const signupUser = async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  console.log("Signup user");
  res.status(200).json("Signup user");
};

module.exports = { loginUser, signupUser };
