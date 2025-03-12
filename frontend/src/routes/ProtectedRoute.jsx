import { useEffect, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { getAccessToken } from "../components/Authentication/RefreshToken";

function ProtectedRoute({ children, allowedRole }) {
    const location = useLocation();
    const [isAuthenticated, setIsAuthenticated] = useState(null);
    const [role, setRole] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null); // To store the error flag

    useEffect(() => {
        async function verifyToken() {
            const result = await getAccessToken();
            if (!result.token) {
                setIsAuthenticated(false);
                setError(result.error);
            } else {
                setIsAuthenticated(true);
                setRole(sessionStorage.getItem("role"));
            }
            setLoading(false);
        }
        verifyToken();
    }, [location.pathname]);

    if (loading){
        return(
            <div className="bg-stubgdark text-white w-[100vw] h-[100vh]">
                Loading...
            </div>
        )
    };

    if (isAuthenticated === false) {
        if (error === "sessionExpired") {
            alert("Session expired. Login in again to continue");
        } else {
            alert("Login to continue");
        }
        return <Navigate to="/login" />;
    }

    if (role !== allowedRole) {
        alert("Access Denied!");
        return <Navigate to="/unauthorized" />;
    }
    return children;
}
export default ProtectedRoute;



// // ProtectedRoute.jsx
// import React, { useState, useEffect } from "react";
// import { useNavigate, Navigate } from "react-router-dom";
// import { getAccessToken } from "../components/Authentication/RefreshToken";


// const ProtectedRoute = ({ allowedRole, children }) => {
//   const navigate = useNavigate();
//   const [authorized, setAuthorized] = useState(false);
//   const [loading, setLoading] = useState(true);
//   const [unauthorized, setUnauthorized] = useState(false);

//   useEffect(() => {
//     const checkAuthorization = async () => {
//       try {
//         const { token, error } = await getAccessToken();
//         if (!token) {
//           if (error === "sessionExpired") {
//             alert("Session expired. Please log in again.");
//           } else {
//             alert("Please log in to continue.");
//           }
//           navigate("/login", { replace: true });
//           return;
//         }

//         // Role check: if user's role does not match the allowed role,
//         // alert and mark as unauthorized.
//         if (allowedRole) {
//           const userRole = sessionStorage.getItem("role");
//           if (userRole !== allowedRole) {
//             alert("Access Denied!");
//             setUnauthorized(true);
//             return;
//           }
//         }

//         setAuthorized(true);
//       } catch (err) {
//         console.error("Authorization check failed:", err);
//         alert("An error occurred. Please try again.");
//         navigate("/login", { replace: true });
//       } finally {
//         setLoading(false);
//       }
//     };

//     checkAuthorization();
//   }, [allowedRole, navigate]);

//   if (loading) {
//     // Render nothing during token check for a seamless experience.
//     return null;
//   }

//   if (unauthorized) {
//     // If unauthorized, redirect to the unauthorized route.
//     return <Navigate to="/unauthorized" replace />;
//   }

//   return authorized ? children : null;
// };

// export default ProtectedRoute;
