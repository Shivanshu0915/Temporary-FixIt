const multer = require("multer");
// const path = require("path");
// const fs = require("fs");
const { AdminSignDataM, CollegeName } = require("../models/AuthModel");

// Multer configuration for file uploads
const upload = multer({ dest: "uploads/" }).single("document");

require('dotenv').config();

const nodemailer = require('nodemailer');

// Email Transporter
const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS }
});


const adminSignUp = async (req, res) => {
    try {
        upload(req, res, async (err) => {
            if (err) return res.status(500).json({ error: "File upload error" });

            const { isAdmin, name, hostel, college, email, password, category, position, phone } = req.body;
            const documentPath = req.file ? req.file.path : '';

            // Check if admin already requested
            const existingAdmin = await AdminSignDataM.findOne({ email });
            if (existingAdmin) return res.status(400).json({ error: 'Admin request already submitted.' });

            // const hashedPassword = await bcrypt.hash(password, 10);
            const newAdmin = new AdminSignDataM({ isAdmin, name, college, hostel, category, position, phone, email, password });

            await newAdmin.save();

            // Read file contents (if file is uploaded)
            let attachments = [];
            if (req.file) {
                attachments.push({
                    filename: req.file.originalname,  // Keep original filename
                    path: documentPath,              // File path
                    contentType: req.file.mimetype   // Preserve MIME type
                });
            }

            // Send email to FixIt owner with attachment
            const mailOptions = {
                from: process.env.EMAIL_USER.trim(),
                to: "shivanshupathak9412@gmail.com", // FixIt Owner Email
                subject: 'New Admin Signup Request',
                html: `
                    <p>New admin signup request:</p>
                    <p><strong>Name:</strong> ${name}</p>
                    <p><strong>Email:</strong> ${email}</p>
                    <p><strong>College:</strong> ${college}</p>
                    <p><strong>Category:</strong> ${category}</p>
                    <p><strong>Position:</strong> ${position}</p>
                    <p><strong>Phone:</strong> ${phone}</p>
                    <p><a href="http://localhost:3000/user/approve-admin/${email}">Approve</a> | <a href="http://localhost:3000/user/reject-admin/${email}">Reject</a></p>
                `,
                attachments: attachments.length > 0 ? attachments : []  // Attach file if present
            };

            transporter.sendMail(mailOptions);
            res.json({ message: 'Signup request submitted. Awaiting approval.' });
        });

    } catch (error) {
        console.error('Error processing signup request:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

// API: Approve Admin
const acceptSignup = async (req, res) => {
    const { email } = req.params;

    const admin = await AdminSignDataM.findOne({ email });
    if (!admin) return res.status(400).json({ error: 'Admin not found' });

    // Check if college exists, if not add it
    const existingCollege = await CollegeName.findOne({ name: admin.college });
    if (!existingCollege) {
        const newCollege = new CollegeName({ name: admin.college });
        await newCollege.save();
    }

    // Send approval email to admin
    const mailOptions = {
        from: process.env.EMAIL_USER.trim(),
        to: email,
        subject: 'Your Admin Signup is Approved!',
        html: `<p>Your admin account for ${admin.college} has been approved. You can now login.</p>`
    };

    transporter.sendMail(mailOptions);
    res.send('Admin approved successfully.');
};

// API: Reject Admin
const rejectSignup = async (req, res) => {
    const { email } = req.params;

    const admin = await AdminSignDataM.findOne({ email });
    if (!admin) return res.status(400).json({ error: 'Admin not found' });

    // Delete admin request from DB
    await AdminSignDataM.deleteOne({ email });

    // Send rejection email to admin
    const mailOptions = {
        from: process.env.EMAIL_USER.trim(),
        to: email,
        subject: 'Your Admin Signup is Rejected',
        html: `<p>Your request to register as an admin has been rejected.</p>`
    };

    transporter.sendMail(mailOptions);
    res.send('Admin rejected.');
}



module.exports = {
    adminSignUp,
    rejectSignup,
    acceptSignup
}