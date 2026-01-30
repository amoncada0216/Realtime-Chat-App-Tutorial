import { connectDB } from "./lib/db.js"
import { ENV } from "./lib/env.js"

import express from "express"
import path from "path"
import cookieParser from "cookie-parser"
import cors from "cors"

import authRoutes from "./routes/auth.route.js"
import messageRoutes from "./routes/message.route.js"

const PORT = ENV.PORT || 7777;

const app = express();
const __dirname = path.resolve();

app.use(express.json())
app.use(cors({ origin: "http://localhost:5173", credentials: true }))
app.use(cookieParser())

// Serve frontend FIRST
app.use(express.static(path.join(__dirname, "../frontend/dist")));

// API routes
app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);

// Make ready for deployment
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend", "dist")));

  app.get("*", (_, res) => {
    res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
  });
}

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}.`);
  connectDB();
});
