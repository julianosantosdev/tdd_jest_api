import { Repository } from "typeorm";
import { Product } from "../entities/product.entity";
import { AppDataSource } from "../data-source";

const readProductService = async (): Promise<Product[]> => {
  const productRepository: Repository<Product> =
    AppDataSource.getRepository(Product);

  const products = await productRepository.find();

  return products;
};

export default readProductService;