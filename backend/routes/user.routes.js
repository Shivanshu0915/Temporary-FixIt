const express = require("express");
const { adminSign, adminSignUp, acceptSignup, rejectSignup } = require("../controller/userController");
const router = express.Router();

// router.post("/signup-request", adminSignUp);
module.exports = router;