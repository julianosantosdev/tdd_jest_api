import { Request, Response } from "express";
import createNewProductService from "../services/products.create.service";

import updateProductService from "../services/products.update.service";
import readProductService from "../services/product.read.service";
import deleteProductService from "../services/product.delete.service";


const createProductController = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const newProductData = request.body;
  const newProduct = await createNewProductService(newProductData);
  return response.status(201).json(newProduct);
};

const readProductController = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const products = await readProductService();
  return response.status(200).json(products);
};

const updateProductController = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const productId = Number(request.params.id);
  const productData = request.body;

  const updatedProduct = await updateProductService(productId, productData);
  return response.status(200).json(updatedProduct);
};

const deleteProductController = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const productId = Number(request.params.id);

  await deleteProductService(productId);
  return response.status(204).send();
};

export {
  createProductController,
  readProductController,
  updateProductController,
  deleteProductController,
};