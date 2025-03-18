import { Router } from "express";
import themeController from "../controllers/themeController";

const router = Router();

router.get("/", themeController.getAllThemes);
router.post("/", themeController.create);
router.delete("/:themeId", themeController.destroy);

export default router;
