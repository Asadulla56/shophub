import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { ApiError } from "../utils/ApiError.js";

export interface AuthRequest extends Request {
  user?: { id: string; email: string };
}

export const protect = (req: AuthRequest, res: Response, next: NextFunction) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      throw new ApiError(401, "Not authenticated");
    }

    const token = authHeader.split(" ")[1];
    const secret = process.env.JWT_SECRET as string;
    const payload = jwt.verify(token, secret) as { id: string; email: string };

    req.user = { id: payload.id, email: payload.email };
    next();
  } catch (err: any) {
    next(new ApiError(401, "Invalid or expired token"));
  }
};
