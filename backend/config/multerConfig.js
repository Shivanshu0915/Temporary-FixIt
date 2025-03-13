const multer = require("multer");
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const cloudinary = require("./cloudinaryConfig");

// Define storage settings
const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: "fixit_complaints",  // Folder name in Cloudinary
        allowed_formats: ["jpg", "jpeg", "png", "mp4", "mov"],  // Allowed file types
    },
});

// Initialize Multer with Cloudinary storage
const upload = multer({ storage });

module.exports = upload;
