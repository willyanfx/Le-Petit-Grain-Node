import { Request, Response } from "express";
import Store, { IStore } from "../models/Store";

class StoreController {
  async handle(req: Request, res: Response) {
    return res.json({ home: "hello world!" });
  }
  async add(req: Request, res: Response) {
    return res.json({
      title: "Add new Store",
      name: "name",
      description: "Provide a description of the store",
      tag: ["vegan", "family", "gluten-free"],
    });
  }

  async create(req: Request, res: Response): Promise<IStore | any> {
    try {
      const { name, slug, description, tags } = req.body;
      const store = new Store({ name, slug, description, tags });
      store.save().then(() => {
        res.json({
          success: `Successfully Created ${store.name}. Care to leave a review?`,
        });
      });
    } catch (error) {
      return res.json({ error: error });
    }
  }
}

export { StoreController };
