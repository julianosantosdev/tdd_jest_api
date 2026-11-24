import { Router, Request, Response } from "express";
import { createProductController, deleteProductController, readProductController, updateProductController } from "../controllers/products.controllers";

const productRoutes = Router();

productRoutes.post("", createProductController)
productRoutes.get("", readProductController)
productRoutes.patch("/:id", updateProductController)
productRoutes.delete("/:id", deleteProductController)

export default productRoutes;
