import axios from "axios";

const api = axios.create({
    baseURL: "https://project1-backend-7iet.onrender.com", // 'http://localhost:5000'
    withCredentials: true,
})

export default api;