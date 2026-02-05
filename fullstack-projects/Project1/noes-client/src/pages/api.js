import axios from "axios";

const api = axios.create({
    baseURL: "https://project1-backend-dgxe.onrender.com/", // 'http://localhost:5000'
    withCredentials: true,
})

export default api;