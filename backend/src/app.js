import cookieParser from "cookie-parser";
import cors from "cors";
import express from "express";

import formData from "express-form-data";
import os from "os";

import userRouter from "./routes/userRoutes.js";
import reportRouter from "./routes/reportRoutes.js";
import checkboxRouter from "./routes/checkboxRoutes.js";
import alertRouter from "./routes/alertRoutes.js";

import eventRouter from "./routes/eventRoutes.js";
import connectDB from "./db/database.js";
import path, { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
app.use(express.json());
const options = {
  uploadDir: path.join(".", "uploads"),
};

// parse data with connect-multiparty.
app.use(formData.parse(options));
app.use(express.static("public"));
app.use(cookieParser());
app.use("/uploads", express.static("uploads"));

connectDB();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

app.use("/api/users", userRouter);

app.use("/api/alerts", alertRouter);
app.use("/api/reports", reportRouter);
app.use("/api/events", eventRouter);

export { app };

// app.use(express.json());

// app.use(bodyParser.json());

// app.use(bodyParser.json());
// app.use(express.json({ limit: "16kb" }));
// app.use(express.urlencoded({ extended: true }));
// app.use('/uploads', express.static('uploads'));
// app.use(express.static("public"));
// app.use(cookieParser());

// app.use("/api/users", userRouter);

// app.use("/api/users",reportRouter);
// app.use('api/checkbox', checkboxRouter);

// export { app};
