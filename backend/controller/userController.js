const upload = require("../config/multerConfig"); // Import multer configuration
const { ComplaintData } = require("../models/StuDashModels");

const uploadComplaint = async (req, res) => {
    try {
        console.log("andar aaya");
        if (!req.files || req.files.length === 0) {
            console.log("length empty files ki")
            return res.status(400).json({ error: "No files uploaded" });
        }

        // Extract file URLs from Multer (Cloudinary)
        const uploadedFiles = req.files.map((file) => ({
            type: file.mimetype.startsWith("image") ? "image" : "video",
            url: file.path, // This should be the Cloudinary URL
        }));
        console.log("file names bhi extract hogye");
        
        res.status(200).json(uploadedFiles);
    } catch (error) {
        console.error("Upload error:", error);
        res.status(500).json({ error: "File upload failed" });
    }
};

const createComplaint = async (req, res) => {
    try {
        const { category, subCategory, title, content } = req.body;
        const studentId = req.user.id; // Extracted from JWT token

        // Validate required fields
        if (!category || !subCategory || !title || !content || !content.text) {
            return res.status(400).json({ error: "All fields are required" });
        }

        // Create a new complaint document
        const newComplaint = new ComplaintData({
            studentId,
            category,
            subCategory,
            title,
            content,
        });

        // Save to database
        await newComplaint.save();

        res.status(201).json({ message: "Complaint submitted successfully", complaint: newComplaint });
    } catch (error) {
        console.error("Complaint submission error:", error);
        res.status(500).json({ error: "Internal server error" });
    }
}

const getComplaints = async (req, res) => {
    try {
        const { category, college, hostel, sortBy, voteFilter, page = 1, limit = 10 } = req.query;

        let filter = {
            category: category || "mess", // Default to "mess"
            "studentId.college": college,
            "studentId.hostel": hostel
        };

        let sortOption = {};
        if (sortBy === "newest") sortOption.datePosted = -1;
        if (sortBy === "oldest") sortOption.datePosted = 1;
        if (voteFilter === "mostUpvoted") sortOption.upvotes = -1;
        if (voteFilter === "mostDownvoted") sortOption.downvotes = -1;

        const complaints = await Complaint.find(filter)
            .populate("studentId", "name college hostel registrationNumber")
            .sort(sortOption)
            .skip((page - 1) * limit) // Pagination
            .limit(parseInt(limit));

        res.json(complaints);
    } catch (error) {
        res.status(500).json({ message: "Server error", error });
    }
};


module.exports = {
    uploadComplaint,
    createComplaint,
    getComplaints
}
