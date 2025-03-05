import { Router } from "express";
import cardController from "../controllers/cardController";
import verifyAuth from "../middlewares/authMiddleware";

const router = Router({ mergeParams: true });

router.get("/", verifyAuth, cardController.getAllCards);
router.get("/:cardId", verifyAuth, cardController.findById);
router.post("/", verifyAuth, cardController.create);
router.patch("/:cardId", verifyAuth, cardController.update);
router.delete("/:cardId", verifyAuth, cardController.destroy);

export default router;
