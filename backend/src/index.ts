import express, { json, Request, Response } from "express";
import authRouter from "./routers/authRouter";
import db from "../models/index";
import deckRouter from "./routers/deckRouter";

const PORT = process.env.PORT || 4000;

db.sync();

const app = express();
app.use(json());

userRouter.use("/:userId/decks", deckRouter);
app.use("/auth", authRouter);

app.get("/", (req: Request, res: Response) => {
  res.status(200).json({ status: "success", message: "backend is working!" });
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
