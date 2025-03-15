const upload = require("../config/multerConfig"); // Import multer configuration
const mongoose = require("mongoose")
const { ComplaintData, VoteData} = require("../models/StuDashModels");
const { StudentData } = require("../models/AuthModel");
require('dotenv').config();

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

// -------------------------------- Skip waala -----------------------------------------------------
// const getComplaints = async (req, res) => {
//     try {
//         const { category, college, hostel, sortBy, voteFilter, page = 1, limit = 10 } = req.query;

//         let filter = {
//             category: category || "mess", // Default to "mess"
//             "studentId.college": college,
//             "studentId.hostel": hostel
//         };

//         let sortOption = {};
//         if (sortBy === "newest") sortOption.datePosted = -1;
//         if (sortBy === "oldest") sortOption.datePosted = 1;
//         if (voteFilter === "mostUpvoted") sortOption.upvotes = -1;
//         if (voteFilter === "mostDownvoted") sortOption.downvotes = -1;

//         const complaints = await Complaint.find(filter)
//             .populate("studentId", "name college hostel registrationNumber")
//             .sort(sortOption)
//             .skip((page - 1) * limit) // Pagination
//             .limit(parseInt(limit));

//         res.json(complaints);
//     } catch (error) {
//         res.status(500).json({ message: "Server error", error });
//     }
// };


// ------------------------------------------ Most thik waala cursor pagination ----------------------------
// const getComplaints = async (req, res) => {
//     try {
//         const { category, college, hostel, sortByDate, sortByVotes, cursor, limit = 10 } = req.query;

//         // Fetch student details using studentId to get college and hostel
        
//         const filter = { studentId: { $exists: true } };
//         if (category) filter.category = category;
//         filter['studentId.college'] = student.college;
//         filter['studentId.hostel'] = student.hostel;

//         const sortOptions = {};
//         if (sortByDate === 'dateNewest') sortOptions.datePosted = -1;
//         if (sortByDate === 'dateOldest') sortOptions.datePosted = 1;
//         if (sortByVotes === 'mostUpvoted') sortOptions.upvotes = -1;
//         if (sortByVotes === 'mostDownvoted') sortOptions.downvotes = 1;

//         if (cursor) {
//             filter._id = { $lt: new mongoose.Types.ObjectId(cursor) };
//         }

//         // Fetch complaints with student details
//         const complaints = await ComplaintData.find(filter)
//             .populate('studentId', 'name regNo college hostel') // Get student details
//             .sort({ ...sortOptions, _id: -1 }) // Maintain pagination order
//             .limit(parseInt(limit));

//         const nextCursor = complaints.length ? complaints[complaints.length - 1]._id : null;

//         res.json({ complaints, nextCursor });
//     } catch (error) {
//         console.error('Error fetching complaints:', error);
//         res.status(500).json({ message: 'Internal Server Error' });
//     }
// };


// ------------------------ votes in same db waaala almost correct waala --------------------------------------

// const getComplaints = async (req, res) => {
//     try {
//         const { category, college, hostel, sortVote, sortDate, cursor, limit = 10 } = req.query;

//         // Convert sorting parameters to MongoDB sort object
//         let sortOptions = {};
//         if (sortDate === "newest") sortOptions.datePosted = -1;
//         else if (sortDate === "oldest") sortOptions.datePosted = 1;

//         if (sortVote === "mostUpvoted") sortOptions.upvotes = -1;
//         else if (sortVote === "mostDownvoted") sortOptions.upvotes = 1;

//         // Base query conditions
//         let query = {
//             category,
//             "student.college": college,
//             "student.hostel": hostel,
//         };

//         // Cursor-based pagination (for infinite scrolling)
//         if (cursor) {
//             query._id = { $lt: cursor }; // Fetch complaints older than the last loaded one
//         }

