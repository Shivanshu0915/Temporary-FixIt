import axios from "axios";

export const AdminHandler = async (props, navigate, moveToOtp) => {
    try{
        console.log("props data", props.data);
        console.log("keys");
        const signupObject = {};
        props.forEach((value, key) => {
            console.log(key);
            if(!(key === "document")) signupObject[key] = value;
        });

        console.log(signupObject);
        console.log("signup data", signupObject.data);
        const response1 = await axios.post("http://localhost:3000/auth/signup",signupObject);
        console.log("Response", response1.data);
        
        alert("Redirecting to OTP page!");
        // moveToOtp(signupObject.email);
        moveToOtp(props);

    } 
    catch (error) {
        console.log(error);
    }
};




