import express from "express";
import { AuthRoutes } from "../modules/auth/auth.route.js";
import { UserRoutes } from "../modules/users/user.route.js";
import { ProductRoutes } from "../modules/products/product.route.js";
import { CartRoutes } from "../modules/cart/cart.route.js";

const router = express.Router();

router.use("/auth", AuthRoutes);   
router.use("/users", UserRoutes);      
router.use("/products", ProductRoutes); 
router.use("/cart", CartRoutes);        

export default router;
