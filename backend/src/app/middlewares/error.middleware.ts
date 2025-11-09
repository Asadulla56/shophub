import { Request, Response, NextFunction } from "express";
import { ApiError } from "../utils/ApiError.js";
// import { ApiError } from "../utils/ApiError";

export const errorHandler = (err: any, _req: Request, res: Response, _next: NextFunction) => {
  console.error(err);
  if (err instanceof ApiError) {
    return res.status(err.statusCode).json({ success: false, message: err.message });
  }

  res.status(500).json({ success: false, message: err?.message || "Internal Server Error" });
};
