const express = require("express");
const router = express.Router();
const { authController } = require("../controller");
const { verifyOtp, resendOtp } = require("../controller/authController");
const { login, signup, requestOtp } = authController;

router.post("/login", login);
router.post("/signup", requestOtp);
router.post("/verify-otp", verifyOtp);
router.post("/resend-otp", resendOtp);

module.exports = router;