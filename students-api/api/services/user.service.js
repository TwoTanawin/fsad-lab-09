const User = require("../models/user"); // Import the User model
const bcrypt = require("bcrypt");

const registerUser = async (req, res) => {
  const { first_name, last_name, email, password } = req.body;
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    throw new Error("Email is already registered");
  }
  // Hash the password
  const hashedPassword = await bcrypt.hash(password, 10);
  // Create a new user
  const newUser = new User({
    first_name,
    last_name,
    email,
    password: hashedPassword,
  });
  // Save the user to the database
  await newUser.save();
  res.status(201).json(newUser);
};
module.exports = {
  registerUser,
};