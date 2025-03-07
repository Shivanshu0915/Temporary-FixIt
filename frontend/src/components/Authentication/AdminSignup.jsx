// // // import React, { useState } from "react";
// // // import { AdminSignUpHandler } from "./SignUpHandler";
// // // import { useNavigate } from "react-router";
// // // import DropdownWithCustom from "./DropDownSignup";

// // // export function AdminSignup({moveToOtp}){
// // //     const navigate = useNavigate();

// // //     const [authorityType, setAuthorityType] = useState("");
// // //     const [position, setPosition] = useState("");
// // //     const [isAuthorityTypeOpen, setIsAuthorityTypeOpen] = useState(false);
// // //     const [isPositionOpen, setIsPositionOpen] = useState(false);

// // //     const authorityTypes = [
// // //         { value: "mess", label: "Mess" },
// // //         { value: "hostel", label: "Hostel" },
// // //         { value: "warden", label: "Warden" },
// // //         { value: "chief_warden", label: "Chief Warden" },
// // //     ];

// // //     const getPositionOptions = () => {
// // //         switch (authorityType) {
// // //             case "mess":
// // //                 return [
// // //                     { value: "mess_manager", label: "Mess Manager" },
// // //                     { value: "store_keeper", label: "Store Keeper" },
// // //                 ];
// // //             case "hostel":
// // //                 return [
// // //                     { value: "caretaker", label: "Caretaker" },
// // //                     { value: "warden", label: "Warden" },
// // //                     { value: "technician", label: "Computer Centre Technician" },
// // //                 ];
// // //             default:
// // //                 return [];
// // //         }
// // //     };

// // //     const[adminSignupData, setAdminSignupData] = useState({
// // //         isAdmin : true,
// // //         name : "",
// // //         category: "",
// // //         position : "",
// // //         phoneCode: "",
// // //         phone : "",
// // //         email : "",
// // //         password : ""
// // //     })


// // //     const handleChange = (event) => {
// // //         const { name, value } = event.target; // Get field fieldname & value
// // //         setAdminSignupData((prevAdmin) => ({
// // //             ...prevAdmin, // Spread previous state
// // //             [name]: value, // Update only the changed field
// // //         }));
// // //     };

// // //     return (
// // //         <form>
// // //             <DropdownWithCustom></DropdownWithCustom>
// // //             <div className="mb-2">
// // //                 <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
// // //                     Name
// // //                 </label>
// // //                 <input type="text" name="name" id="name" placeholder="Enter your name" className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:brown6"
// // //                  onChange={handleChange}/>
// // //             </div>

// // //             <div className="mb-2 relative">
// // //                 <label className="block font-medium text-gray-700 mb-2">
// // //                     Category
// // //                 </label>
// // //                 <button type="button" onClick={() => setIsAuthorityTypeOpen(!isAuthorityTypeOpen)}
// // //                  className="w-full p-3 text-left border rounded-md focus:outline-none focus:ring-2 focus:brown6 flex justify-between items-center">
// // //                     <span>{authorityType ? authorityTypes.find(type => type.value === authorityType)?.label : "Select category"}</span>
// // //                     <svg className={`w-5 h-5 transition-transform ${isAuthorityTypeOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // //                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
// // //                     </svg>
// // //                 </button>

// // //                 {isAuthorityTypeOpen && (
// // //                     <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg">
// // //                         {authorityTypes.map((type) => (
// // //                             <button key={type.value} type="button" className="w-full px-3 py-2 text-left hover:bg-gray-100 focus:outline-none"
// // //                             onClick={() => {
// // //                                 setAuthorityType(type.value);
// // //                                 setIsAuthorityTypeOpen(false);
// // //                                 setAdminSignupData((prevData)=>({
// // //                                     ...prevData,
// // //                                     category : type.label,
// // //                                 }))
// // //                             }}>
// // //                                 {type.label}
// // //                             </button>
// // //                         ))}
// // //                     </div>
// // //                 )}
// // //             </div>

// // //             {authorityType != "warden" && authorityType != "chief_warden" && authorityType != "" && (
// // //                 <div className="mb-2 relative">
// // //                     <label className="block mb-2 font-medium text-gray-700">
// // //                         Position
// // //                     </label>
// // //                     <button type="button" className="w-full p-3 text-left border rounded-md focus:outline-none focus:ring-2 focus:brown6 flex justify-between items-center"
// // //                      onClick={() => setIsPositionOpen(!isPositionOpen)}>
// // //                         <span>{position ? getPositionOptions().find(pos => pos.value === position)?.label : "Select position"}</span>
// // //                         <svg className={`w-5 h-5 transition-transform ${isPositionOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // //                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
// // //                         </svg>
// // //                     </button>
// // //                     {isPositionOpen && (
// // //                         <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg">
// // //                             {getPositionOptions().map((pos) => (
// // //                                 <button key={pos.value} type="button" className="w-full px-3 py-2 text-left hover:bg-gray-100 focus:outline-none"
// // //                                 onClick={() => {
// // //                                     setPosition(pos.value);
// // //                                     setIsPositionOpen(false);
// // //                                     setAdminSignupData((prevData)=>({
// // //                                         ...prevData,
// // //                                         position : pos.label,
// // //                                     }))
// // //                                 }}>
// // //                                     {pos.label}
// // //                                 </button>
// // //                             ))}
// // //                         </div>
// // //                     )}
// // //                 </div>
// // //             )}

