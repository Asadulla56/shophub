import { Request, Response, NextFunction } from "express";
import { AuthService } from "./auth.service.js";

const register = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const user = await AuthService.createUser(req.body);
    const token = AuthService.generateToken({ id: user._id.toString(), email: user.email });
    res.status(201).json({ success: true, data: { user, token } });
  } catch (err) {
    next(err);
  }
};

const login = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { email, password } = req.body;
    const user = await AuthService.validateUser(email, password);
    const token = AuthService.generateToken({ id: user._id.toString(), email: user.email });
    res.status(200).json({ success: true, data: { user, token } });
  } catch (err) {
    next(err);
  }
};

export const AuthController = { register, login };
