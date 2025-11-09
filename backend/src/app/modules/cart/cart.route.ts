import express from "express";
import { CartController } from "./cart.controller.js";
import { protect } from "../../middlewares/auth.middleware.js";

const router = express.Router();

router.use(protect);

router.get("/", CartController.getCart);

router.post("/", CartController.addToCart); 

router.put("/:productId", CartController.updateItem); 

router.delete("/:productId", CartController.removeItem);

router.delete("/", CartController.clearCart);

export const CartRoutes = router;