// // //             <label htmlFor="PhoneNo." className="block text-gray-700 font-medium mb-2">
// // //                 Phone No.
// // //             </label>
// // //             <div className="mb-2 flex md-4 border rounded-md focus:outline-none focus:ring-2 focus:brown6">
// // //                 <select name="phoneCode" id="countryCode" className="rounded-l-lg p-3 focus:ring-2 focus:ring-brown2 focus:border-brown4 bg-gray-50"
// // //                 onChange={handleChange}>
// // //                     <option value="">Select</option>
// // //                     <option value="+91">+91</option>
// // //                     <option value="+1">+1</option>
// // //                     <option value="+44">+44</option>
// // //                     <option value="+61">+61</option>
// // //                 </select>
// // //                 {/* Input Field */}
// // //                 <input type="text" name="phone" placeholder="Enter your phone number" className="w-full p-3 rounded-md focus:outline-none focus:ring-2 focus:brown6"
// // //                 onChange={handleChange}/>
// // //             </div>
// // //             <div className="mb-2">
// // //                 <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
// // //                     Email
// // //                 </label>
// // //                 <input type="text" name="email" id="email" placeholder="Enter your email" className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:brown6"
// // //                 onChange={handleChange}/>
// // //             </div>
// // //             <div className="mb-3">
// // //                 <label htmlFor="password" className="block text-gray-700 font-medium mb-2">
// // //                     Password
// // //                 </label>
// // //                 <input type="password" name="password" id="password" placeholder="Enter your password" className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:brown6"
// // //                 onChange={handleChange}/>
// // //             </div>
// // //             <button type="submit" className="w-full text-white py-3 bg-brown6 shadow-lg shadow-brown2 rounded-md transition hover:shadow-md hover:bg-badamidark cursor-pointer active:scale-95"
// // //             onClick={async(e)=>{
// // //                 e.preventDefault();
// // //                 await AdminSignUpHandler(adminSignupData, navigate, moveToOtp);
// // //             }}>
// // //                 Sign Up
// // //             </button>
// // //         </form>
// // //     )
// // // }


// // // import React, { useState, useEffect } from "react";
// // // import { AdminSignUpHandler } from "./SignUpHandler";
// // // import { useNavigate } from "react-router";
// // // import axios from "axios";

// // // export function AdminSignup({ moveToOtp }) {
// // //     const navigate = useNavigate();
// // //     const [authorityType, setAuthorityType] = useState("");
// // //     const [position, setPosition] = useState("");
// // //     const [isAuthorityTypeOpen, setIsAuthorityTypeOpen] = useState(false);
// // //     const [isPositionOpen, setIsPositionOpen] = useState(false);
// // //     const [colleges, setColleges] = useState([]);
// // //     const [customCollege, setCustomCollege] = useState("");
// // //     const [selectedCollege, setSelectedCollege] = useState("");
// // //     const [document, setDocument] = useState(null);

// // //     useEffect(() => {
// // //         // Fetch existing colleges from backend
// // //         axios.get("http://localhost:3000/auth/get-college")
// // //             .then(response => setColleges(response.data))
// // //             .catch(error => console.error("Error fetching colleges:", error));
// // //     }, []);

// // //     const authorityTypes = [
// // //         { value: "mess", label: "Mess" },
// // //         { value: "hostel", label: "Hostel" },
// // //         { value: "warden", label: "Warden" },
// // //         { value: "chief_warden", label: "Chief Warden" },
// // //     ];

// // //     const getPositionOptions = () => {
// // //         switch (authorityType) {
// // //             case "mess":
// // //                 return [
// // //                     { value: "mess_manager", label: "Mess Manager" },
// // //                     { value: "store_keeper", label: "Store Keeper" },
// // //                 ];
// // //             case "hostel":
// // //                 return [
// // //                     { value: "caretaker", label: "Caretaker" },
// // //                     { value: "warden", label: "Warden" },
// // //                     { value: "technician", label: "Computer Centre Technician" },
// // //                 ];
// // //             default:
// // //                 return [];
// // //         }
// // //     };

// // //     const [adminSignupData, setAdminSignupData] = useState({
// // //         isAdmin: true,
// // //         name: "",
// // //         category: "",
// // //         position: "",
// // //         college: "",
// // //         phoneCode: "",
// // //         phone: "",
// // //         email: "",
// // //         password: "",
// // //         document: null
// // //     });

// // //     const handleChange = (event) => {
// // //         const { name, value } = event.target;
// // //         setAdminSignupData((prevAdmin) => ({
// // //             ...prevAdmin,
// // //             [name]: value,
// // //         }));
// // //     };

// // //     const handleFileChange = (event) => {
// // //         setDocument(event.target.files[0]);
// // //     };

// // //     const handleCollegeChange = (event) => {
// // //         setSelectedCollege(event.target.value);
// // //         setCustomCollege(""); // Reset custom input
// // //         setAdminSignupData((prevData) => ({
// // //             ...prevData,
// // //             college: event.target.value,
// // //         }));
// // //     };

// // //     const handleCustomCollegeChange = (event) => {
// // //         setCustomCollege(event.target.value);
// // //         setSelectedCollege(""); // Reset dropdown selection
// // //         setAdminSignupData((prevData) => ({
// // //             ...prevData,
// // //             college: event.target.value,
// // //         }));
// // //     };

// // //     const handleSubmit = async (e) => {
// // //         e.preventDefault();
// // //         const formData = new FormData();
// // //         Object.keys(adminSignupData).forEach((key) => {
// // //             formData.append(key, adminSignupData[key]);
// // //         });
// // //         formData.append("document", document);

// // //         await AdminSignUpHandler(formData, navigate, moveToOtp);
// // //     };

// // //     return (
// // //         <form onSubmit={handleSubmit}>
// // //             {/* <DropdownWithCustom /> */}

// // //             {/* Name */}
// // //             <div className="mb-2">
// // //                 <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Name</label>
// // //                 <input type="text" name="name" id="name" placeholder="Enter your name" className="w-full p-3 border rounded-md" onChange={handleChange} />
// // //             </div>

// // //             {/* College Selection */}
// // //             <div className="mb-2">
// // //                 <label className="block text-gray-700 font-medium mb-2">College</label>
// // //                 <select className="w-full p-3 border rounded-md" value={selectedCollege} onChange={handleCollegeChange}>
// // //                     <option value="">Select your college</option>
// // //                     {colleges.map((college) => (
// // //                         <option key={college.id} value={college.name}>{college.name}</option>
// // //                     ))}
// // //                     <option value="custom">Other (Enter Manually)</option>
// // //                 </select>
// // //                 {selectedCollege === "custom" && (
// // //                     <input type="text" placeholder="Enter college name" className="w-full p-3 border rounded-md mt-2" value={customCollege} onChange={handleCustomCollegeChange} />
// // //                 )}
// // //             </div>

