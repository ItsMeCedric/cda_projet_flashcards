import { Router } from "express";
import deckController from "../controllers/deckController";
import verifyAuth from "../middlewares/authMiddleware";

const router = Router({ mergeParams: true });

router.get("/", verifyAuth, deckController.getAllDecks);
router.get("/:deckId", verifyAuth, deckController.findById);
router.get("/:deckId/public", verifyAuth, deckController.findPublic);
router.get("/:deckId/publish", verifyAuth, deckController.publish);
router.post("/", verifyAuth, deckController.create);
router.patch("/:deckId", verifyAuth, deckController.update);
router.delete("/:deckId", verifyAuth, deckController.destroy);

export default router;
