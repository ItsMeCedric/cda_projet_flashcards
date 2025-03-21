import express, { json, Request, Response } from "express";
import authRouter from "./routers/authRouter";
import cardRouter from "./routers/cardRouter";
import deckRouter from "./routers/deckRouter";
import userRouter from "./routers/userRouter";
import cors from "cors";
import cookieParser from "cookie-parser";
import deckController from "./controllers/deckController";
import themeRouter from "./routers/themeRouter";
import deckThemeRouter from "./routers/deckThemeRouter";

const app = express();

app.use(cors({ credentials: true, origin: "http://localhost:5173" }));
app.use(cookieParser());
app.use(json());

deckRouter.use("/:deckId/cards", cardRouter);
app.get("/decks/public/", deckController.findPublic);
app.get("/decks/public/:deckId", deckController.findPublicByDeckId);
userRouter.use("/:userId/decks", deckRouter);
app.use("/users", userRouter);
app.use("/auth", authRouter);
app.use("/theme", themeRouter);
app.use("/deck-theme", deckThemeRouter);
app.use(
  "/uploads",
  express.static("./uploads", {
    setHeaders: (res, path, stat) => res.set("Cache-Control", "public, max-age=31536000"),
  })
);

app.get("/", (req: Request, res: Response) => {
  res.status(200).json({ status: "success", message: "backend is working!" });
});

export default app;
