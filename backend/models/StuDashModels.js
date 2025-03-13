const mongoose = require("mongoose");

const ComplaintSchema = new mongoose.Schema({
    studentId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Registered Students', // Reference to the Students collection
        required: true
    },
    category: {
        type: String,
        required: true
    },
    subCategory: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    content: {
        text: { type: String, required: true },
        media: [
            {
                type: { type: String, enum: ['image', 'video'] }, // Image or Video
                url: { type: String } // Cloudinary URL
            }
        ]
    },
    datePosted: {
        type: Date,
        default: Date.now
    },
    upvotes: {
        type: Number,
        default: 0
    },
    downvotes: {
        type: Number,
        default: 0
    },
    isResolved: {
        type: Boolean,
        default: false
    }
});


const ComplaintData = mongoose.model('Complaints', ComplaintSchema);

module.exports = {
    ComplaintData
}
