import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import noteRoutes from "./routes/noteRoutes.js";
import path from 'path'
import taskRoutes from './routes/taskRoutes.js'

dotenv.config();
connectDB();

const app = express();

/* 🔥 MUST BE FIRST */
app.use(
  cors({
    origin: process.env.CORSLOCAL || "https://project1-frontend-amber.vercel.app",
    credentials: true
  })
);

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/notes", noteRoutes);
app.use("/api/tasks", taskRoutes)

app.get("/", (req, res) => {
  res.send("API Running");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});


// Env setup: 

if(process.env.NODE_ENV === "production"){
  app.use(express.static('client/dist'))
  
  app.get(/.*/, (req, res) => {
    res.sendFile(path.resolve('client', "dist", 'index.html'));
  });
}