// // //             {/* Category Selection */}
// // //             <div className="mb-2 relative">
// // //                 <label className="block font-medium text-gray-700 mb-2">Category</label>
// // //                 <button type="button" onClick={() => setIsAuthorityTypeOpen(!isAuthorityTypeOpen)}
// // //                     className="w-full p-3 text-left border rounded-md flex justify-between items-center">
// // //                     <span>{authorityType ? authorityTypes.find(type => type.value === authorityType)?.label : "Select category"}</span>
// // //                 </button>
// // //                 {isAuthorityTypeOpen && (
// // //                     <div className="absolute z-10 w-full bg-white border rounded-md shadow-lg">
// // //                         {authorityTypes.map((type) => (
// // //                             <button key={type.value} type="button" className="w-full px-3 py-2 text-left hover:bg-gray-100"
// // //                                 onClick={() => {
// // //                                     setAuthorityType(type.value);
// // //                                     setIsAuthorityTypeOpen(false);
// // //                                     setAdminSignupData((prevData) => ({ ...prevData, category: type.label }));
// // //                                 }}>
// // //                                 {type.label}
// // //                             </button>
// // //                         ))}
// // //                     </div>
// // //                 )}
// // //             </div>

// // //             {/* Position Selection */}
// // //             {authorityType !== "warden" && authorityType !== "chief_warden" && authorityType !== "" && (
// // //                 <div className="mb-2 relative">
// // //                     <label className="block mb-2 font-medium text-gray-700">Position</label>
// // //                     <button type="button" className="w-full p-3 text-left border rounded-md flex justify-between items-center"
// // //                         onClick={() => setIsPositionOpen(!isPositionOpen)}>
// // //                         <span>{position ? getPositionOptions().find(pos => pos.value === position)?.label : "Select position"}</span>
// // //                     </button>
// // //                     {isPositionOpen && (
// // //                         <div className="absolute z-10 w-full bg-white border rounded-md shadow-lg">
// // //                             {getPositionOptions().map((pos) => (
// // //                                 <button key={pos.value} type="button" className="w-full px-3 py-2 text-left hover:bg-gray-100"
// // //                                     onClick={() => {
// // //                                         setPosition(pos.value);
// // //                                         setIsPositionOpen(false);
// // //                                         setAdminSignupData((prevData) => ({ ...prevData, position: pos.label }));
// // //                                     }}>
// // //                                     {pos.label}
// // //                                 </button>
// // //                             ))}
// // //                         </div>
// // //                     )}
// // //                 </div>
// // //             )}

// // //             {/* Document Upload */}
// // //             <div className="mb-2">
// // //                 <label className="block text-gray-700 font-medium mb-2">Upload Document Proof</label>
// // //                 <input type="file" onChange={handleFileChange} className="w-full p-3 border rounded-md" />
// // //             </div>

// // //             {/* Submit Button */}
// // //             <button type="submit" className="w-full text-white py-3 bg-brown6 rounded-md transition hover:bg-badamidark cursor-pointer active:scale-95">
// // //                 Request Signup
// // //             </button>
// // //         </form>
// // //     );
// // // }


// // // import React, { useState, useEffect } from "react";
// // // import { AdminSignUpHandler } from "./SignUpHandler";
// // // import { useNavigate } from "react-router";
// // // import axios from "axios";

// // // export function AdminSignup({ moveToOtp }) {
// // //     const navigate = useNavigate();
    
// // //     const [colleges, setColleges] = useState([]);
// // //     // console.log(colleges);
// // //     const [selectedCollege, setSelectedCollege] = useState("");
// // //     const [customCollege, setCustomCollege] = useState("");
    
// // //     const [hostels, setHostels] = useState([]);
// // //     const [selectedHostel, setSelectedHostel] = useState("");
// // //     const [customHostel, setCustomHostel] = useState("");

// // //     const [categories, setCategories] = useState([
// // //         "Mess", "Hostel", "Warden", "Chief Warden"
// // //     ]);
// // //     const [selectedCategory, setSelectedCategory] = useState("");
// // //     const [customCategory, setCustomCategory] = useState("");

// // //     const [positions, setPositions] = useState([
// // //         "Mess Manager", "Store Keeper", "Caretaker", "Technician"
// // //     ]);
// // //     const [selectedPosition, setSelectedPosition] = useState("");
// // //     const [customPosition, setCustomPosition] = useState("");

// // //     const [document, setDocument] = useState(null);
// // //     const [adminSignupData, setAdminSignupData] = useState({
// // //         isAdmin: true,
// // //         name: "",
// // //         category: "",
// // //         position: "",
// // //         college: "",
// // //         hostel: "",
// // //         phoneCode: "",
// // //         phone: "",
// // //         email: "",
// // //         password: "",
// // //         document: null
// // //     });

// // //     useEffect(() => {
// // //         axios.get("http://localhost:3000/auth/get-college")
// // //             .then(response => setColleges(response.data))
// // //             .catch(error => console.error("Error fetching colleges:", error));

// // //         axios.get("http://localhost:3000/auth/get-hostel")
// // //             .then(response => setHostels(response.data))
// // //             .catch(error => console.error("Error fetching hostels:", error));
// // //     }, []);

// // //     const handleChange = (event) => {
// // //         const { name, value } = event.target;
// // //         setAdminSignupData((prevAdmin) => ({
// // //             ...prevAdmin,
// // //             [name]: value,
// // //         }));
// // //     };

// // //     const handleFileChange = (event) => {
// // //         setDocument(event.target.files[0]);
// // //     };

// // //     const handleDropdownChange = (event, setSelected, setCustom, fieldName) => {
// // //         const value = event.target.value;
// // //         setSelected(value);
// // //         setCustom("");
// // //         setAdminSignupData((prevData) => ({
// // //             ...prevData,
// // //             [fieldName]: value,
// // //         }));
// // //     };

// // //     const handleCustomInputChange = (event, setCustom, setSelected, fieldName) => {
// // //         const value = event.target.value;
// // //         setCustom(value);
// // //         setSelected("");
// // //         setAdminSignupData((prevData) => ({
// // //             ...prevData,
// // //             [fieldName]: value,
// // //         }));
// // //     };

