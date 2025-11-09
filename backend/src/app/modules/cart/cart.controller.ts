import { Response, NextFunction } from "express";
import { CartService } from "./cart.service.js";
// import { AuthRequest } from "../../middlewares/auth.middleware";
// import { CartService } from "./cart.service";

// Get current user's cart
const getCart = async (req: AuthRequest, res: Response, next: NextFunction) => {
  try {
    const userId = req.user!.id;
    const cart = await CartService.getCartByUser(userId);
    res.json({ success: true, data: cart });
  } catch (err) {
    next(err);
  }
};

// Add item to cart
const addToCart = async (req: AuthRequest, res: Response, next: NextFunction) => {
  try {
    const userId = req.user!.id;
    const { productId, quantity } = req.body;
    const cart = await CartService.addToCart(userId, productId, quantity || 1);
    res.json({ success: true, data: cart });
  } catch (err) {
    next(err);
  }
};

// Update quantity of an item
const updateItem = async (req: AuthRequest, res: Response, next: NextFunction) => {
  try {
    const userId = req.user!.id;
    const { productId } = req.params;
    const { quantity } = req.body;
    const cart = await CartService.updateItem(userId, productId, quantity);
    res.json({ success: true, data: cart });
  } catch (err) {
    next(err);
  }
};

// Remove an item from cart
const removeItem = async (req: AuthRequest, res: Response, next: NextFunction) => {
  try {
    const userId = req.user!.id;
    const { productId } = req.params;
    const cart = await CartService.removeItem(userId, productId);
    res.json({ success: true, data: cart });
  } catch (err) {
    next(err);
  }
};

// Clear the entire cart
const clearCart = async (req: AuthRequest, res: Response, next: NextFunction) => {
  try {
    const userId = req.user!.id;
    const cart = await CartService.clearCart(userId);
    res.json({ success: true, data: cart });
  } catch (err) {
    next(err);
  }
};

export const CartController = {
  getCart,
  addToCart,
  updateItem,
  removeItem,
  clearCart,
};
