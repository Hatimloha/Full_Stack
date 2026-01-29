import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import connectDb from './config/db.js'
import authRoutes from './routes/authRoutes.js'
import noteRoutes from './routes/noteRoutes.js'


// load env file before application start
dotenv.config();
connectDb()


// Creating a express app
const app = express()


// URL whitelisting
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}))

// Allow JSON 
app.use(express.json())

// Cookie Access
app.use(cookieParser())


// API running response on browser
app.get('/', (req, res) => {
    res.send('API Running')
})


// Listing port
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    
})


// authRoutes
app.use('/api/auth', authRoutes)


// noteRoutes
app.use('/api/notes', noteRoutes)