// // //     const handleSubmit = async (e) => {
// // //         e.preventDefault();
// // //         const formData = new FormData();
// // //         Object.keys(adminSignupData).forEach((key) => {
// // //             formData.append(key, adminSignupData[key]);
// // //         });
// // //         formData.append("document", document);

// // //         await AdminSignUpHandler(formData, navigate, moveToOtp);
// // //     };

// // //     return (
// // //         <form onSubmit={handleSubmit}>
// // //             {/* Name */}
// // //             <div className="mb-2">
// // //                 <label className="block text-gray-700 font-medium mb-2">Name</label>
// // //                 <input type="text" name="name" placeholder="Enter your name"
// // //                     className="w-full p-3 border rounded-md" onChange={handleChange} />
// // //             </div>

// // //             {/* College Selection */}
// // //             <div className="mb-2">
// // //                 <label className="block text-gray-700 font-medium mb-2">College</label>
// // //                 <select className="w-full p-3 border rounded-md" value={selectedCollege}
// // //                     onChange={(e) => handleDropdownChange(e, setSelectedCollege, setCustomCollege, "college")}>
// // //                     <option value="">Select your college</option>
// // //                     {colleges.map(college => (
// // //                         <option key={college.id} value={college.name}>{college.name}</option>
// // //                     ))}
// // //                     <option value="custom">Other (Enter Manually)</option>
// // //                 </select>
// // //                 {selectedCollege === "custom" && (
// // //                     <input type="text" placeholder="Enter college name"
// // //                         className="w-full p-3 border rounded-md mt-2"
// // //                         onChange={(e) => handleCustomInputChange(e, setCustomCollege, setSelectedCollege, "college")} />
// // //                 )}
// // //             </div>

// // //             {/* Hostel Selection */}
// // //             <div className="mb-2">
// // //                 <label className="block text-gray-700 font-medium mb-2">Hostel</label>
// // //                 <select className="w-full p-3 border rounded-md" value={selectedHostel}
// // //                     onChange={(e) => handleDropdownChange(e, setSelectedHostel, setCustomHostel, "hostel")}>
// // //                     <option value="">Select your hostel</option>
// // //                     {hostels.map(hostel => (
// // //                         <option key={hostel.id} value={hostel.name}>{hostel.name}</option>
// // //                     ))}
// // //                     <option value="custom">Other (Enter Manually)</option>
// // //                 </select>
// // //                 {selectedHostel === "custom" && (
// // //                     <input type="text" placeholder="Enter hostel name"
// // //                         className="w-full p-3 border rounded-md mt-2"
// // //                         onChange={(e) => handleCustomInputChange(e, setCustomHostel, setSelectedHostel, "hostel")} />
// // //                 )}
// // //             </div>

// // //             {/* Category Selection */}
// // //             <div className="mb-2">
// // //                 <label className="block text-gray-700 font-medium mb-2">Category</label>
// // //                 <select className="w-full p-3 border rounded-md" value={selectedCategory}
// // //                     onChange={(e) => handleDropdownChange(e, setSelectedCategory, setCustomCategory, "category")}>
// // //                     <option value="">Select category</option>
// // //                     {categories.map(category => (
// // //                         <option key={category} value={category}>{category}</option>
// // //                     ))}
// // //                     <option value="custom">Other (Enter Manually)</option>
// // //                 </select>
// // //                 {selectedCategory === "custom" && (
// // //                     <input type="text" placeholder="Enter category"
// // //                         className="w-full p-3 border rounded-md mt-2"
// // //                         onChange={(e) => handleCustomInputChange(e, setCustomCategory, setSelectedCategory, "category")} />
// // //                 )}
// // //             </div>

// // //             {/* Position Selection */}
// // //             <div className="mb-2">
// // //                 <label className="block text-gray-700 font-medium mb-2">Position</label>
// // //                 <select className="w-full p-3 border rounded-md" value={selectedPosition}
// // //                     onChange={(e) => handleDropdownChange(e, setSelectedPosition, setCustomPosition, "position")}>
// // //                     <option value="">Select position</option>
// // //                     {positions.map(position => (
// // //                         <option key={position} value={position}>{position}</option>
// // //                     ))}
// // //                     <option value="custom">Other (Enter Manually)</option>
// // //                 </select>
// // //                 {selectedPosition === "custom" && (
// // //                     <input type="text" placeholder="Enter position"
// // //                         className="w-full p-3 border rounded-md mt-2"
// // //                         onChange={(e) => handleCustomInputChange(e, setCustomPosition, setSelectedPosition, "position")} />
// // //                 )}
// // //             </div>

// // //             {/* Document Upload */}
// // //             <div className="mb-2">
// // //                 <label className="block text-gray-700 font-medium mb-2">Upload Document Proof</label>
// // //                 <input type="file" onChange={handleFileChange} className="w-full p-3 border rounded-md" />
// // //             </div>

// // //             {/* Submit Button */}
// // //             <button type="submit" className="w-full text-white py-3 bg-brown6 rounded-md hover:bg-badamidark cursor-pointer active:scale-95">
// // //                 Request Signup
// // //             </button>
// // //         </form>
// // //     );
// // // }


// // import React, { useState, useEffect } from "react";
// // import { AdminSignUpHandler } from "./SignUpHandler";
// // import { useNavigate } from "react-router";
// // import axios from "axios";
// // import { AdminHandler } from "./AdminSignHandle";

// // export function AdminSignup({ moveToOtp }) {
// //     const navigate = useNavigate();
    
// //     const [colleges, setColleges] = useState([]);
// //     const [selectedCollege, setSelectedCollege] = useState("");
// //     const [customCollege, setCustomCollege] = useState("");
    
// //     const [hostels, setHostels] = useState([]);
// //     const [selectedHostel, setSelectedHostel] = useState("");
// //     const [customHostel, setCustomHostel] = useState("");

// //     const [categories, setCategories] = useState([
// //         "Mess", "Hostel", "Warden", "Chief Warden"
// //     ]);
// //     const [selectedCategory, setSelectedCategory] = useState("");
// //     const [customCategory, setCustomCategory] = useState("");

// //     const [positions, setPositions] = useState([
// //         "Mess Manager", "Store Keeper", "Caretaker", "Technician"
// //     ]);
// //     const [selectedPosition, setSelectedPosition] = useState("");
// //     const [customPosition, setCustomPosition] = useState("");

