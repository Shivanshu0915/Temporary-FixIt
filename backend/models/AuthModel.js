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

const StudentData = mongoose.model('Registered Students', AuthStudentDataSchema);
const AdminData = mongoose.model('Registered Admins', AuthAdminDataSchema);

module.exports = {
    StudentData,
    AdminData,
}