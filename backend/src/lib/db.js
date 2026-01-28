import { ENV } from "../lib/env.js"

import mongoose from "mongoose"


export const connectDB = async () => {
    try {
        const { MONGO_URI } = ENV

        if (!MONGO_URI) throw new Error("MONGO_URI is not set.")

        const conn = await mongoose.connect(ENV.MONGO_URI)

        console.log("MongoDB Connected:", conn.connection.host)
    } catch (error) {
        console.log(ENV.MONGO_URI)

        console.error("Error connecting to MongoDB:", error)

        process.exit(1) // 0 means success, 1 mean failure
    }
}