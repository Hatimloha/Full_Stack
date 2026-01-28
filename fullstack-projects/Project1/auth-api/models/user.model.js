import mongoose, {Schema} from "mongoose";

const userSchema = mongoose.Schema(
    {
       name: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        index: true,
        trim: true,
       },
       email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
       },
       password: {
        type: String,
        required: true,
       },
    },{timestamps: true})


export const User = mongoose.model('User', userSchema)