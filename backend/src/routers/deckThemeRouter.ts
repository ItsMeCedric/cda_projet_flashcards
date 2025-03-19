import { Router } from "express";
import deckThemeController from "../controllers/deckThemeController";
import verifyAuth from "../middlewares/authMiddleware";

const router = Router({ mergeParams: true });

router.post("/", verifyAuth, deckThemeController.addThemeToDeck);
router.get("/:deckId", verifyAuth, deckThemeController.getAllThemeByDeck);

export default router;
