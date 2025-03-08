const {CollegeName, HostelName, AdminData } = require("../models/AuthModel");
// Multer configuration for file uploads
const multer = require("multer");
const upload = multer({ dest: "uploads/" }).single("document");
const fs = require("fs");
require('dotenv').config();
const nodemailer = require('nodemailer');
const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS }
});

const adminSignupRequest = async (req, res) => {
    try {
        upload(req, res, async (err) => {
            if(err) return res.status(500).json({ error: "File upload error" });
            const { isAdmin, name, hostel, college, email, password, category, position, phone } = req.body;
            const documentPath = req.file ? req.file.path : '';

            const existingAdmin = await AdminData.findOne({ college });
            if (existingAdmin){
                return res.status(400).json({ 
                    msg: "Super Admin already exists for this college." ,
                })
            }
            const newAdmin = new AdminData({ isAdmin, name, college, hostel, category, position, phone, email, password });
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
                to: process.env.EMAIL_BOSS.trim(), // FixIt Owner Email
                subject: 'New Admin Signup Request',
                html: `
                    <p>New admin signup request:</p>
                    <p><strong>Name:</strong> ${name}</p>
                    <p><strong>Email:</strong> ${email}</p>
                    <p><strong>College:</strong> ${college}</p>
                    <p><strong>Hostel:</strong> ${hostel}</p>
                    <p><strong>Category:</strong> ${category}</p>
                    <p><strong>Position:</strong> ${position}</p>
                    <p><strong>Phone:</strong> ${phone}</p>
                    <p><a href="http://localhost:3000/auth/approve-admin/${email}">Approve</a> | <a href="http://localhost:3000/auth/reject-admin/${email}">Reject</a></p>
                `,
                attachments: attachments.length > 0 ? attachments : []  // Attach file if present
            };

            transporter.sendMail(mailOptions, (err, info) => {
                if (err) {
                    console.error("Error sending email:", err);
                    // Optionally, you may decide not to delete the file in case of email errors
                } else {
                    console.log("Email sent:", info.response);
                }
                // Delete the uploaded file if present
                if (documentPath) {
                    fs.unlink(documentPath, (err) => {
                        if (err) {
                            console.error("Error deleting file:", err);
                        } else {
                            console.log("Uploaded file deleted:", documentPath);
                        }
                    });
                }
                res.json({ message: 'Signup request submitted. Awaiting approval.' });
            });
        });

    } catch (error) {
        console.error('Error processing signup request:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

// API: Approve Admin
const acceptSignup = async (req, res) => {
    const { email } = req.params;
    const admin = await AdminData.findOne({ email });
    if (!admin) return res.status(400).json({ error: 'Admin not found' });

    // Check if college exists, if not add it
    const existingCollege = await CollegeName.findOne({ name: admin.college });
    if (!existingCollege) {
        const newCollege = new CollegeName({ name: admin.college });
        await newCollege.save();
    }
    const existingHostel = await HostelName.findOne({ name: admin.hostel });
    if (!existingHostel) {
        const newCollege = new HostelName({ name: admin.hostel });
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
    const admin = await AdminData.findOne({ email });
    if (!admin) return res.status(400).json({ error: 'Admin not found' });
    // Delete admin request from DB
    await AdminData.deleteOne({ email });

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
    adminSignupRequest,
    rejectSignup,
    acceptSignup
}