//         // Fetch complaints, populate student details
//         const complaints = await ComplaintData.find(query)
//             .populate({
//                 path: "studentId",
//                 select: "name regNo college hostel",
//                 model: StudentData,
//             })
//             .sort(sortOptions)
//             .limit(parseInt(limit) + 1); // Fetch an extra document to determine next cursor

//         // Determine the next cursor for infinite scrolling
//         const nextCursor = complaints.length > limit ? complaints[limit - 1]._id : null;
//         if (nextCursor) complaints.pop(); // Remove extra document
//         console.log(complaints);

//         res.json({ complaints, nextCursor });
//     } catch (error) {
//         console.error("Error fetching complaints:", error);
//         res.status(500).json({ message: "Internal Server Error" });
//     }
// };

// ---------------------------------- Votes stored separately waala ------------------------------------
// const getComplaints = async (req, res) => {
//     try {
//         const { category, college, hostel, sortVote, sortDate, cursor, limit = 10 } = req.query;

//         let sortOptions = {};
//         if (sortDate === "newest") sortOptions.datePosted = -1;
//         else if (sortDate === "oldest") sortOptions.datePosted = 1;

//         let query = {
//             category,
//             "student.college": college,
//             "student.hostel": hostel,
//         };

//         if (cursor) {
//             query._id = { $lt: cursor };
//         }

//         let complaints = await ComplaintData.find(query)
//             .populate({
//                 path: "studentId",
//                 select: "name regNo college hostel",
//                 model: StudentData,
//             })
//             .sort(sortOptions)
//             .limit(parseInt(limit) + 1);

//         for (let complaint of complaints) {
//             const upvotes = await VoteData.countDocuments({ complaintId: complaint._id, type: "upvote" });
//             const downvotes = await VoteData.countDocuments({ complaintId: complaint._id, type: "downvote" });
//             complaint._doc.upvotes = upvotes;
//             complaint._doc.downvotes = downvotes;
//         }

//         const nextCursor = complaints.length > limit ? complaints[limit - 1]._id : null;
//         if (nextCursor) complaints.pop();

//         res.json({ complaints, nextCursor });
//     } catch (error) {
//         console.error("Error fetching complaints:", error);
//         res.status(500).json({ message: "Internal Server Error" });
//     }
// };


