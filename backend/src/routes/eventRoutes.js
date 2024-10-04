import express  from "express";
import {
    createEvent,
    getEvents,
    getEventsByDate,
  } from "../controllers/eventController.js";
  import authMiddleware from "../middlewares/authMiddleware.js";
  import isAdmin from "../middlewares/adminMiddleware.js";

  import multer from "multer";

  const router = express.Router();


// Route for creating a new event
router.post("/create",createEvent);
//for getting all events
router.get("/get-events",getEvents);
//for getting events by date
router.get("/get-events/:date", getEventsByDate);
export default router;