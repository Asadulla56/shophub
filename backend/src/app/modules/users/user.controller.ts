import { Response, NextFunction } from "express";
import { UserService } from "./user.service.js";
import { AuthRequest } from "../../middlewares/auth.middleware.js";

const getProfile = async (req: AuthRequest, res: Response, next: NextFunction) => {
  try {
    const id = req.user?.id as string;
    const user = await UserService.getUserById(id);
    res.json({ success: true, data: user });
  } catch (err) {
    next(err);
  }
};

const updateProfile = async (req: AuthRequest, res: Response, next: NextFunction) => {
  try {
    const id = req.user?.id as string;
    const user = await UserService.updateUser(id, req.body);
    res.json({ success: true, data: user });
  } catch (err) {
    next(err);
  }
};

export const UserController = { getProfile, updateProfile };
