import mongoose, {Schema } from "mongoose"


const taskSchema = mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        },
        title: String,
        status: {
            type: String,
            enum: ['todo', 'doing', 'done'],
            default: 'todo'
        }
    }, {timestamps: true})


export default mongoose.model("Task", taskSchema)
