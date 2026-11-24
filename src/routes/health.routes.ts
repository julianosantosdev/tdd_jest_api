import { Router, Request, Response } from "express";

const healthRoutes = Router();

healthRoutes.get("", (req: Request, res: Response) => {
  return res.status(200).json({ status: "OK", timestamp: new Date() });
});

export default healthRoutes;