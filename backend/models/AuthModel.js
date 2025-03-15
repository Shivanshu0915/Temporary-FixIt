const mongoose = require("mongoose");

const AuthStudentDataSchema = new mongoose.Schema({
    isAdmin : Boolean,
    name : String,
    college : String,
    hostel : String,
    regNo : String,
    phone : String,
    email : String,
    password : String,
})

const AuthAdminDataSchema = new mongoose.Schema({
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

const StudentData = mongoose.model('registered students', AuthStudentDataSchema);
const AdminData = mongoose.model('registered admins', AuthAdminDataSchema);
const HostelName = mongoose.model('hostels', HostelNameSchema);
const CollegeName = mongoose.model('colleges', CollegeNameSchema);

module.exports = {
    StudentData,
    AdminData,
    CollegeName,
    HostelName,
}