import { Router } from "express";
import cardController from "../controllers/cardController";

const router = Router({ mergeParams: true });

router.get("/", cardController.getAllCards);
router.get("/:cardId", cardController.findById);
router.post("/", cardController.create);
router.patch("/:cardId", cardController.update);
router.delete("/:cardId", cardController.delete);

export default router;
