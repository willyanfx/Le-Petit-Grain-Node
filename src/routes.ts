import { Router, Request, Response } from "express";
import { StoreController } from "./controllers/StoreController";

const router = Router();

const storeController = new StoreController();

router.get("/", storeController.handle);
router.get("/add", storeController.add);
router.post("/create", storeController.create);

router.get("/reverse/:name", (req: Request, res: Response) => {
  let reverse = [...req.params.name].reverse().join("");
  res.json({ reverse: reverse });
});

export { router };
