import { Router } from "express";
import deckController from "../controllers/deckController";

const router = Router({ mergeParams: true });

router.get("/", deckController.getAllDecks);
router.get("/:deckId", deckController.findById);
router.post("/", deckController.create);
router.patch("/:deckId", deckController.update);
router.delete("/:deckId", deckController.destroy);

export default router;
