import express, { json, Request, Response } from "express";
import authRouter from "./routers/authRouter";
import cardRouter from "./routers/cardRouter";
import db from "../models/index";
import deckRouter from "./routers/deckRouter";
import userRouter from "./routers/userRouter";
import cors from "cors";
import cookieParser from "cookie-parser";
import deckController from "./controllers/deckController";
import swaggerUi from "swagger-ui-express";
import swaggerJsdoc from "swagger-jsdoc";

require("dotenv").config();

const PORT = process.env.PORT || 4000;

//TODO: changer ça, lancer la commande `npx sequelize-cli db:migrate` à la place
db.sync();

const app = express();

// Configuration de Swagger
const swaggerOptions: swaggerJsdoc.Options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "API FlashMcCards",
      version: "1.0.0",
      description: "Documentation de l'API de FlashMcCards",
    },
    tags: [
      {
        name: "Auth",
        description: "Gestion de l'authentification",
      },
      {
        name: "Users",
        description: "Gestion des utilisateurs",
      },
      {
        name: "Decks",
        description: "Gestion des decks",
      },
      {
        name: "Cards",
        description: "Gestion des cartes",
      },
    ],
    securitySchemes: {
      BearerAuth: {
        type: "http",
        scheme: "bearer",
        bearerFormat: "JWT",
      },
    },
  },
  apis: ["./src/routers/*.ts"], // Chemin vers vos fichiers de routes
};

// Générer la documentation Swagger
const swaggerSpec = swaggerJsdoc(swaggerOptions);

// Servir Swagger UI à l'URL /docs
app.use("/api/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use(cors({ credentials: true, origin: "http://localhost:5173" }));
app.use(cookieParser());
app.use(json());

deckRouter.use("/:deckId/cards", cardRouter);
app.get("/decks/public", deckController.findPublic);
userRouter.use("/:userId/decks", deckRouter);
app.use("/users", userRouter);
app.use("/auth", authRouter);
app.use(
  "/uploads",
  express.static("./uploads", {
    setHeaders: (res, path, stat) => res.set("Cache-Control", "public, max-age=31536000"),
  })
);

app.get("/", (req: Request, res: Response) => {
  res.status(200).json({ status: "success", message: "backend is working!" });
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