const getComplaints = async (req, res) => {
    try {
        console.log("getComplaints mai aaya");
        const { category, college, hostel, sortByDate, sortByVotes, cursor, limit = 10 } = req.query;
        const userId = req.user.id; // Get logged-in user ID from request (Assuming authentication middleware)

        const matchStage = { studentId: { $exists: true } };
        if (category) matchStage.category = category;
        // if (cursor) matchStage._id = { $lt: new mongoose.Types.ObjectId(cursor) };

        // ✅ Correct cursor logic based on sorting order
        if (cursor) {
            if (sortByDate === "oldest") {
                matchStage._id = { $gt: new mongoose.Types.ObjectId(cursor) }; // Oldest => Fetch newer complaints
            } else {
                matchStage._id = { $lt: new mongoose.Types.ObjectId(cursor) }; // Newest => Fetch older complaints
            }
        }

        const complaints = await ComplaintData.aggregate([
            { $match: matchStage }, // Filter by category and cursor-based pagination

            // Lookup student details (college, hostel, name, regNo)
            {
                $lookup: {
                    from: "registered students",
                    localField: "studentId",
                    foreignField: "_id",
                    as: "student"
                }
            },
            { $unwind: "$student" }, // Convert student array to an object

            // **Filter by college and hostel**
            {
                $match: {
                    "student.college": college,
                    "student.hostel": hostel
                }
            },

            // Lookup votes for each complaint
            {
                $lookup: {
                    from: "votes",
                    localField: "_id",
                    foreignField: "complaintId",
                    as: "votes"
                }
            },

            // Calculate upvotes and downvotes + Fetch user's vote
            {
                $addFields: {
                    upvotes: {
                        $size: {
                            $filter: { input: "$votes", as: "v", cond: { $eq: ["$$v.voteType", 1] } }
                        }
                    },
                    downvotes: {
                        $size: {
                            $filter: { input: "$votes", as: "v", cond: { $eq: ["$$v.voteType", -1] } }
                        }
                    },
                    netVotes: { $subtract: ["$upvotes", "$downvotes"] }, // netVotes = upvotes - downvotes
                    userVote: {
                        $let: {
                            vars: {
                                userVoteDoc: {
                                    $arrayElemAt: [
                                        {
                                            $filter: {
                                                input: "$votes",
                                                as: "v",
                                                cond: { $eq: ["$$v.studentId", new mongoose.Types.ObjectId(userId)] }
                                            }
                                        },
                                        0
                                    ]
                                }
                            },
                            in: { $ifNull: ["$$userVoteDoc.voteType", null] } // If user hasn't voted, return null
                        }
                    }
                }
            },

            // Sorting (default: newest first)
            {
                $sort: {
                    ...(sortByDate === "newest" ? { datePosted: -1 } : {}),
                    ...(sortByDate === "oldest" ? { datePosted: 1 } : {}),
                    ...(sortByVotes === "mostUpvoted" ? { netVotes: -1 } : {}),
                    ...(sortByVotes === "mostDownvoted" ? { netVotes: 1 } : {}),
                    _id: -1 // Maintain pagination order
                }
            },

            { $limit: parseInt(limit) } // Limit results for pagination
        ]);

        // Extract next cursor for pagination
        const nextCursor = complaints.length ? complaints[complaints.length - 1]._id : null;

        console.log("complaints data fetch hua");
        console.log(complaints);
        res.json({ complaints, nextCursor });
    } catch (error) {
        console.error("Error fetching complaints:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};


// ------------------------------------------------------------------------
// const voteComplaints = async (req, res) => {
//     try {
//         const { complaintId, studentId, voteType } = req.body; // voteType: "upvote" or "downvote"

//         if (!complaintId || !studentId || !["upvote", "downvote"].includes(voteType)) {
//             return res.status(400).json({ message: "Invalid request data" });
//         }

//         // Find the complaint in the database
//         const complaint = await ComplaintData.findById(complaintId);
//         if (!complaint) {
//             return res.status(404).json({ message: "Complaint not found" });
//         }

//         // Check if the user has already voted
//         const hasUpvoted = complaint.upvotedBy.includes(studentId);
//         const hasDownvoted = complaint.downvotedBy.includes(studentId);

//         // Handle voting logic
//         if (voteType === "upvote") {
//             if (hasUpvoted) {
//                 // User clicks again → Remove upvote (Neutral state)
//                 complaint.upvotedBy = complaint.upvotedBy.filter(id => id !== studentId);
//             } else {
//                 // Remove previous downvote (if any) and add upvote
//                 complaint.downvotedBy = complaint.downvotedBy.filter(id => id !== studentId);
//                 complaint.upvotedBy.push(studentId);
//             }
//         } else if (voteType === "downvote") {
//             if (hasDownvoted) {
//                 // User clicks again → Remove downvote (Neutral state)
//                 complaint.downvotedBy = complaint.downvotedBy.filter(id => id !== studentId);
//             } else {
//                 // Remove previous upvote (if any) and add downvote
//                 complaint.upvotedBy = complaint.upvotedBy.filter(id => id !== studentId);
//                 complaint.downvotedBy.push(studentId);
//             }
//         }

//         // Update upvote/downvote counts
//         complaint.upvotes = complaint.upvotedBy.length;
//         complaint.downvotes = complaint.downvotedBy.length;

//         await complaint.save();
//         res.json({ message: "Vote updated successfully", upvotes: complaint.upvotes, downvotes: complaint.downvotes });

//     } catch (error) {
//         console.error("Error processing vote:", error);
//         res.status(500).json({ message: "Internal Server Error" });
//     }
// };

// get studentID -------------------

const getStudentId = async (req, res) => {
    try {
        const authHeader = req.headers.authorization;
        if (!authHeader || !authHeader.startsWith("Bearer ")) {
            return res.status(401).json({ message: "Unauthorized" });
        }

        const token = authHeader.split(" ")[1]; // Extract token
        const decoded = jwt.verify(token, process.env.ACCESS_JWT_TOKEN_SECRET); // Verify token

        const email = decoded.email; // Extract email from token
        if (!email) {
            return res.status(400).json({ message: "Invalid token data" });
        }

        const student = await StudentData.findOne({ email }); // Fetch student data
        if (!student) {
            return res.status(404).json({ message: "Student not found" });
        }

        res.json({ studentId: student.studentId }); // Return studentId
    } catch (error) {
        console.error("Error fetching student ID:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
}

// ---------------------- vote, data sepearate waala =-----------------------------------------------

// const voteComplaints = async (req, res) => {
//     try {
//         const { complaintId, voteType } = req.body; // voteType: 1 for upvote, -1 for downvote, 0 to remove vote
//         const studentId = req.user.id;
        
//         if (!complaintId || !studentId || ![1, -1, 0].includes(voteType)) {
//             return res.status(400).json({ message: "Invalid request data" });
//         }

//         const existingVote = await VoteData.findOne({ complaintId, studentId });

//         if (voteType === 0) {
//             // Remove vote if user wants to neutralize
//             if (existingVote) {
//                 await VoteData.deleteOne({ _id: existingVote._id });
//             }
//         } else {
//             if (existingVote) {
//                 // Update existing vote
//                 existingVote.voteType = voteType;
//                 await existingVote.save();
//             } else {
//                 // Add new vote
//                 await VoteData.create({ complaintId, studentId, voteType });
//             }
//         }

//         // Calculate total upvotes & downvotes dynamically
//         const upvotes = await VoteData.countDocuments({ complaintId, voteType: 1 });
//         const downvotes = await VoteData.countDocuments({ complaintId, voteType: -1 });

//         res.json({ message: "Vote updated successfully", upvotes, downvotes });
//     } catch (error) {
//         console.error("Error processing vote:", error);
//         res.status(500).json({ message: "Internal Server Error" });
//     }
// };

const voteComplaints = async (req, res) => {
    try {
        const { complaintId, voteType } = req.body;
        const studentId = req.user?.id;

        console.log("Received vote request:", { complaintId, voteType, studentId });

        if (!complaintId || !studentId || ![1, -1, 0].includes(voteType)) {
            return res.status(400).json({ message: "Invalid request data" });
        }

        let existingVote = await VoteData.findOne({ complaintId, studentId });

        if (existingVote) {
            if (voteType === 0) {
                // If voteType is 0, remove the vote
                await VoteData.deleteOne({ _id: existingVote._id });
                existingVote = null;
            } else {
                // Update voteType if the user changes their vote
                existingVote.voteType = voteType;
                await existingVote.save();
            }
        } else {
            // Create new vote if none exists
            existingVote = await VoteData.create({ complaintId, studentId, voteType });
        }

        // Fetch updated counts
        const upvotes = await VoteData.countDocuments({ complaintId, voteType: 1 });
        const downvotes = await VoteData.countDocuments({ complaintId, voteType: -1 });

        res.json({ success: true, upvotes, downvotes, userVote: existingVote ? existingVote.voteType : null });
    } catch (error) {
        console.error("Error processing vote:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};


const getUserVote = async (req, res) => {
    try {
        const { complaintId } = req.params;
        const studentId = req.user.id; // Extract studentId from token

        if (!complaintId || !studentId) {
            return res.status(400).json({ message: "Invalid request data" });
        }

        const existingVote = await VoteData.findOne({ complaintId, studentId });

        res.json({
            success: true,
            userVote: existingVote ? existingVote.voteType : null,
        });
    } catch (error) {
        console.error("Error fetching user vote:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};


module.exports = {
    uploadComplaint,
    createComplaint,
    getComplaints,
    voteComplaints,
    getStudentId,
    getUserVote
}
