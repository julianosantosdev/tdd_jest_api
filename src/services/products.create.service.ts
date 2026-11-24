import { Repository } from "typeorm";
import { Product } from "../entities/product.entity";
import { AppDataSource } from "../data-source";

interface ICreateProduct {
  name: string;
  category: string;
  price: number;
  stock: number;
}

const createNewProductService = async (
  newProductData: ICreateProduct
): Promise<Product> => {
  const productRepository: Repository<Product> =
    AppDataSource.getRepository(Product);

  const newProduct: Product = productRepository.create(newProductData);
  
  await productRepository.save(newProduct);

  return newProduct;
};

export default createNewProductService;