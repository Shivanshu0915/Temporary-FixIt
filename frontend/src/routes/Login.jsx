import React, { useState } from "react";
import { AdminLogin } from "../components/Authentication/AdminLogin";
import { UserLogin } from "../components/Authentication/UserLogin";

const LoginPage = () => {
  const [isAdmin, setIsAdmin] = useState(true); // 'admin' or 'user'

  return (
    <div className="h-[100vh] flex items-center justify-center bg-badamidark">
      <div className="bg-white md:rounded-lg p-4 w-full sm:w-[65%] h-full sm:h-[85%] overflow-auto  flex flex-col lg:flex-row">
        {/* Left Section */}
        <div className="w-full lg:w-1/2 p-8">
          <h2 className="text-3xl font-bold mb-4 text-brown6">
            {isAdmin ? "Admin Login" : "User Login"}
          </h2>
          <p className="text-gray-600 mb-6">
            {isAdmin ? "Login as an administrator to manage the platform."
              : "Login as a student to access your account."}
          </p>

          {/* Buttons to Toggle Login Mode */}
          <div className="flex space-x-4 mb-6">
            <button
              className={`py-2 px-4 rounded-md font-medium transition ${isAdmin ? "bg-brown5 text-white hover:bg-brown6 cursor-pointer"
                : "bg-gray-200 text-gray-800 hover:bg-gray-300 cursor-pointer"
                }`}
              onClick={() => setIsAdmin(!isAdmin)}
            >
              Admin
            </button>
            <button
              className={`py-2 px-4 rounded-md font-medium transition ${!isAdmin ? "bg-brown5 text-white hover:bg-brown6 cursor-pointer"
                : "bg-gray-200 text-gray-800 hover:bg-gray-300 cursor-pointer"
                }`}
              onClick={() => setIsAdmin(!isAdmin)}
            >
              User
            </button>
          </div>

          {/* Login Form */}
          {isAdmin ? (
            <AdminLogin></AdminLogin>
          ) : (
            <UserLogin></UserLogin>
          )}

          {/* Divider */}
          <div className="text-center text-sm text-gray-500 my-4">OR</div>

          {/* Sign Up Link */}
          <div className="text-sm text-gray-500 mt-6 text-center flex justify-center">
            Haven't signup?{" "}
            <p className="animate-bounce">
              <a href="/Signup" className="m-1 text-red-500 font-medium hover:underline">
                Sign up here!
              </a>
            </p>
          </div>
        </div>

        {/* Right Section: Illustration */}
        <div className="w-full lg:w-1/2 hidden lg:flex items-center justify-center">
          <img
            src="https://cdn.dribbble.com/users/3281732/screenshots/16120527/media/53b8f6c7c5e6a87f3bc92b8fa22f2fdb.png"
            alt="Login Illustration"
            className="rounded-lg shadow-lg max-h-96"
          />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
