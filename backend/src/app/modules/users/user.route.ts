import express from "express";
import { UserController } from "./user.controller.js";
// import { UserController } from "../modules/users/user.controller.js";
// import { UserController } from "./user.controller";
// import { protect } from "../../middlewares/auth.middleware";

const router = express.Router();

router.get("/me", protect, UserController.getProfile);
router.put("/me", protect, UserController.updateProfile);

export const UserRoutes = router;
