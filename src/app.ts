import express, { Request, Response } from 'express';
import productRoutes from './routes/product.routes';
import healthRoutes from './routes/health.routes';

const app = express();
app.use(express.json());

app.use("/health", healthRoutes)
app.use('/products', productRoutes);

export default app