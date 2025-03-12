const express = require("express");
const router = express.Router();
const { authController, optionController, superAdminController } = require("../controller");
const { login, requestOtp, verifyOtp, resendOtp, refreshToken, logout } = authController;
const { getCollege, addCollege, getHostel, addHostel} = optionController;
const { adminSignupRequest, rejectSignup, acceptSignup } = superAdminController;

// authController
router.post("/login", login);
router.post("/refresh", refreshToken);
router.post("/logout", logout);

router.post("/signup", requestOtp);
router.post("/verify-otp", verifyOtp);
router.post("/resend-otp", resendOtp);

// optionController
router.get("/get-college", getCollege);
router.post("/add-college", addCollege)
router.get("/get-hostel", getHostel);
router.post("/add-hostel", addHostel)

// superAdminController
router.post("/admin-signup-request", adminSignupRequest);
router.get("/approve-admin/:email", acceptSignup);
router.get("/reject-admin/:email", rejectSignup);

module.exports = router;