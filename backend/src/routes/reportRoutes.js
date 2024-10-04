import express from "express";
import {
  createReport,
  getAllReports,
  getReportById,
  updateReportById,
  deleteReportById,
  likeReport,
} from "../controllers/reportControllers.js";

const router = express.Router();



// Route for creating a new report
router.post("/create", createReport);

// Route for getting all reports
router.get("/", getAllReports);

// Route for getting a specific report by ID
router.get("/:id", getReportById);

// Route for updating a report by ID
router.put("/:id", updateReportById);

// Route for deleting a report by ID

router.delete("/:id", deleteReportById);
//for like
router.post("/like/:id", likeReport);

export default router;