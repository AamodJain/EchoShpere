import mongoose from "mongoose";

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_DB_URI,{dbName : "chat-app"});
        console.log(`MongoDB connected`);
    } catch (error) {
        console.log("Error while connecting to MongoDB");
    }
};

export default connectDB;   