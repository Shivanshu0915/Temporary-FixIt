import axios from "axios";

export const AdminLoginHandler = async (props)=>{
    console.log(props);
    try{
        const response = await axios.post("http://localhost:3000/auth/login", props, {
            headers : {
                "Content-Type" : "application/json",
            },
        });
        console.log("Response: ", response.data);
        alert("Logged In successfully!")
    }
    catch(error){
        console.error("Error in logging in: ", error);
        alert("Login Failed! Check your credentials.")
    }
}

export const UserLoginHandler = async (props)=>{
    console.log(props);
    try{
        const response = await axios.post("http://localhost:3000/auth/login", props, {
            headers : {
                "Content-Type" : "application/json",
            },
        });
        console.log("Response: ", response.data);
        alert("Logged In successfully!")
    }
    catch(error){
        console.error("Error in logging in: ", error);
        alert("Login Failed! Check your credentials.")
    }
}