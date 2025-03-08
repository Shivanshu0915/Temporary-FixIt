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
        alert("Redirecting to OTP page!");
        moveToOtp(props.email);
    } 
    catch (error) {
        ErrorMsg(error);
    }
};


export const AdminSignUpHandler = async (props, navigate, moveToOtp) => {
    try{
        const signupObject = {};
        props.forEach((value, key) => {
            if(!(key === "document")) signupObject[key] = value;
        });

        const response = await axios.post("http://localhost:3000/auth/signup",signupObject);
        alert("Redirecting to OTP page!");
        moveToOtp(props);
    } 
    catch (error) {
        ErrorMsg(error);
    }
};

export const OtpHandler = async ({isAdmin, formData, otp, onFailure, navigate, isResend}) => {
    let props;
    if(isAdmin){
        const formObject = Object.fromEntries(formData.entries());
        props = {
            email : formObject.email,
            otp : otp
        }
    }
    else{
        props = {
            email : formData,
            otp : otp
        }
    }

    const path = isResend ? "http://localhost:3000/auth/resend-otp" : "http://localhost:3000/auth/verify-otp";
    try{
        const response = await axios.post(path, props);
        if(isResend === true){
            alert("OTP resent successfully!") 
            return;
        }
        else{
            if(isAdmin){
                alert("Otp verified successfully!")
                const response = await axios.post("http://localhost:3000/user/signup-request", formData);
                alert("Waiting for approval. Check  your email");
                navigate("/");
            }
            else{
                alert("User signed up successfully!");
                navigate("/studentDashboard")
            }
            return;
        }
    } 
    catch (error) {
        ErrorMsg(error);
        onFailure();
    }
};

