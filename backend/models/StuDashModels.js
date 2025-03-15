const mongoose = require("mongoose");

// const ComplaintSchema = new mongoose.Schema({
//     studentId: {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: 'Registered Students', // Reference to the Students collection
//         required: true,
//         index: true // Index for faster lookups
//     },
//     category: {
//         type: String,
//         required: true,
//         index: true // Indexing for efficient filtering
//     },
//     subCategory: {
//         type: String,
//         required: true
//     },
//     title: {
//         type: String,
//         required: true
//     },
//     content: {
//         text: { type: String, required: true },
//         media: [
//             {
//                 type: { type: String, enum: ['image', 'video'] }, // Image or Video
//                 url: { type: String } // Cloudinary URL
//             }
//         ]
//     },
//     datePosted: {
//         type: Date,
//         default: Date.now,
//         index: true // Index for sorting
//     },
//     upvotes: {
//         type: Number,
//         default: 0,
//         index: true // Index for sorting
//     },
//     downvotes: {
//         type: Number,
//         default: 0
//     },
//     isResolved: {
//         type: Boolean,
//         default: false
//     }
// });

// // Add compound index for efficient sorting and filtering
// ComplaintSchema.index({ category: 1, datePosted: -1, upvotes: -1 });


// const ComplaintData = mongoose.model('Complaints', ComplaintSchema);

// module.exports = {
//     ComplaintData
// }


// -------------------------- vote, data separate waala -----------------------------------------

const ComplaintSchema = new mongoose.Schema({
    studentId: { type: mongoose.Schema.Types.ObjectId, ref: 'registered students', required: true, index: true },
    category: { type: String, required: true, index: true },
    subCategory: { type: String, required: true },
    title: { type: String, required: true },
    content: {
        text: { type: String, required: true },
        media: [{ type: { type: String, enum: ['image', 'video'] }, url: { type: String } }]
    },
    datePosted: { type: Date, default: Date.now, index: true },
    isResolved: { type: Boolean, default: false }
});

// Index for efficient sorting
ComplaintSchema.index({ category: 1, datePosted: -1 });


const VoteSchema = new mongoose.Schema({
    studentId: { type: mongoose.Schema.Types.ObjectId, ref: 'registered students', required: true, index: true },
    complaintId: { type: mongoose.Schema.Types.ObjectId, ref: 'complaints', required: true, index: true },
    voteType: { type: Number, enum: [1, -1], required: true } // 1 = upvote, -1 = downvote
});

// Ensure a student can vote only once per complaint
VoteSchema.index({ studentId: 1, complaintId: 1 }, { unique: true });

const VoteData = mongoose.model('votes', VoteSchema);
const ComplaintData = mongoose.model('complaints', ComplaintSchema);

module.exports = { 
    ComplaintData,
    VoteData
 };
