const express = require("express");
const router = express.Router();

const { userController } = require("../controller");
const authenticateUser = require("../middlewares/authenticateUser");
const { uploadComplaint, createComplaint, getComplaints } = userController

const upload = require("../config/multerConfig");

router.post("/upload-complaint", upload.array("files", 10), uploadComplaint);
router.post("/create-complaint", authenticateUser, createComplaint);

router.get("/get-complaints", getComplaints)

module.exports = router;