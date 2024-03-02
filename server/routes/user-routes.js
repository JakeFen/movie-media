const express = require("express");
const { loginUser, signupUser } = require("../controllers/user-controller");

const router = express.Router();

// Login user
router.post("/login", loginUser);

// Signup user
router.post("/signup", signupUser);

module.exports = router;
