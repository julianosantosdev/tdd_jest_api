import { Repository } from "typeorm";
import { Product } from "../entities/product.entity";
import { AppDataSource } from "../data-source";

const deleteProductService = async (productId: number): Promise<void> => {
  const productRepository: Repository<Product> =
    AppDataSource.getRepository(Product);

  await productRepository.delete(productId);
};

export default deleteProductService;