import express, { json, Request, Response } from "express";
import cors, { CorsOptions } from "cors";
import authRouter from "./routers/authRouter";
import cardRouter from "./routers/cardRouter";
import db from "../models/index";
import deckRouter from "./routers/deckRouter";
import userRouter from "./routers/userRouter";

require("dotenv").config();

const PORT = process.env.PORT || 4000;

//TODO: changer ça, lancer la commande `npx sequelize-cli db:migrate` à la place
db.sync();

const app = express();

const whitelist = ["http://localhost:5173"];
const corsOptions: CorsOptions = {
  origin: (origin, callback) => {
    if (!origin || whitelist.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error(`Not allowed by CORS: ${origin}`));
    }
  },
  credentials: true,
};
app.use(cors(corsOptions));
app.use(json());

deckRouter.use("/:postId/cards", cardRouter);
userRouter.use("/:userId/decks", deckRouter);
app.use("/auth", authRouter);

app.get("/", (req: Request, res: Response) => {
  res.status(200).json({ status: "success", message: "backend is working!" });
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
