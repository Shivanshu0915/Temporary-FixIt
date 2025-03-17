const { StudentData, AdminData} = require("../models/AuthModel");
const { UserSignupValidate, AdminSignupValidate } = require("../utils/AuthZods");
const { sendOtpEmail } = require("../utils/sendOtp");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require('dotenv').config();

const login = async (req, res) => {
    const { email, password, isAdmin } = req.body;
    const role = isAdmin ? "admin" : "user";

    try {
        const user = isAdmin ? await AdminData.findOne({ email }) : await StudentData.findOne({ email });
        if (!user) {
            return res.status(401).json({ message: "Invalid credentials" });
        }
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ message: "Invalid credentials" });
        }

        // 🔥 Check if JWT secrets are defined
        if (!process.env.ACCESS_JWT_TOKEN_SECRET || !process.env.REFRESH_JWT_TOKEN_SECRET) {
            console.error("JWT secrets are missing!");
            return res.status(500).json({ message: "Server error: Missing JWT secrets" });
        }
        // Generate JWT tokens
        const accessToken = jwt.sign(
            { email, role },
            process.env.ACCESS_JWT_TOKEN_SECRET,
            { expiresIn: "15m" }
        );
        const refreshToken = jwt.sign(
            { email, role },
            process.env.REFRESH_JWT_TOKEN_SECRET,
            { expiresIn: "7d" }
        );

        // Set refresh token in HTTP-only cookie
        res.cookie("refreshToken", refreshToken, {
            httpOnly: true,
            // secure: process.env.NODE_ENV === "production",
            secure: false,
            // sameSite: "None",
            sameSite: "Lax",
        });

        res.json({ accessToken, role });

    } catch (error) {
        console.error("Login error:", error);
        res.status(500).json({ message: "Server error" });
    }
};


// Refresh Token Handler
const refreshToken = (req, res) => {
    console.log("Checking refresh token...");
    const token = req.cookies.refreshToken;
    if (!token)    return res.status(401).json({ message: "No refresh token" });

    jwt.verify(token, process.env.REFRESH_JWT_TOKEN_SECRET, (err, decoded) => {
        if (err) {
            console.log("Invalid or expired refresh token");
            
            // CLEAR COOKIE WHEN TOKEN IS INVALID/EXPIRED
             // in production apps
            // res.clearCookie("refreshToken", {
            //     httpOnly: true,
            //     secure: process.env.NODE_ENV === "production",
            //     sameSite: "None",
            // });

            // in local testing
            res.clearCookie("refreshToken");
            return res.status(403).json({ message: "Invalid refresh token" });
        }

        const { email, role } = decoded;
        const accessToken = jwt.sign({ email, role }, process.env.ACCESS_JWT_TOKEN_SECRET, { expiresIn: "15m" });

        console.log("Token refreshed successfully");

        res.json({ accessToken,role });
    });
};


// Logout - Clear refresh token
const logout = (req, res) => {
    // res.clearCookie("refreshToken");
    res.clearCookie("refreshToken", {
        httpOnly: true,
        sameSite: "Lax",
    });
    res.json({ message: "Logged out" });
};

// OTP functions
const otpStore = new Map();

const requestOtp = async (req, res) => {
    const signupData = req.body;
    console.log(signupData);
    const {email, college, isAdmin} = signupData;
    let user = signupData.isAdmin ? await AdminData.findOne({college}) : await StudentData.findOne({email});
    if(user){
        if(isAdmin){
            return res.status(400).json({ 
                msg: "Super Admin already exists for this college." ,
            })
        }else{
            return res.status(400).json({ 
                msg: "User already exists" ,
            })
        }
    }
    if(isAdmin) user = await AdminData.findOne({email});
    if(user){
        return res.status(400).json({ 
            msg: "Super Admin already exists with this email." ,
        })
    }
    let parseData = (signupData.isAdmin ? AdminSignupValidate : UserSignupValidate).safeParse(signupData);
    if (!parseData.success) {
        return res.status(411).json({
            msg: "Validation failed!",
            errors: parseData.error.format()
        });
    }
    const otp = Math.floor(100000 + Math.random() * 900000); // 6-digit OTP
    const expiresAt = Date.now() + 5 * 60 * 1000; // OTP expires in 5 minutes

    otpStore.set(email, { otp, expiresAt, userData: signupData });
    await sendOtpEmail(email, otp);
    res.json({ msg: "OTP sent successfully! Please verify." });
};


const verifyOtp = async (req, res) => {
    const { email, otp } = req.body;
    if (!otpStore.has(email)) {
        return res.status(400).json({ msg: "OTP expired or not requested. Please request again." });
    }
    const { otp: storedOtp, expiresAt, userData } = otpStore.get(email);

    if (Date.now() > expiresAt) {
        otpStore.delete(email);
        return res.status(400).json({ msg: "OTP expired. Please request again." });
    }
    if (otp !== storedOtp.toString()) {
        otpStore.delete(email);
        return res.status(400).json({ msg: "Invalid OTP. Please try again." });
    }
    const {isAdmin } = userData;
    // OTP is correct, store user in DB
    if (isAdmin) {
        otpStore.delete(email);
        return res.json({ msg: "Otp verified successfully!" });
    } else {
        
        const { isAdmin, name, college, hostel, regNo, phone, email, password } = userData;
        const newUser = new StudentData({ isAdmin, name, college, hostel, regNo, phone, email, password });
        newUser.password = await bcrypt.hash(password, 10);
        newUser.save();
        otpStore.delete(email);
        return res.json({ msg: "User registered successfully!" });
    }   
};

const resendOtp = async (req, res) => {
    const { email } = req.body;
    if (!otpStore.has(email)) {
        return res.status(400).json({ msg: "No OTP request found. Please sign up again." });
    }
    const otp = Math.floor(100000 + Math.random() * 900000); // Generate a new OTP
    const expiresAt = Date.now() + 5 * 60 * 1000; // Reset expiration time

    otpStore.set(email, { otp, expiresAt, userData: otpStore.get(email).userData });
    await sendOtpEmail(email, otp);
    res.json({ msg: "New OTP sent successfully!" });
};

module.exports = {
    login,
    logout,
    refreshToken,
    requestOtp,
    verifyOtp,
    resendOtp,
}