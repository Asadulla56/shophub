import { Request, Response, NextFunction } from "express";
import { ProductService } from "./product.service.js";
// import { ProductService } from "./product.service";

const createProduct = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await ProductService.createProduct(req.body);
    res.status(201).json({ success: true, data: result });
  } catch (err) {
    next(err);
  }
};

const getAllProducts = async (_req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await ProductService.getAllProducts();
    res.json({ success: true, data: result });
  } catch (err) {
    next(err);
  }
};

const getSingleProduct = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const result = await ProductService.getSingleProduct(id);
    res.json({ success: true, data: result });
  } catch (err) {
    next(err);
  }
};

const updateProduct = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const result = await ProductService.updateProduct(id, req.body);
    res.json({ success: true, data: result });
  } catch (err) {
    next(err);
  }
};

const deleteProduct = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    await ProductService.deleteProduct(id);
    res.json({ success: true, message: "Product deleted" });
  } catch (err) {
    next(err);
  }
};

export const ProductController = { createProduct, getAllProducts, getSingleProduct, updateProduct, deleteProduct };
