const express = require("express");
const { adminSign, adminSignUp, acceptSignup, rejectSignup } = require("../controller/userController");
const router = express.Router();

router.post("/signup-request", adminSignUp);
router.get("/approve-admin/:email", acceptSignup);
router.get("/reject-admin/:email", rejectSignup);
module.exports = router;