// //     const [document, setDocument] = useState(null);
// //     const [adminSignupData, setAdminSignupData] = useState({
// //         isAdmin: true,
// //         name: "",
// //         category: "",
// //         position: "",
// //         college: "",
// //         hostel: "",
// //         phone: "",
// //         email: "",
// //         password: "",
// //         document: null
// //     });

// //     useEffect(() => {
// //         axios.get("http://localhost:3000/auth/get-college")
// //             .then(response => setColleges(response.data))
// //             .catch(error => console.error("Error fetching colleges:", error));

// //         axios.get("http://localhost:3000/auth/get-hostel")
// //             .then(response => setHostels(response.data))
// //             .catch(error => console.error("Error fetching hostels:", error));
// //     }, []);

// //     const handleChange = (event) => {
// //         const { name, value } = event.target;
// //         setAdminSignupData((prevAdmin) => ({
// //             ...prevAdmin,
// //             [name]: value,
// //         }));
// //     };

// //     const handleFileChange = (event) => {
// //         setDocument(event.target.files[0]);
// //     };

// //     const handleDropdownChange = (event, setSelected, setCustom, fieldName) => {
// //         const value = event.target.value;
// //         setSelected(value);
// //         setCustom("");
// //         setAdminSignupData((prevData) => ({
// //             ...prevData,
// //             [fieldName]: value === "custom" ? "" : value,
// //         }));
// //     };

// //     const handleCustomInputChange = (event, setCustom, setSelected, fieldName) => {
// //         const value = event.target.value;
// //         setCustom(value);
// //         setSelected("");
// //         setAdminSignupData((prevData) => ({
// //             ...prevData,
// //             [fieldName]: value,
// //         }));
// //     };

// //     const handleSubmit = async (e) => {
// //         e.preventDefault();
// //         const formData = new FormData();
// //         Object.keys(adminSignupData).forEach((key) => {
// //             if (key === "document") {
// //                 formData.append(key, document);
// //             } else {
// //                 formData.append(key, adminSignupData[key]);
// //             }
// //         });

// //         await AdminHandler(formData, navigate, moveToOtp);
// //     };
// //     // console.log(colleges);

// //     return (
// //         <form onSubmit={handleSubmit}>
// //             {/* Name */}
// //             <div className="mb-2">
// //                 <label className="block text-gray-700 font-medium mb-2">Name</label>
// //                 <input type="text" name="name" placeholder="Enter your name"
// //                     className="w-full p-3 border rounded-md" onChange={handleChange} />
// //             </div>

// //             {/* College Selection */}
// //             <div className="mb-2">
// //                 <label className="block text-gray-700 font-medium mb-2">College</label>
// //                 <select className="w-full p-3 border rounded-md" value={selectedCollege}
// //                     onChange={(e) => handleDropdownChange(e, setSelectedCollege, setCustomCollege, "college")}>
// //                     <option value="">Select your college</option>
// //                     {colleges.map(college => (
// //                         <option value={college}>{college}</option>
// //                     ))}
// //                     <option value="custom">Other (Enter Manually)</option>
// //                 </select>
// //                 {selectedCollege === "custom" && (
// //                     <input type="text" placeholder="Enter college name"
// //                         className="w-full p-3 border rounded-md mt-2"
// //                         value={customCollege}
// //                         onChange={(e) => handleCustomInputChange(e, setCustomCollege, setSelectedCollege, "college")} />
// //                 )}
// //             </div>

// //             {/* Hostel Selection */}
// //             <div className="mb-2">
// //                 <label className="block text-gray-700 font-medium mb-2">Hostel</label>
// //                 <select className="w-full p-3 border rounded-md" value={selectedHostel}
// //                     onChange={(e) => handleDropdownChange(e, setSelectedHostel, setCustomHostel, "hostel")}>
// //                     <option value="">Select your hostel</option>
// //                     {hostels.map(hostel => (
// //                         <option value={hostel}>{hostel}</option>
// //                     ))}
// //                     <option value="custom">Other (Enter Manually)</option>
// //                 </select>
// //                 {selectedHostel === "custom" && (
// //                     <input type="text" placeholder="Enter hostel name"
// //                         className="w-full p-3 border rounded-md mt-2"
// //                         value={customHostel}
// //                         onChange={(e) => handleCustomInputChange(e, setCustomHostel, setSelectedHostel, "hostel")} />
// //                 )}
// //             </div>

// //             {/* Category Selection */}
// //             <div className="mb-2">
// //                 <label className="block text-gray-700 font-medium mb-2">Category</label>
// //                 <select className="w-full p-3 border rounded-md" value={selectedCategory}
// //                     onChange={(e) => handleDropdownChange(e, setSelectedCategory, setCustomCategory, "category")}>
// //                     <option value="">Select category</option>
// //                     {categories.map(category => (
// //                         <option key={category} value={category}>{category}</option>
// //                     ))}
// //                     <option value="custom">Other (Enter Manually)</option>
// //                 </select>
// //                 {selectedCategory === "custom" && (
// //                     <input type="text" placeholder="Enter category" className="w-full p-3 border rounded-md mt-2"
// //                         value={customCategory}
// //                         onChange={(e) => handleCustomInputChange(e, setCustomCategory, setSelectedCategory, "category")} />
// //                 )}
// //             </div>

// //             {/* Position Selection */}
// //             <div className="mb-2">
// //                 <label className="block text-gray-700 font-medium mb-2">Position</label>
// //                 <select className="w-full p-3 border rounded-md" value={selectedPosition}
// //                     onChange={(e) => handleDropdownChange(e, setSelectedPosition, setCustomPosition, "position")}>
// //                     <option value="">Select position</option>
// //                     {positions.map(position => (
// //                         <option key={position} value={position}>{position}</option>
// //                     ))}
// //                     <option value="custom">Other (Enter Manually)</option>
// //                 </select>
// //                 {selectedPosition === "custom" && (
// //                     <input type="text" placeholder="Enter position"
// //                         className="w-full p-3 border rounded-md mt-2"
// //                         value={customPosition}
// //                         onChange={(e) => handleCustomInputChange(e, setCustomPosition, setSelectedPosition, "position")} />
// //                 )}
// //             </div>
            
