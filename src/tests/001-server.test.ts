import request from "supertest";
import app from "../app";
import { AppDataSource } from "../data-source";

describe("Teste de Servidor", () => {
  it("Deve responder que o servidor está online", async () => {
    const response = await request(app).get("/health");
    expect(response.status).toBe(200);
  });
});

describe("Teste de Conexão com o TypeORM", () => {
  
  afterAll(async () => {
    if (AppDataSource.isInitialized) {
      await AppDataSource.destroy();
    }
  });

  it("Deve inicializar a conexão com o banco de dados via TypeORM", async () => {
    if (!AppDataSource.isInitialized) {
      await AppDataSource.initialize();
    }
    
    expect(AppDataSource.isInitialized).toBe(true);
  });
});