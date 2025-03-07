const express = require("express");
const router = express.Router();
const { authController } = require("../controller");
const { verifyOtp, resendOtp, getCollege, addCollege, getHostel, addHostel } = require("../controller/authController");
const { login, requestOtp } = authController;

router.post("/login", login);
router.post("/signup", requestOtp);
router.post("/verify-otp", verifyOtp);
router.post("/resend-otp", resendOtp);

router.get("/get-college", getCollege);
router.post("/add-college", addCollege)

router.get("/get-hostel", getHostel);
router.post("/add-hostel", addHostel)

module.exports = router;