import axios from "axios";
import { ErrorMsg } from "./AuthErrorMsgs";

export const UserSignUpHandler = async (props, navigate, moveToOtp) => {
    console.log(props);
    try{
        const response = await axios.post("http://localhost:3000/auth/signup", props , {
            headers: {
                "Content-Type": "application/json",
            },
        });
        console.log("Response", response.data);
        alert("Redirecting to OTP page!");

        //navigating to OTP Page
        // navigate("/otpPage", {replace : true});
        moveToOtp(props.email);
    } 
    catch (error) {
        ErrorMsg(error);
    }
};


export const AdminSignUpHandler = async (props, navigate, moveToOtp) => {
    // console.log(props);
    try{
        const response = await axios.post("http://localhost:3000/auth/signup", props , {
            headers: {
                "Content-Type": "application/json",
            },
        });

        console.log("Response", response.data);
        alert("Redirecting to OTP page!");
        //navigating to OTP Page
        moveToOtp(props.email);
    } 
    catch (error) {
        ErrorMsg(error);
    }
};

export const OtpHandler = async ({isAdmin, email, otp, onFailure, navigate, isResend}) => {
    let props = {
        email : email,
        otp : otp
    }
    console.log(props);
    const path = isResend ? "http://localhost:3000/auth/resend-otp" : "http://localhost:3000/auth/verify-otp";
    try{
        const response = await axios.post(path, props , {
            headers: {
                "Content-Type": "application/json",
            },
        });
        if(isResend === true){
            alert("OTP resent successfully!") 
            return;
        }
        else{
            console.log("Response", response.data);
            alert("User signed up successfully!")

            // redirecting to admin/student page
            isAdmin ? navigate("/adminDashboard") : navigate("/studentDashboard");
            return;
        }
    } 
    catch (error) {
        ErrorMsg(error);
        onFailure();
    }
};

