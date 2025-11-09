
import { Types } from "mongoose";
import { Cart } from "./cart.model.js";

const getCartByUser = async (userId: string) => {
  let cart = await Cart.findOne({ user: userId }).populate("items.product");
  if (!cart) {
    cart = await Cart.create({ user: new Types.ObjectId(userId), items: [] });
  }
  return cart;
};

const addToCart = async (userId: string, productId: string, qty = 1) => {
  const cart = await getCartByUser(userId);
  const existing = cart.items.find((i) => i.product.toString() === productId);
  if (existing) {
    existing.quantity += qty;
  } else {
    cart.items.push({ product: new Types.ObjectId(productId), quantity: qty });
  }
  await cart.save();
  return await cart.populate("items.product");
};

const updateItem = async (userId: string, productId: string, qty: number) => {
  const cart = await getCartByUser(userId);
  const item = cart.items.find((i) => i.product.toString() === productId);
  if (!item) throw new Error("Item not found in cart");
  item.quantity = qty;
  await cart.save();
  return await cart.populate("items.product");
};

const removeItem = async (userId: string, productId: string) => {
  const cart = await getCartByUser(userId);
  cart.items = cart.items.filter((i) => i.product.toString() !== productId);
  await cart.save();
  return await cart.populate("items.product");
};

const clearCart = async (userId: string) => {
  const cart = await getCartByUser(userId);
  cart.items = [];
  await cart.save();
  return cart;
};

export const CartService = {
  getCartByUser,
  addToCart,
  updateItem,
  removeItem,
  clearCart,
};