// //             <label htmlFor="PhoneNo." className="block text-gray-700 font-medium mb-2">
// //                  Phone No.
// //              </label>
// //              <div className="mb-2 flex md-4 border rounded-md focus:outline-none focus:ring-2 focus:brown6">
// //                 {/* Input Field */}
// //                 <input type="text" name="phone" placeholder="Enter your phone number" className="w-full p-3 rounded-md focus:outline-none focus:ring-2 focus:brown6"
// //                 onChange={handleChange}/>
// //             </div>
// //             <div className="mb-2">
// //                 <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
// //                     Email
// //                 </label>
// //                 <input type="text" name="email" id="email" placeholder="Enter your email" className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:brown6"
// //                 onChange={handleChange}/>
// //             </div>
// //             <div className="mb-3">
// //                 <label htmlFor="password" className="block text-gray-700 font-medium mb-2">
// //                     Password
// //                 </label>
// //                 <input type="password" name="password" id="password" placeholder="Enter your password" className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:brown6"
// //                 onChange={handleChange}/>
// //             </div>
// //             {/* Document Upload */}
// //             <div className="mb-2">
// //                 <label className="block text-gray-700 font-medium mb-2">Upload Document Proof</label>
// //                 <input type="file" onChange={handleFileChange} className="w-full p-3 border rounded-md" />
// //             </div>

// //             {/* Submit Button */}
// //             <button type="submit" className="w-full text-white py-3 bg-brown6 rounded-md hover:bg-badamidark cursor-pointer active:scale-95">
// //                 Request Signup
// //             </button>
// //         </form>
// //     );
// // }

// import React, { useState, useEffect } from "react";
// import { AdminSignUpHandler } from "./SignUpHandler";
// import { useNavigate } from "react-router";
// import axios from "axios";
// import { AdminHandler } from "./AdminSignHandle";

// export function AdminSignup({ moveToOtp }) {
//     const navigate = useNavigate();
    
//     const [colleges, setColleges] = useState([]);
//     const [selectedCollege, setSelectedCollege] = useState("");
//     const [customCollege, setCustomCollege] = useState("");
    
//     const [hostels, setHostels] = useState([]);
//     const [selectedHostel, setSelectedHostel] = useState("");
//     const [customHostel, setCustomHostel] = useState("");

//     const [categories, setCategories] = useState([
//         "Mess", "Hostel", "Warden", "Chief Warden"
//     ]);
//     const [selectedCategory, setSelectedCategory] = useState("");
//     const [customCategory, setCustomCategory] = useState("");

//     const [positions, setPositions] = useState([
//         "Mess Manager", "Store Keeper", "Caretaker", "Technician"
//     ]);
//     const [selectedPosition, setSelectedPosition] = useState("");
//     const [customPosition, setCustomPosition] = useState("");

//     const [document, setDocument] = useState(null);
//     const [adminSignupData, setAdminSignupData] = useState({
//         isAdmin: true,
//         name: "",
//         category: "",
//         position: "",
//         college: "",
//         hostel: "",
//         phone: "",
//         email: "",
//         password: "",
//         document: null
//     });

//     useEffect(() => {
//         axios.get("http://localhost:3000/auth/get-college")
//             .then(response => setColleges(response.data))
//             .catch(error => console.error("Error fetching colleges:", error));

//         axios.get("http://localhost:3000/auth/get-hostel")
//             .then(response => setHostels(response.data))
//             .catch(error => console.error("Error fetching hostels:", error));
//     }, []);

//     const handleChange = (event) => {
//         const { name, value } = event.target;
//         setAdminSignupData((prevAdmin) => ({
//             ...prevAdmin,
//             [name]: value,
//         }));
//     };

//     // Updated to set both local state and adminSignupData.document
//     const handleFileChange = (event) => {
//         const file = event.target.files[0];
//         setDocument(file);
//         setAdminSignupData((prevData) => ({
//             ...prevData,
//             document: file,
//         }));
//     };

//     const handleDropdownChange = (event, setSelected, setCustom, fieldName) => {
//         const value = event.target.value;
//         setSelected(value);
//         setCustom("");
//         setAdminSignupData((prevData) => ({
//             ...prevData,
//             [fieldName]: value === "custom" ? "" : value,
//         }));
//     };

//     const handleCustomInputChange = (event, setCustom, setSelected, fieldName) => {
//         const value = event.target.value;
//         setCustom(value);
//         setSelected("");
//         setAdminSignupData((prevData) => ({
//             ...prevData,
//             [fieldName]: value,
//         }));
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         const formData = new FormData();
//         Object.keys(adminSignupData).forEach((key) => {
//             if (key === "document") {
//                 formData.append(key, document);
//             } else {
//                 formData.append(key, adminSignupData[key]);
//             }
//         });

//         await AdminHandler(formData, navigate, moveToOtp);
//     };

//     return (
//         <form onSubmit={handleSubmit}>
//             {/* Name */}
//             <div className="mb-2">
//                 <label className="block text-gray-700 font-medium mb-2">Name</label>
//                 <input type="text" name="name" placeholder="Enter your name"
//                     className="w-full p-3 border rounded-md" onChange={handleChange} required />
//             </div>

//             {/* College Selection */}
//             <div className="mb-2">
//                 <label className="block text-gray-700 font-medium mb-2">College</label>
//                 <select className="w-full p-3 border rounded-md" value={selectedCollege}
//                     onChange={(e) => handleDropdownChange(e, setSelectedCollege, setCustomCollege, "college")} required>
//                     <option value="">Select your college</option>
//                     {colleges.map(college => (
//                         <option key={college} value={college}>{college}</option>
//                     ))}
//                     <option value="custom">Other (Enter Manually)</option>
//                 </select>
//                 {selectedCollege === "custom" && (
//                     <input type="text" name="customCollege" placeholder="Enter college name"
//                         className="w-full p-3 border rounded-md mt-2"
//                         value={customCollege}
//                         onChange={(e) => handleCustomInputChange(e, setCustomCollege, setSelectedCollege, "college")} required />
//                 )}
//             </div>

