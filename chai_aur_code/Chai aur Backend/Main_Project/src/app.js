import express from "express";
import cors from 'cors'
import cookieParser from "cookie-parser";


const app = express()

// Whitelist the url to access the backend & DB
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true, // use to allow cookies & auth headers from frontend
}))

// this is use to allow JSON data from frontend and we can set multiple obj property
app.use(express.json({
    limit: '16kb'
}))

// This is use to encoded url data so backend can understand (example: https://github.hatim786%$$5456789ughj.com)
app.use(express.urlencoded({
    extended: true,
    limit: '16kb'
}))

// Public asset - store the media
app.use(express.static("public"))

// Use to perform the CURD operations
app.use(cookieParser())


// Routes import 
import userRouter from './routes/user.routes.js'


// routes declaration
app.use("/api/v1/users", userRouter)

export {app}