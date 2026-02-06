import axios from "axios";

const api = axios.create({
    baseURL: 'http://localhost:5000',   // "https://project1-backend-7iet.onrender.com", 
    withCredentials: true,
})

export default api;