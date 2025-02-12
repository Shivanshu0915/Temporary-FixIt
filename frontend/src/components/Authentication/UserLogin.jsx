import { useState } from "react";
import { UserLoginHandler } from "./LoginHandler";

export function UserLogin() {
    const isAdmin = false;
    const[regNo, setRegNo] = useState("");
    const[password, setPassword] = useState("");

    return (
        <form>
            <div className="mb-4">
                <label htmlFor="regno" className="block text-gray-700 font-medium mb-2">
                    Registration Number
                </label>
                <input type="text" name="regno" id="regno" placeholder="Enter your registration number" className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:brown6"
                onChange={(e)=>{
                    setRegNo(e.target.value);
                }}/>
            </div>
            <div className="mb-4">
                <label htmlFor="password" className="block text-gray-700 font-medium mb-2">
                    Password
                </label>
                <input type="password" name="password" id="password" placeholder="Enter your password" className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:brown6"
                onChange={(e)=>{
                    setPassword(e.target.value);
                }}/>
            </div>
            <button type="submit" className="w-full text-white py-3 bg-brown6 shadow-lg shadow-brown2 rounded-md transition hover:shadow-md cursor-pointer"
            onClick={(e)=>{
                e.preventDefault();
                UserLoginHandler({isAdmin, regNo, password});
            }}>
                Login as User
            </button>
        </form>
    )
}