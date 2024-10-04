// alertRoutes.js
import express from "express";
import { createAlert, getAlerts } from "../controllers/alertController.js";
import authMiddleware from "../middlewares/authMiddleware.js";
import isAdmin from "../middlewares/adminMiddleware.js";

const router = express.Router();

// Route for creating a new alert
router.post("/create", createAlert);

// Route for getting all alerts
router.get("/", getAlerts);

export default router;
