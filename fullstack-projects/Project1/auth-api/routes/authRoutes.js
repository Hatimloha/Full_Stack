import express from 'express';
import {registerUser, loginUser} from '../controllers/authController.js'
import protect from '../middleware/authMiddleware.js'
import User from '../models/user.model.js'
import upload from '../middleware/upload.js';
import { uploadAvatar } from '../controllers/authController.js';

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.post('/logout', (req, res) => {
    res.clearCookie('token')
    res.json({message: 'Logged out'})
})
router.post('/upload', protect, upload.single('image'), uploadAvatar)
router.get('/me', protect, async (req, res) => {
    res.json(req.user)
})

export default router