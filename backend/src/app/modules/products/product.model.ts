import { Schema, model } from "mongoose";
import { IProduct } from "./product.interface.js";

const productSchema = new Schema<IProduct>(
  {
    name: { type: String, required: true },
    price: { type: Number, required: true },
    category: { type: String, required: true },
    image: { type: String, required: true },
    rating: { type: Number, default: 0 },
  },
  { timestamps: true }
);

export const Product = model<IProduct>("Product", productSchema);
