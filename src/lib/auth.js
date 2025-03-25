import axios from "axios";
import Cookies from "js-cookie";

const API_URL = process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:1337/api";

export const registerUser = async (username, email, password) => {
    const res = await axios.post(`${API_URL}/auth/local/register`, { username, email, password });
    Cookies.set("token", res.data.jwt);
    return res.data;
};

export const loginUser = async (identifier, password) => {
    const res = await axios.post(`${API_URL}/auth/local`, { identifier, password });
    Cookies.set("token", res.data.jwt);
    return res.data;
};

export const logoutUser = () => {
    Cookies.remove("token");
    window.location.href = "/login";
};
