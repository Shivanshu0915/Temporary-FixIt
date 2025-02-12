import React, { useState } from "react";
import { AdminSignUpHandler } from "./SignUpHandler";
import { useNavigate } from "react-router";

export function AdminSignup({moveToOtp}){
    const navigate = useNavigate();

    const [authorityType, setAuthorityType] = useState("");
    const [position, setPosition] = useState("");
    const [isAuthorityTypeOpen, setIsAuthorityTypeOpen] = useState(false);
    const [isPositionOpen, setIsPositionOpen] = useState(false);

    const authorityTypes = [
        { value: "mess", label: "Mess" },
        { value: "hostel", label: "Hostel" },
        { value: "warden", label: "Warden" },
        { value: "chief_warden", label: "Chief Warden" },
    ];

    const getPositionOptions = () => {
        switch (authorityType) {
            case "mess":
                return [
                    { value: "mess_manager", label: "Mess Manager" },
                    { value: "store_keeper", label: "Store Keeper" },
                ];
            case "hostel":
                return [
                    { value: "caretaker", label: "Caretaker" },
                    { value: "warden", label: "Warden" },
                    { value: "technician", label: "Computer Centre Technician" },
                ];
            default:
                return [];
        }
    };

    const[adminSignupData, setAdminSignupData] = useState({
        isAdmin : true,
        name : "",
        category: "",
        position : "",
        phoneCode: "",
        phone : "",
        email : "",
        password : ""
    })


    const handleChange = (event) => {
        const { name, value } = event.target; // Get field fieldname & value
        setAdminSignupData((prevAdmin) => ({
            ...prevAdmin, // Spread previous state
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

            <div className="mb-2 relative">
                <label className="block font-medium text-gray-700 mb-2">
                    Category
                </label>
                <button type="button" onClick={() => setIsAuthorityTypeOpen(!isAuthorityTypeOpen)}
                 className="w-full p-3 text-left border rounded-md focus:outline-none focus:ring-2 focus:brown6 flex justify-between items-center">
                    <span>{authorityType ? authorityTypes.find(type => type.value === authorityType)?.label : "Select category"}</span>
                    <svg className={`w-5 h-5 transition-transform ${isAuthorityTypeOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                </button>

                {isAuthorityTypeOpen && (
                    <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg">
                        {authorityTypes.map((type) => (
                            <button key={type.value} type="button" className="w-full px-3 py-2 text-left hover:bg-gray-100 focus:outline-none"
                            onClick={() => {
                                setAuthorityType(type.value);
                                setIsAuthorityTypeOpen(false);
                                setAdminSignupData((prevData)=>({
                                    ...prevData,
                                    category : type.label,
                                }))
                            }}>
                                {type.label}
                            </button>
                        ))}
                    </div>
                )}
            </div>

            {authorityType != "warden" && authorityType != "chief_warden" && authorityType != "" && (
                <div className="mb-2 relative">
                    <label className="block mb-2 font-medium text-gray-700">
                        Position
                    </label>
                    <button type="button" className="w-full p-3 text-left border rounded-md focus:outline-none focus:ring-2 focus:brown6 flex justify-between items-center"
                     onClick={() => setIsPositionOpen(!isPositionOpen)}>
                        <span>{position ? getPositionOptions().find(pos => pos.value === position)?.label : "Select position"}</span>
                        <svg className={`w-5 h-5 transition-transform ${isPositionOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                    </button>
                    {isPositionOpen && (
                        <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg">
                            {getPositionOptions().map((pos) => (
                                <button key={pos.value} type="button" className="w-full px-3 py-2 text-left hover:bg-gray-100 focus:outline-none"
                                onClick={() => {
                                    setPosition(pos.value);
                                    setIsPositionOpen(false);
                                    setAdminSignupData((prevData)=>({
                                        ...prevData,
                                        position : pos.label,
                                    }))
                                }}>
                                    {pos.label}
                                </button>
                            ))}
                        </div>
                    )}
                </div>
            )}

            <label htmlFor="PhoneNo." className="block text-gray-700 font-medium mb-2">
                Phone No.
            </label>
            <div className="mb-2 flex md-4 border rounded-md focus:outline-none focus:ring-2 focus:brown6">
                <select name="phoneCode" id="countryCode" className="rounded-l-lg p-3 focus:ring-2 focus:ring-brown2 focus:border-brown4 bg-gray-50"
                onChange={handleChange}>
                    <option value="">Select</option>
                    <option value="+91">+91</option>
                    <option value="+1">+1</option>
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
            <button type="submit" className="w-full text-white py-3 bg-brown6 shadow-lg shadow-brown2 rounded-md transition hover:shadow-md hover:bg-badamidark cursor-pointer"
            onClick={async(e)=>{
                e.preventDefault();
                await AdminSignUpHandler(adminSignupData, navigate, moveToOtp);
            }}>
                Sign Up
            </button>
        </form>
    )
}
