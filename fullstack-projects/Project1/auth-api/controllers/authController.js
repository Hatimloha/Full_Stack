import User  from '../models/user.model.js'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'


export const registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        if (!name || !email || !password) {
            return res.status(400).json({ message: 'All Field is required' })
        }

        const userExists = await User.findOne({ email });
        if (userExists) {
            return res.status(400).json({ message: 'User already exists' })
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt)

        const user = await User.create({
            name,
            email,
            password: hashedPassword,
        })

        res.status(200).json({
            _id: user._id,
            name: user.name,
            email: user.email
        })

    } catch (error) {
        console.log('Register Error', error)
        res.status(500).json({ message: error.message })
    }
}


export const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email });

        if (!user) {
            return res.status(400).json({ message: 'Invalid Credentials' })
        }

        const isMatch = await bcrypt.compare(password, user.password)

        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid credentials' })
        }

        const token = jwt.sign(
            { id: user._id },
            process.env.JWT_SECRET,
            { expiresIn: '7d' }
        )

        res.cookie('token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production', // only HTTPS in prod
            sameSite: 'Strict', // or 'Lax' depending on your frontend
            maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
        })

        res.json({
            token,
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
            }

        })

    } catch (error) {
        res.status(500).json({ message: error.message })
    }
} 