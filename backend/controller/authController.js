const { StudentData, AdminData} = require("../models/AuthModel");
const { UserSignupValidate, AdminSignupValidate } = require("../utils/AuthZods");
const { sendOtpEmail } = require("../utils/sendOtp");

const login = () => {

}


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
        await StudentData.create({ isAdmin, name, college, hostel, regNo, phone, email, password });
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
    requestOtp,
    verifyOtp,
    resendOtp,
}