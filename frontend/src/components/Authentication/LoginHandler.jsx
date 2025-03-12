import axios from "axios";

export const LoginHandler = async (props)=>{
    console.log(props);
    try{
        const response = await axios.post("http://localhost:3000/auth/login", props, {
            headers : {
                "Content-Type" : "application/json",
            },
            withCredentials: true, // Send cookies
        });
        sessionStorage.setItem("accessToken", response.data.accessToken);
        sessionStorage.setItem("role", response.data.role);
        alert("Logged in successfully!");
        window.location.href = response.data.role === "user" ? "/studentDashboard" : "/adminDashboard";
    }
    catch(error){
        console.error("Error in logging in: ", error);
        alert("Login Failed! Check your credentials.")
    }
}