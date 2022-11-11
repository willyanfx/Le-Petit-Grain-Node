import { Request, Response } from "express";

class StoreController {
  async handle(req: Request, res: Response) {
    return res.json({ home: "hello world!" });
  }
}

export { StoreController };
