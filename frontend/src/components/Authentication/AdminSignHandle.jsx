import axios from "axios";

export const AdminHandler = async (props, navigate, moveToOtp) => {
    // console.log(props);
    try{
        const response = await axios.post("http://localhost:3000/user/signup-request", props);

        console.log("Response", response.data);
        alert("Waiting for approval. Check  your email");
        navigate("/");
    } 
    catch (error) {
        console.log(error);
    }
};




