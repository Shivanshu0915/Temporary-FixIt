import { useState } from "react";
import Pic from "./Pic.jpg";

export default function AdminProfileDashboard() {
  const [user, setUser] = useState({
    name: "Sauarbh Kumar Singh",
    college: "MNNIT",
    hostel: "Grand Hostel",
    category: "Hostel",
    position: "Care taker",
    email: "saurabh@gamil.com",
    mobile: "1234567890",
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
    <div className="p-6 w-full h-screen bg-gray-900 text-white flex justify-center items-center">
      <div className="w-3/4 bg-gray-800 p-6 rounded-lg shadow-lg flex">
        {/* Profile Picture and Complaint Statistics */}
        <div className="w-1/3 flex flex-col items-center border-r border-gray-700 pr-6">
          <img
            src={Pic}
            alt="Saurabh"
            className="w-36 h-36 rounded-full mb-4 border-2 border-gray-600"
          />
          <h2 className="text-2xl font-semibold mb-2 text-blue-600">ADMIN</h2>
          <div className="w-full mt-15 bg-gray-600 rounded-2xl">
            <h2 className="text-lg font-semibold mb-4 text-center">Complaint Statistics</h2>
            {Object.entries(complaints).map(([key, value]) => (
              <div key={key} className="mb-2 text-center">
                <span className="font-medium capitalize">{key.replace(/([A-Z])/g, ' $1')}:</span>
                <span className="ml-2">{value}</span>
              </div>
            ))}
          </div>
        </div>
        
        {/* User Details */}
        <div className="w-2/3 pl-6">
          <h2 className="text-lg font-semibold mb-4">Details</h2>
          {Object.keys(user).map((key) => (
            <div key={key} className="w-full mb-2">
              <label className="block text-sm font-medium capitalize">{key.replace(/([A-Z])/g, ' $1')}</label>
              <input
                type={key === "password" ? "password" : "text"} // Mask password input
                name={key}
                value={user[key]}
                onChange={handleChange}
                disabled={!isEditing}
                className="border p-2 w-full bg-gray-700 text-white rounded"
              />
            </div>
          ))}
          <button onClick={() => setIsEditing(!isEditing)} className="mt-4 bg-blue-600 px-4 py-2 rounded text-white hover:bg-blue-700">
            {isEditing ? "Save" : "Edit"}
          </button>
        </div>
      </div>
    </div>
  );
}
