const express = require("express");
const router = express.Router();

const { userController } = require("../controller");
const authenticateUser = require("../middlewares/authenticateUser");
const { uploadComplaint, createComplaint, getComplaints } = userController

const upload = require("../config/multerConfig");
const { voteComplaints, getUserVote } = require("../controller/userController");

router.post("/upload-complaint", upload.array("files", 10), uploadComplaint);
router.post("/create-complaint", authenticateUser, createComplaint);
router.post("/vote-complaint", authenticateUser, voteComplaints)

router.get("/fetch-complaint",authenticateUser, getComplaints)
router.get("/get-user-vote/:complaintId", authenticateUser, getUserVote);

module.exports = router;