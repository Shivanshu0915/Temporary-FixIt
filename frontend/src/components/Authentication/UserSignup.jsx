import React, { useState } from "react";
import { UserSignUpHandler } from "./SignUpHandler";
import { useNavigate } from "react-router-dom";

export function UserSignup({moveToOtp}){
    const navigate = useNavigate();

    const[userSignupData, setUserSignupData] = useState({
        isAdmin : false,
        name : "",
        regNo: "",
        phoneCode: "",
        phone : "",
        email : "",
        password : ""
    })

    const handleChange = (event) => {
        const { name, value } = event.target; // Get field fieldname & value
        setUserSignupData((prevUser) => ({
          ...prevUser, // Spread previous state
          [name]: value, // Update only the changed field
        }));
    };

    return (
        <form>
            <div className="mb-2">
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                    Name
                </label>
                <input type="text" name="name" id="name" placeholder="Enter your name" className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:brown6"
                onChange={handleChange}/>
            </div>
            <div className="mb-2">
                <label htmlFor="authority" className="block text-gray-700 font-medium mb-2">
                    Registration Number
                </label>
                <input type="text" name="regNo" id="RegNo" placeholder="Enter your Registration Number" className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:brown6"
                onChange={handleChange}/>
            </div>
            <label htmlFor="PhoneNo." className="block text-gray-700 font-medium mb-2">
                Phone No.
            </label>
            <div className="mb-2 flex md-4 border rounded-md focus:outline-none focus:ring-2 focus:brown6">
                <select name="phoneCode" id="countryCode" className="rounded-l-lg p-3 focus:ring-2 focus:ring-brown2 focus:border-brown4 bg-gray-50"
                onChange={handleChange}>
                    <option value="" >Select</option>
                    <option value="+91">+91</option>
                    <option value="+01">+1</option>
                    <option value="+44">+44</option>
                    <option value="+61">+61</option>
                </select>
                {/* Input Field */}
                <input type="text" name="phone" placeholder="Enter your phone number" className="w-full p-3 rounded-md focus:outline-none focus:ring-2 focus:brown6"
                onChange={handleChange}/>
            </div>
            <div className="mb-2">
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                    Email
                </label>
                <input type="text" name="email" id="email" placeholder="Enter your email" className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:brown6"
                onChange={handleChange}/>
            </div>
            <div className="mb-3">
                <label htmlFor="password" className="block text-gray-700 font-medium mb-2">
                    Password
                </label>
                <input type="password" name="password" id="password" placeholder="Enter your password" className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:brown6"
                onChange={handleChange}/>
            </div>
            <div className="w-full text-white py-3 shadow-md flex justify-center items-center shadow-brown2 rounded-md hover:shadow-md bg-brown6 hover:bg-badamidark cursor-pointer active:scale-95 transition"
            onClick={async (e)=>{
                e.preventDefault();
                await UserSignUpHandler(userSignupData, navigate, moveToOtp);
            }}>
                Sign Up
            </div>
        </form>
    )
}
