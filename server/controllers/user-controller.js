const User = require("../models/user-model");
const jwt = require("jsonwebtoken");

const createToken = (_id) => {
  return jwt.sign({ _id }, process.env.SECRET, { expiresIn: "3d" });
};

// Login user
const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.login({ email, password });

    // create a token
    const token = createToken(user);

    // Extract necessary user data
    const userData = {
      _id: user._id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
    };

    res.status(200).json({ userData, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Signup user
const signupUser = async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  try {
    const user = await User.signup({ firstName, lastName, email, password });

    // create a token
    const token = createToken(user._id);

    // Extract necessary user data
    const userData = {
      _id: user._id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
    };

    res.status(200).json({ userData, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { createToken, loginUser, signupUser };
