import express from "express";
import { UserController } from "./user.controller.js";
import { protect } from "../../middlewares/auth.middleware.js";

const router = express.Router();

router.get("/me", protect, UserController.getProfile);
router.put("/me", protect, UserController.updateProfile);

export const UserRoutes = router;
