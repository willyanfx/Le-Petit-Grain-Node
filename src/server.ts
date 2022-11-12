import express from "express";
import * as dotenv from "dotenv";
import { router } from "./routes";
import cors from "cors";
import connect from "./connect";

dotenv.config();

// Connect to our Database and handle any bad connections
const { DATABASE } = process.env;
const db = `mongodb+srv://${DATABASE}`;

const app = express();

app.use(cors());
// Takes the raw requests and turns them into usable properties on req.body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(router);

app.set("port", process.env.PORT || 7777);
app.listen(app.get("port"), async () => {
  console.info(`Express running → PORT ${app.get("port")}`);
  await connect(db);
});
