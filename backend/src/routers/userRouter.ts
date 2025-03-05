import { Router } from "express";
import userController from "../controllers/userController";
import verifyAuth from "../middlewares/authMiddleware";

const router = Router({ mergeParams: true });

router.get("/", verifyAuth, userController.getAllUsers);
router.get("/:userId", verifyAuth, userController.findById);
router.post("/", verifyAuth, userController.create);
router.patch("/:userId", verifyAuth, userController.update);
router.delete("/:userId", verifyAuth, userController.destroy);

export default router;
