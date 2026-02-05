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
       avatar: {
        type: String
       }
    },{timestamps: true})


export default mongoose.model('User', userSchema)