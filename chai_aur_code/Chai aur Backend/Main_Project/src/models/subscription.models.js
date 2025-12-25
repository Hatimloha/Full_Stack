import { mongo } from "mongoose"
import mongoose, {Schema} from mongoose

const subscriptionSchema = new Schema({
    Subscriber: {
        type: Schema.Types.ObjectId,    // One who is subsribing
        ref: "User"
    },
    channel: {
        type: Schema.Types.ObjectId,    // One who is subsriber is subscribing
        ref: "User"
    },  
}, {timeStamps: true})

export const Subscription = mongoose.model("Subscription", subscriptionSchema)
