import express from "express";
import {
  registerUser,
  loginUser,
  adminOnlyRoute,
} from "../controllers/userControllers.js";
import authMiddleware from "../middlewares/authMiddleware.js";
import isAdmin from "../middlewares/adminMiddleware.js";
import { createAlert, getAlerts } from "../controllers/alertController.js";

const router = express.Router();

// Register a new user
router.post("/register", registerUser);

// Login user
router.post("/login", loginUser);
router.get("/get-alert", authMiddleware, getAlerts);
// Admin routes
// router.get('/getReports', authMiddleware, isAdmin, getAllReports);

router.post("/create-alert", authMiddleware, isAdmin, createAlert);

// router.get('/admin-only', ()=>{
//     console.log("hello");
// });

export default router;
