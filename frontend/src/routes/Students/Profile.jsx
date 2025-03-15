import { useState } from "react";
// import Pic from "./Pic.jpg";

export default function UserProfileDashboard() {
  const [user, setUser] = useState({
    name: "Saurabh Kumar Singh",
    regNo: "20233256",
    email: "saurabh@gamil.com",
    mobile: "1234567890",
    college: "MNNIT",
    hostel: "Grand Hostel",
    password: "12345", // Added password field
  });

  const [complaints, setComplaints] = useState({
    total: 15,
    resolved: 10,
    unresolved: 5,
  });

  const [isEditing, setIsEditing] = useState(false);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <div className="p-6 w-full min-h-screen bg-gray-900 text-white flex justify-center items-center">
      <div className="w-full max-w-4xl bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col md:flex-row">
        {/* Profile Picture and Complaint Statistics */}
        <div className="md:w-1/3 w-full flex flex-col items-center border-b md:border-b-0 md:border-r border-gray-700 pb-6 md:pb-0 md:pr-6">
          <img
            src="hello.png"  
            alt="Saurabh"
            className="w-36 h-36 rounded-full mb-4 border-2 border-gray-600"
          />
          <h2 className="text-lg font-semibold mb-2">Hello! {user.name}</h2>
          <div className="w-full mt-4 bg-gray-600 p-4 rounded-2xl text-center">
            <h2 className="text-lg font-semibold mb-4">Complaint Statistics</h2>
            {Object.entries(complaints).map(([key, value]) => (
              <div key={key} className="mb-2">
                <span className="font-medium capitalize">{key.replace(/([A-Z])/g, ' $1')}:</span>
                <span className="ml-2">{value}</span>
              </div>
            ))}
          </div>
        </div>
        
        {/* User Details */}
        <div className="md:w-2/3 w-full pl-0 md:pl-6 mt-6 md:mt-0">
          <h2 className="text-lg font-semibold mb-4">User Details</h2>
          {Object.keys(user).map((key) => (
            <div key={key} className="w-full mb-2">
              <label className="block text-sm font-medium capitalize">{key.replace(/([A-Z])/g, ' $1')}</label>
              <input
                type={key === "password" ? "password" : "text"} // Mask password input
                name={key}
                value={user[key]}
                onChange={handleChange}
                disabled={!isEditing}
                className="border p-2 w-full bg-gray-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          ))}
          <button onClick={() => setIsEditing(!isEditing)} className="mt-4 bg-blue-600 px-4 py-2 rounded text-white hover:bg-blue-700 w-full md:w-auto">
            {isEditing ? "Save" : "Edit"}
          </button>
        </div>
      </div>
    </div>
  );
}
