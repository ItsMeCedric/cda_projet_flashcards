import { Router } from "express";
import userController from "../controllers/userController";

const router = Router({ mergeParams: true });

router.get("/", userController.getAllusers);
router.get("/:userId", userController.findById);
router.post("/", userController.create);
router.patch("/:userId", userController.update);
router.delete("/:userId", userController.destroy);

export default router;
