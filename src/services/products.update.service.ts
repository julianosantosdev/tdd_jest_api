import { Repository } from "typeorm";
import { Product } from "../entities/product.entity";
import { AppDataSource } from "../data-source";

interface IUpdateProduct {
  name?: string;
  category?: string;
  price?: number;
  stock?: number;
}

const updateProductService = async (
  productId: number,
  productData: IUpdateProduct
): Promise<Product> => {
  const productRepository: Repository<Product> =
    AppDataSource.getRepository(Product);

  const product = await productRepository.findOneBy({ id: productId });

  const updatedProduct = productRepository.merge(product!, productData);

  await productRepository.save(updatedProduct);

  return updatedProduct;
};

export default updateProductService;