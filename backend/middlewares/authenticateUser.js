const jwt = require("jsonwebtoken");
const { StudentData } = require("../models/AuthModel");
require('dotenv').config();

const authenticateUser = async (req, res, next) => {
    try {
        const token = req.headers.authorization?.split(" ")[1];
        if (!token) {
            return res.status(401).json({ error: "Unauthorized: No token provided" });
        }

        const decoded = jwt.verify(token, process.env.ACCESS_JWT_TOKEN_SECRET);
        if (!decoded.email || !decoded.role) {
            return res.status(403).json({ error: "Invalid token" });
        }

        // Fetch user from DB using email to get the student ID
        const user = await StudentData.findOne({ email: decoded.email });
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }

        // Attach user details to request object
        req.user = {
            id: user._id,   // Add user ID
            email: user.email,
            role: decoded.role
        };

        next(); // Continue to the next middleware/controller
    } catch (error) {
        console.error("Authentication error:", error);
        res.status(403).json({ error: "Invalid or expired token" });
    }
};

module.exports = authenticateUser;
