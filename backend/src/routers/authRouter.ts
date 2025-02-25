import { Router } from "express";
import authController from "../controllers/authController";

const router = Router();

router.post("/register", authController.register);
router.get("/decks", authController.getUserDecks);

export default router;
