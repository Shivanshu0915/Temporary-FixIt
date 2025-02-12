import { createBrowserRouter, createRoutesFromElements, Route } from "react-router";
import Home from "./routes/Home.jsx";
import LoginPage from "./routes/Login.jsx"
import Signup from "./routes/Signup.jsx"
import { StudentMain } from "./routes/Students/StudentMain.jsx";
import OTPPage from "./routes/OTP.jsx";
import { AdminMain } from "./routes/Authorities/AdminMain.jsx";

const App= createBrowserRouter(
    createRoutesFromElements(
        <>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/otpPage' element={<OTPPage/>}/>
        <Route path='/studentDashboard' element={<StudentMain/>}/>
        <Route path='/adminDashboard' element={<StudentMain/>}/>
        </>
    )
)

export default App;