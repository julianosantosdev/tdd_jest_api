import 'dotenv/config';
import { DataSource } from 'typeorm';
import { Product } from './entities/product.entity';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST ?? 'localhost',
  port: Number(process.env.DB_PORT ?? 5432),
  username: process.env.DB_USER ?? 'postgres',
  password: process.env.DB_PASSWORD ?? '',
  database: process.env.DB_NAME ?? 'tdd_products',
  synchronize: true,
  logging: false,
  entities: [Product],
});