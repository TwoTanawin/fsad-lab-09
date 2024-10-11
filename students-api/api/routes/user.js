// user.routes.js
const express = require("express");
const router = express.Router();
const userService = require("../services/user.service");
// Register endpoint
router.post("/register", userService.registerUser);
module.exports = router;
