import { createBrowserRouter, createRoutesFromElements, Route, Navigate } from "react-router-dom";
import Home from "./routes/Home.jsx";
import LoginPage from "./routes/Login.jsx";
import Signup from "./routes/Signup.jsx";
import OTPPage from "./routes/OTP.jsx";
import ProtectedRoute from "./routes/ProtectedRoute.jsx";

import { StudentMain } from "./routes/Students/StudentMain.jsx";
import { AdminMain } from "./routes/Authorities/AdminMain.jsx";
import { FileComplaint } from "./routes/Students/FileComplaint.jsx";
import { StuMidFirst } from "./components/DashBoardComp/StuMidMain.jsx";
import UserProfileDashboard from "./routes/Students/Profile.jsx";

const App = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path="/" element={<Home/>} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/otpPage" element={<OTPPage />} />

            {/* Group all student routes under a parent route */}
            {/* <Route path="/studentDashboard" element={<ProtectedRoute allowedRole="user"><StudentMain /></ProtectedRoute>}>
                <Route index element={<StuMidFirst/>} />
                <Route path="file-complaint" element={<FileComplaint />} />
            </Route> */}

            <Route path="/studentDashboard" element={<ProtectedRoute allowedRole="user"><StudentMain /></ProtectedRoute>}>
                <Route index element={ <ProtectedRoute allowedRole="user"> <StuMidFirst /></ProtectedRoute>}/>
                <Route path="file-complaint" element={<ProtectedRoute allowedRole="user"><FileComplaint /></ProtectedRoute>}/>
            </Route>

            <Route path="/studentDashboard/profile" element={<ProtectedRoute allowedRole="user"><UserProfileDashboard /></ProtectedRoute>}/>
            {/* Group all admin routes under a parent route */}
            <Route path="/adminDashboard" element={<ProtectedRoute allowedRole="admin"><AdminMain /></ProtectedRoute>}>
            </Route>
        </>
    )
);

export default App;
