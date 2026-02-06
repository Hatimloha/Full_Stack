import express from 'express'
import protect from '../middleware/authMiddleware.js'
import adminOnly from '../middleware/adminMiddleware.js'
import User from '../models/user.model.js'

const router = express.Router()

router.get('/users', protect, adminOnly, async (req, res) => {
    const user = await User.find().select("-password");
    res.json(user)
})

export default router
