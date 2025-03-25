import axios from "axios";
import Cookies from "js-cookie";

const API_URL = process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:1337/api";

// ✅ Fetch articles with authentication
export const fetchArticles = async () => {
    try {
        const token = Cookies.get("token"); // ✅ Get the latest JWT token
        const headers = token ? { Authorization: `Bearer ${token}` } : {};

        const response = await axios.get(`http://localhost:1337/api/articles?populate=*`);
        return response.data.data; // ✅ Ensure correct response format
    } catch (error) {
        console.error("Error fetching articles:", error.response ? error.response.data : error.message);
        return [];
    }
};