//             {/* Hostel Selection */}
//             <div className="mb-2">
//                 <label className="block text-gray-700 font-medium mb-2">Hostel</label>
//                 <select className="w-full p-3 border rounded-md" value={selectedHostel}
//                     onChange={(e) => handleDropdownChange(e, setSelectedHostel, setCustomHostel, "hostel")} required>
//                     <option value="">Select your hostel</option>
//                     {hostels.map(hostel => (
//                         <option key={hostel} value={hostel}>{hostel}</option>
//                     ))}
//                     <option value="custom">Other (Enter Manually)</option>
//                 </select>
//                 {selectedHostel === "custom" && (
//                     <input type="text" name="customHostel" placeholder="Enter hostel name"
//                         className="w-full p-3 border rounded-md mt-2"
//                         value={customHostel}
//                         onChange={(e) => handleCustomInputChange(e, setCustomHostel, setSelectedHostel, "hostel")} required />
//                 )}
//             </div>

//             {/* Category Selection */}
//             <div className="mb-2">
//                 <label className="block text-gray-700 font-medium mb-2">Category</label>
//                 <select className="w-full p-3 border rounded-md" value={selectedCategory}
//                     onChange={(e) => handleDropdownChange(e, setSelectedCategory, setCustomCategory, "category")} required>
//                     <option value="">Select category</option>
//                     {categories.map(category => (
//                         <option key={category} value={category}>{category}</option>
//                     ))}
//                     <option value="custom">Other (Enter Manually)</option>
//                 </select>
//                 {selectedCategory === "custom" && (
//                     <input type="text" name="customCategory" placeholder="Enter category"
//                         className="w-full p-3 border rounded-md mt-2"
//                         value={customCategory}
//                         onChange={(e) => handleCustomInputChange(e, setCustomCategory, setSelectedCategory, "category")} required />
//                 )}
//             </div>

//             {/* Position Selection */}
//             <div className="mb-2">
//                 <label className="block text-gray-700 font-medium mb-2">Position</label>
//                 <select className="w-full p-3 border rounded-md" value={selectedPosition}
//                     onChange={(e) => handleDropdownChange(e, setSelectedPosition, setCustomPosition, "position")} required>
//                     <option value="">Select position</option>
//                     {positions.map(position => (
//                         <option key={position} value={position}>{position}</option>
//                     ))}
//                     <option value="custom">Other (Enter Manually)</option>
//                 </select>
//                 {selectedPosition === "custom" && (
//                     <input type="text" name="customPosition" placeholder="Enter position"
//                         className="w-full p-3 border rounded-md mt-2"
//                         value={customPosition}
//                         onChange={(e) => handleCustomInputChange(e, setCustomPosition, setSelectedPosition, "position")} required />
//                 )}
//             </div>
            
//             <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">Phone No.</label>
//             <div className="mb-2 flex md-4 border rounded-md">
//                 <input type="text" name="phone" placeholder="Enter your phone number"
//                     className="w-full p-3 rounded-md" onChange={handleChange} required />
//             </div>

//             <div className="mb-2">
//                 <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
//                 <input type="text" name="email" id="email" placeholder="Enter your email"
//                     className="w-full p-3 border rounded-md" onChange={handleChange} required />
//             </div>

//             <div className="mb-3">
//                 <label htmlFor="password" className="block text-gray-700 font-medium mb-2">Password</label>
//                 <input type="password" name="password" id="password" placeholder="Enter your password"
//                     className="w-full p-3 border rounded-md" onChange={handleChange} required />
//             </div>
            
//             {/* Document Upload */}
//             <div className="mb-2">
//                 <label className="block text-gray-700 font-medium mb-2">Upload Document Proof</label>
//                 <input type="file" name="document" onChange={handleFileChange}
//                     className="w-full p-3 border rounded-md" required />
//             </div>

//             {/* Submit Button */}
//             <button type="submit" className="w-full text-white py-3 bg-brown6 rounded-md hover:bg-brown-700 cursor-pointer active:scale-95">
//                 Request Signup
//             </button>
//         </form>
//     );
// }


import React, { useState, useEffect } from "react";
import { AdminHandler } from "./AdminSignHandle";
import { useNavigate } from "react-router";
import axios from "axios";

