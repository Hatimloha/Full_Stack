import mongoose from 'mongoose'

const connectDb = async () => {
    try {
        const Dbconnection = await mongoose.connect(`${process.env.MONGO_URI}`);
        
        console.log(`MongoDB Connected !! DB Host ${Dbconnection.connection.host}`);

    } catch (error) {
        console.error(error.message);
        process.exit(1);
    }
}

export default connectDb