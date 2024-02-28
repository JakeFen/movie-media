const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const validator = require("validator");

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    min: 2,
    max: 255,
  },
  lastName: {
    type: String,
    required: true,
    min: 2,
    max: 255,
  },
  email: {
    type: String,
    required: true,
    max: 255,
    min: 6,
  },
  password: {
    type: String,
    required: true,
    min: 6,
    max: 1024,
  },
});

userSchema.statics.login = async function (credentials) {
  const { email, password } = credentials;

  if (!email || !password) throw Error("All fields must be filled");

  const user = await this.findOne({ email });

  if (!user) throw Error("Incorrect email");

  const match = await bcrypt.compare(password, user.password);

  if (!match) throw Error("Incorrect password");

  return user;
};

userSchema.statics.signup = async function (credentials) {
  const { firstName, lastName, email, password } = credentials;

  if (!firstName || !lastName || !email || !password)
    throw Error("All fields must be filled");
  if (!validator.isEmail(email)) throw Error("Email is invalid");
  if (!validator.isStrongPassword(password))
    throw Error("Password is not strong enough");

  const exists = await this.findOne({ email });

  if (exists) throw Error("Email already in use");

  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);

  const user = await this.create({
    firstName,
    lastName,
    email,
    password: hash,
  });

  return user;
};

module.exports = mongoose.model("User", userSchema);
