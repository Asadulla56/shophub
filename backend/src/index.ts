import express, { Application } from "express";
import cors from "cors";
import morgan from "morgan";
import router from "./app/routes/index.js";
import { errorHandler } from "./app/middlewares/error.middleware.js";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const app: Application = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use("/api/v1", router);

// global error handler
app.use(errorHandler);

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_URI as string);
    console.log("MongoDB connected");
  } catch (error) {
    console.error("DB connection error:", error);
    process.exit(1);
  }
};

connectDB();

export default app;
