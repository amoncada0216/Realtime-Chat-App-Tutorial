import { connectDB } from "./lib/db.js"
import { ENV } from "../lib/env.js"

import express from "express"
import path from "path"
import authRoutes from "./routes/auth.route.js"
import messageRoutes from "./routes/message.route.js"


const app = express()
const __dirname = path.resolve()

const PORT = ENV.PORT || 7777

app.use(express.json())

// Serve frontend FIRST
app.use(express.static(path.join(__dirname, "../frontend/dist")))

// API routes
app.use("/api/auth", authRoutes)
app.use("/api/messages", messageRoutes)

// Make ready for deployment
if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "../frontend", "dist")))

    app.get("*", (_, res) => {
        res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"))
    })
}

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}.`)
    connectDB()
})