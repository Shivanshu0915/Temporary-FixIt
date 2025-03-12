import { jwtDecode } from "jwt-decode";

export async function getAccessToken() {
    let token = sessionStorage.getItem("accessToken");
    const role = sessionStorage.getItem("role");

    if (!token) {
        console.log("token nhi hai");
        return await refreshAccessToken(role);
    }

    try {
        console.log("Token hai");
        const decoded = jwtDecode(token);
        const currentTime = Math.floor(Date.now() / 1000);

        if (decoded.exp < currentTime) {
            console.log("Token hai but expired");
            return await refreshAccessToken(role);
        }

        return { token, error: null };
    } catch (err) {
        console.error("Invalid token format", err);
        return await refreshAccessToken(role);
    }
}

async function refreshAccessToken(role) {
    try {
        const res = await fetch("http://localhost:3000/auth/refresh", {
            method: "POST",
            credentials: "include",
        });

        if (res.ok) {
            console.log("token refresh hua");
            const data = await res.json();
            sessionStorage.setItem("accessToken", data.accessToken);
            return { token: data.accessToken, error: null };
        } else {
            console.log("refresh nhi hua");
            sessionStorage.removeItem("accessToken");
            sessionStorage.removeItem("role");
            return { token: null, error: role ? "sessionExpired" : "notLoggedIn" };
        }
    } catch (err) {
        console.log("token refresh mai error aaya")
        sessionStorage.removeItem("accessToken");
        sessionStorage.removeItem("role");
        console.error("Failed to refresh token", err);
        return { token: null, error: role ? "sessionExpired" : "notLoggedIn" };
    }
}