import express, { json, Request, Response } from "express";
import authRouter from "./routers/authRouter";
import db from "../models/index";

const PORT = process.env.PORT || 4000;

db.sequelize.sync();

const app = express();
app.use(json());

app.use("/auth", authRouter);

app.get("/", (req: Request, res: Response) => {
  res.status(200).json({ status: "success", message: "backend is working!" });
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
