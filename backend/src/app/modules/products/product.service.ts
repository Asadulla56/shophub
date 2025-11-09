

import { IProduct } from "./product.interface.js";
import { Product } from "./product.model.js";

const createProduct = async (payload: IProduct) => {
  const result = await Product.create(payload);
  return result;
};

const getAllProducts = async () => {
  return await Product.find();
};

const getSingleProduct = async (id: string) => {
  return await Product.findById(id);
};

const updateProduct = async (id: string, payload: Partial<IProduct>) => {
  return await Product.findByIdAndUpdate(id, payload, { new: true });
};

const deleteProduct = async (id: string) => {
  return await Product.findByIdAndDelete(id);
};

export const ProductService = { createProduct, getAllProducts, getSingleProduct, updateProduct, deleteProduct };