export function AdminSignup({ moveToOtp }) {
    const navigate = useNavigate();
    
    const [colleges, setColleges] = useState([]);
    const [selectedCollege, setSelectedCollege] = useState("");
    const [customCollege, setCustomCollege] = useState("");
    
    const [hostels, setHostels] = useState([]);
    const [selectedHostel, setSelectedHostel] = useState("");
    const [customHostel, setCustomHostel] = useState("");

    const [categories, setCategories] = useState([
        "Mess", "Hostel", "Warden", "Chief Warden"
    ]);
    const [selectedCategory, setSelectedCategory] = useState("");
    const [customCategory, setCustomCategory] = useState("");

    const [positions, setPositions] = useState([
        "Mess Manager", "Store Keeper", "Caretaker", "Technician"
    ]);
    const [selectedPosition, setSelectedPosition] = useState("");
    const [customPosition, setCustomPosition] = useState("");

    const [document, setDocument] = useState(null);
    const [adminSignupData, setAdminSignupData] = useState({
        isAdmin: true,
        name: "",
        category: "",
        position: "",
        college: "",
        hostel: "",
        phone: "",
        email: "",
        password: "",
        document: null
    });

    useEffect(() => {
        axios.get("http://localhost:3000/auth/get-college")
            .then(response => setColleges(response.data))
            .catch(error => console.error("Error fetching colleges:", error));

        axios.get("http://localhost:3000/auth/get-hostel")
            .then(response => setHostels(response.data))
            .catch(error => console.error("Error fetching hostels:", error));
    }, []);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setAdminSignupData((prevAdmin) => ({
            ...prevAdmin,
            [name]: value,
        }));
    };

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setDocument(file);
        setAdminSignupData((prevData) => ({
            ...prevData,
            document: file,
        }));
    };

    const handleDropdownChange = (event, setSelected, setCustom, fieldName) => {
        const value = event.target.value;
        setSelected(value);
        setCustom("");
        setAdminSignupData((prevData) => ({
            ...prevData,
            [fieldName]: value === "custom" ? "" : value,
        }));
    };

    // Updated custom input handler: removed setSelected("")
    const handleCustomInputChange = (event, setCustom, fieldName) => {
        const value = event.target.value;
        setCustom(value);
        setAdminSignupData((prevData) => ({
            ...prevData,
            [fieldName]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        Object.keys(adminSignupData).forEach((key) => {
            if (key === "document") {
                formData.append(key, document);
            } else {
                formData.append(key, adminSignupData[key]);
            }
        });

        await AdminHandler(formData, navigate, moveToOtp);
    };

    return (
        <form onSubmit={handleSubmit}>
            {/* Name */}
            <div className="mb-2">
                <label className="block text-gray-700 font-medium mb-2">Name</label>
                <input 
                    type="text" 
                    name="name" 
                    placeholder="Enter your name"
                    className="w-full p-3 border rounded-md" 
                    onChange={handleChange} 
                    required 
                />
            </div>

            {/* College Selection */}
            <div className="mb-2">
                <label className="block text-gray-700 font-medium mb-2">College</label>
                <select 
                    className="w-full p-3 border rounded-md" 
                    value={selectedCollege}
                    onChange={(e) => handleDropdownChange(e, setSelectedCollege, setCustomCollege, "college")}
                    required
                >
                    <option value="">Select your college</option>
                    {colleges.map(college => (
                        <option key={college} value={college}>{college}</option>
                    ))}
                    <option value="custom">Other (Enter Manually)</option>
                </select>
                {selectedCollege === "custom" && (
                    <input 
                        type="text" 
                        name="customCollege" 
                        placeholder="Enter college name"
                        className="w-full p-3 border rounded-md mt-2"
                        value={customCollege}
                        onChange={(e) => handleCustomInputChange(e, setCustomCollege, "college")} 
                        required 
                    />
                )}
            </div>

            {/* Hostel Selection */}
            <div className="mb-2">
                <label className="block text-gray-700 font-medium mb-2">Hostel</label>
                <select 
                    className="w-full p-3 border rounded-md" 
                    value={selectedHostel}
                    onChange={(e) => handleDropdownChange(e, setSelectedHostel, setCustomHostel, "hostel")}
                    required
                >
                    <option value="">Select your hostel</option>
                    {hostels.map(hostel => (
                        <option key={hostel} value={hostel}>{hostel}</option>
                    ))}
                    <option value="custom">Other (Enter Manually)</option>
                </select>
                {selectedHostel === "custom" && (
                    <input 
                        type="text" 
                        name="customHostel" 
                        placeholder="Enter hostel name"
                        className="w-full p-3 border rounded-md mt-2"
                        value={customHostel}
                        onChange={(e) => handleCustomInputChange(e, setCustomHostel, "hostel")} 
                        required 
                    />
                )}
            </div>

            {/* Category Selection */}
            <div className="mb-2">
                <label className="block text-gray-700 font-medium mb-2">Category</label>
                <select 
                    className="w-full p-3 border rounded-md" 
                    value={selectedCategory}
                    onChange={(e) => handleDropdownChange(e, setSelectedCategory, setCustomCategory, "category")}
                    required
                >
                    <option value="">Select category</option>
                    {categories.map(category => (
                        <option key={category} value={category}>{category}</option>
                    ))}
                    <option value="custom">Other (Enter Manually)</option>
                </select>
                {selectedCategory === "custom" && (
                    <input 
                        type="text" 
                        name="customCategory" 
                        placeholder="Enter category"
                        className="w-full p-3 border rounded-md mt-2"
                        value={customCategory}
                        onChange={(e) => handleCustomInputChange(e, setCustomCategory, "category")} 
                        required 
                    />
                )}
            </div>

            {/* Position Selection */}
            <div className="mb-2">
                <label className="block text-gray-700 font-medium mb-2">Position</label>
                <select 
                    className="w-full p-3 border rounded-md" 
                    value={selectedPosition}
                    onChange={(e) => handleDropdownChange(e, setSelectedPosition, setCustomPosition, "position")}
                    required
                >
                    <option value="">Select position</option>
                    {positions.map(position => (
                        <option key={position} value={position}>{position}</option>
                    ))}
                    <option value="custom">Other (Enter Manually)</option>
                </select>
                {selectedPosition === "custom" && (
                    <input 
                        type="text" 
                        name="customPosition" 
                        placeholder="Enter position"
                        className="w-full p-3 border rounded-md mt-2"
                        value={customPosition}
                        onChange={(e) => handleCustomInputChange(e, setCustomPosition, "position")} 
                        required 
                    />
                )}
            </div>
            
            <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
                 Phone No.
            </label>
            <div className="mb-2 flex md-4 border rounded-md">
                <input 
                    type="text" 
                    name="phone" 
                    placeholder="Enter your phone number" 
                    className="w-full p-3 rounded-md" 
                    onChange={handleChange} 
                    required 
                />
            </div>
            <div className="mb-2">
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                    Email
                </label>
                <input 
                    type="text" 
                    name="email" 
                    id="email" 
                    placeholder="Enter your email" 
                    className="w-full p-3 border rounded-md" 
                    onChange={handleChange} 
                    required 
                />
            </div>
            <div className="mb-3">
                <label htmlFor="password" className="block text-gray-700 font-medium mb-2">
                    Password
                </label>
                <input 
                    type="password" 
                    name="password" 
                    id="password" 
                    placeholder="Enter your password" 
                    className="w-full p-3 border rounded-md" 
                    onChange={handleChange} 
                    required 
                />
            </div>
            
            {/* Document Upload */}
            <div className="mb-2">
                <label className="block text-gray-700 font-medium mb-2">Upload Document Proof</label>
                <input 
                    type="file" 
                    name="document" 
                    onChange={handleFileChange}
                    className="w-full p-3 border rounded-md" 
                    required 
                />
            </div>

            {/* Submit Button */}
            <button 
                type="submit" 
                className="w-full text-white py-3 bg-brown6 rounded-md hover:bg-brown-700 cursor-pointer active:scale-95"
            >
                Request Signup
            </button>
        </form>
    );
}
