import jwt from 'jsonwebtoken'
import User from '../models/user.model.js'

const protect = async (req, res, next) => {    
    try {
        let token = req.cookies.token
        
        if(!token){
            return req.this.status(401).json({message: 'Not authorized, no token'})
        }

        const decode = jwt.verify(token, process.env.JWT_SECRET)

        req.user = await User.findById(decode.id).select('-password')

        next()
    } catch (error) {
        console.log(error);
        res.status(401).json({message: 'Not authorized, token failed'})
    }
}

export default protect