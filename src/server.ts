import express from "express";
import * as dotenv from "dotenv";
import { router } from "./routes";

dotenv.config();

const app = express();

app.use(router);

app.set("port", process.env.PORT || 7777);
app.listen(app.get("port"), () => {
  console.log(`Express running → PORT ${app.get("port")}`);
});
