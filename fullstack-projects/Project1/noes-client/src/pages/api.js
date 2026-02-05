import axios from "axios";

const api = axios.create({
    baseURL: "https://project1-frontend-amber.vercel.app", // 'http://localhost:5000'
    withCredentials: true,
})

export default api;