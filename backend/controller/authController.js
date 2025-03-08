const { StudentData, AdminData, CollegeName, HostelName, AdminSignDataM } = require("../models/AuthModel");
const { UserSignupValidate, AdminSignupValidate } = require("../utils/AuthZods");
const { sendOtpEmail } = require("../utils/sendOtp");

const login = () => {

}

// OTP functions
const otpStore = new Map();

const requestOtp = async (req, res) => {
    const signupData = req.body;
    console.log(signupData);
    const {email} = signupData;
    let user = signupData.isAdmin ? await AdminSignDataM.findOne({email}) : await StudentData.findOne({email});
    if(user){
        return res.status(400).json({ 
            msg: "User already exists" ,
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
        return res.status(400).json({ msg: "Invalid OTP. Please try again." });
    }

    // OTP is correct, store user in DB
    const { isAdmin, name, phoneCode, phone, email: userEmail, password, regNo, category, position } = userData;

    if (isAdmin) {
        await AdminData.create({ isAdmin, name, category, position, phoneCode, phone, email: userEmail, password });
    } else {
        await StudentData.create({ isAdmin, name, regNo, phoneCode, phone, email: userEmail, password });
    }

    otpStore.delete(email);
    res.json({ msg: "User registered successfully!" });
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

// -------------------------- College related stuff ------------------------------------------------
const getCollege = async(req, res)=>{
    try{
        const collegeOptions = await CollegeName.find();
        res.json(collegeOptions.map(option => option.name));
    }
    catch(error){
        res.status(500).json({ message: "Error fetching options", error });
    }
}

const addCollege = async(req, res)=>{
    try{
        const { name } = req.body;
        if (!name) return res.status(400).json({ message: "Option name is required" });

        await CollegeName.create({ name });

        res.status(201).json({ message: "Option added successfully" });
    } catch (error) {
        res.status(500).json({ message: "Error adding option", error });
    }
}

// ------------------ Hostels ---------------------------------------------------------
const getHostel = async(req, res)=>{
    try{
        const hostelOptions = await HostelName.find();
        res.json(hostelOptions.map(option => option.name));
    }
    catch(error){
        res.status(500).json({ message: "Error fetching options", error });
    }
}

const addHostel = async(req, res)=>{
    try{
        const { name } = req.body;
        if (!name) return res.status(400).json({ message: "Option name is required" });

        await HostelName.create({ name });

        res.status(201).json({ message: "Option added successfully" });
    } catch (error) {
        res.status(500).json({ message: "Error adding option", error });
    }
}

module.exports = {
    login,
    requestOtp,
    verifyOtp,
    resendOtp,
    getCollege,
    addCollege,
    getHostel,
    addHostel
}