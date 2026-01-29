import {
  signup,
  login,
  logout,
  updateProfile,
} from "../controllers/auth.controller.js";
import { ENV } from "../lib/env.js";
import { arcjetProtection } from "../middlewares/arcjet.middleware.js";
import { protectRoute } from "../middlewares/auth.middleware.js";

import express from "express";

const router = express.Router();

if (ENV.NODE_ENV === "production") {
  router.use(arcjetProtection)
}

router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);

router.put("/update-profile", protectRoute, updateProfile);

router.get("/check", protectRoute, (req, res) =>
  res.status(200).json(req.user),
);

export default router;
