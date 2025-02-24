import express, { json, Request, Response } from "express";
import authRouter from "./routers/authRouter";
import cardRouter from "./routers/cardRouter";
import db from "../models/index";
import deckRouter from "./routers/deckRouter";

const PORT = process.env.PORT || 4000;

//TODO: changer ça, lancer la commande `npx sequelize-cli db:migrate` à la place
db.sync();

const app = express();
app.use(json());

<<<<<<< HEAD
deckRouter.use("/:postId/cards", cardRouter);
=======
userRouter.use("/:userId/decks", deckRouter);
>>>>>>> f8ab5e4 (added basic CRUD for deck)
app.use("/auth", authRouter);

app.get("/", (req: Request, res: Response) => {
  res.status(200).json({ status: "success", message: "backend is working!" });
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
