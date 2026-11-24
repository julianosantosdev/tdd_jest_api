import request from "supertest";
import app from "../app";
import { AppDataSource } from "../data-source";
import { Product } from "../entities/product.entity";

describe("Teste de CRUD de produtos", () => {
  beforeAll(async () => {
    if (!AppDataSource.isInitialized) {
      await AppDataSource.initialize();
    }
  });

  beforeEach(async () => {
    await AppDataSource.query(
      'TRUNCATE TABLE "items" RESTART IDENTITY CASCADE;',
    );
  });

  afterAll(async () => {
    if (AppDataSource.isInitialized) {
      await AppDataSource.destroy();
    }
  });



  describe("POST /products", () => {
    it("Deve cadastrar um produto de supermercado com sucesso", async () => {
      const response = await request(app)
        .post("/products")
        .send({
          name: "Arroz Branco 5kg",
          category: "Mercearia",
          price: 24.9,
          stock: 50,
        })
        .expect(201);

      expect(response.body).toHaveProperty("id");
      expect(response.body.name).toBe("Arroz Branco 5kg");
      expect(response.body.category).toBe("Mercearia");
      expect(Number(response.body.price)).toBe(24.9);
      expect(response.body.stock).toBe(50);
    });
  });



  describe("GET /products", () => {
    it("Deve listar todos os produtos de supermercado cadastrados", async () => {
      const productRepo = AppDataSource.getRepository(Product);

      await productRepo.save([
        {
          name: "Leite Integral 1L",
          category: "Laticínios",
          price: 4.8,
          stock: 30,
        },
        {
          name: "Café em Pó 500g",
          category: "Bebidas",
          price: 16.5,
          stock: 20,
        },
      ]);

      const response = await request(app).get("/products").expect(200);

      expect(response.body).toHaveLength(2);
      expect(response.body[0].name).toBe("Leite Integral 1L");
      expect(response.body[0].category).toBe("Laticínios");
      expect(response.body[1].name).toBe("Café em Pó 500g");
    });
  });



  describe("PATCH /products/:id", () => {
    it("Deve atualizar dados de um produto de supermercado com sucesso", async () => {
      const productRepo = AppDataSource.getRepository(Product);

      const product = await productRepo.save({
        name: "Azeite de Oliva",
        category: "Mercearia",
        price: 35.0,
        stock: 10,
      });

      const response = await request(app)
        .patch(`/products/${product.id}`)
        .send({
          price: 32.9,
          stock: 15,
        })
        .expect(200);

      expect(response.body.price).toBe(32.9);
      expect(response.body.stock).toBe(15);
      expect(response.body.name).toBe("Azeite de Oliva");

      const updatedProduct = await productRepo.findOneBy({ id: product.id });
      expect(Number(updatedProduct?.price)).toBe(32.9);
      expect(updatedProduct?.stock).toBe(15);
    });
  });



  describe("DELETE /products/:id", () => {
    it("Deve deletar um produto de supermercado com sucesso", async () => {
      const productRepo = AppDataSource.getRepository(Product);

      const product = await productRepo.save({
        name: "Detergente Ypê",
        category: "Limpeza",
        price: 2.99,
        stock: 100,
      });

      await request(app).delete(`/products/${product.id}`).expect(204);

      const deletedProduct = await productRepo.findOneBy({ id: product.id });
      expect(deletedProduct).toBeNull();
    });
  });
});
