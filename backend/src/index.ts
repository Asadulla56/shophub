import express, { Application } from "express";
import cors from "cors";
import router from "./app/routes/index.js";
import { errorHandler } from "./app/middlewares/error.middleware.js";

const app: Application = express();

app.use(cors());
app.use(express.json());
app.use("/api/v1", router);

// global error handler
app.use(errorHandler);

export default app;
