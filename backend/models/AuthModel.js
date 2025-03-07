const mongoose = require("mongoose");

const AuthStudentDataSchema = new mongoose.Schema({
    isAdmin : Boolean,
    name : String,
    regNo : String,
    phoneCode : String,
    phone : String,
    email : String,
    password : String,
})


const AuthAdminDataSchema = new mongoose.Schema({
    isAdmin : Boolean,
    name : String,
    category : String,
    position : String,
    phoneCode : String,
    phone : String,
    email : String,
    password : String,
})

const AdminSignupSchema = new mongoose.Schema({
    isAdmin : Boolean,
    name : String,
    college : String,
    hostel : String,
    category : String,
    position : String,
    phone : String,
    email : String,
    password : String,
})



const CollegeNameSchema = new mongoose.Schema({
    name : String
})
const HostelNameSchema = new mongoose.Schema({
    name : String
})

const StudentData = mongoose.model('Registered Students', AuthStudentDataSchema);
const AdminData = mongoose.model('Registered Admins', AuthAdminDataSchema);
const AdminSignDataM = mongoose.model('Singup Admins', AdminSignupSchema);
const HostelName = mongoose.model('Hostels', HostelNameSchema);
const CollegeName = mongoose.model('Colleges', CollegeNameSchema);

module.exports = {
    StudentData,
    AdminData,
    CollegeName,
    HostelName,
    AdminSignDataM
}