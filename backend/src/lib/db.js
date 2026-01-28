import mongoose from "mongoose"

export const connectDB = async () => {
    try {
       const conn = await mongoose.connect(process.env.MONGO_URI)
        console.log("MongoDB Connected:", conn.connection.host)
    } catch (error) {
        console.log(process.env.MONGO_URI)
        console.error("Error connecting to MongoDB:", error)
        process.exit(1) // 0 means success, 1 mean failure
    }
}