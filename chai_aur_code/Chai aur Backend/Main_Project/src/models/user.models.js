import mongoose, {Schema} from "mongoose";
import jwt from 'jsonwebtoken'
import bycrypt from 'bcryptjs'

const userSchema = mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
            index: true, // If enable this it optimize the search in the DB
        },
        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
        },
        fullName: {
            type: String,
            required: true,
            trim: true,
            index: true, // If enable this it optimize the search in the DB
        },
        avatar: {
            type: String, // cloudinary url
            required: true,
        },
        coverImage: {
            type: String, // cloudinary url
        },
        watchHistory: [
            {
                type: Schema.Types.ObjectId,
                ref: "User"
            }
        ],
        password: {
            type: String,
            required: [true || 'Password is require']
        },
        refreshToken: {
            type: String
        }


    }, {timeStamps: true})


// Import: Always use the normal function so we have the access of this
userSchema.pre('save',async function() {
    // if(!this.isModified('password')) return next() // it is require to avoid running the function while changing in the user data anywhere.
    // this.password = await bycrypt.hash(this.password, 10)
    // next()

    if(!this.isModified("password")) return
    this.password = await bycrypt.hash(this.password, 10)
})

userSchema.methods.isPasswordCorrect = async function(password) {
    return await bycrypt.compare(password, this.password)
}

// This run very fast so as such we dont need the async function
userSchema.methods.generateAccessToken = function(){
    return jwt.sign({
        _id: this._id,
        email: this.email,
        username: this.username,
        fullName: this.fullName,
    },
    process.env.ACCESS_TOKEN_SECRET,{
        expiresIn: process.env.ACCESS_TOKEN_EXPIRY
    }
    )
}

userSchema.methods.generateRefreshToken = function(){
    return jwt.sign({
        _id: this._id,
    },
    process.env.REFRESH_TOKEN_SECRET, {
        expiresIn: process.env.REFRESH_TOKEN_EXPIRY
    },
    )
}


export const User = mongoose.model('User', userSchema)