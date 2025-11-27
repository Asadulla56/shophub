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
    
    // Server listen logic moved inside DB connection for safety
    // Vercel doesn't explicitly need app.listen but for local dev it is needed
    // However, keeping it simply exported allows Vercel to handle it.
  } catch (error) {
    console.error("DB connection error:", error);
    process.exit(1);
  }
};

connectDB();
mongoose.connection.on('connected', () => {
  app.listen(process.env.PORT || 5000, () => {
    console.log(`Server is running on port ${process.env.PORT || 5000}`);
  });
});

export default app;