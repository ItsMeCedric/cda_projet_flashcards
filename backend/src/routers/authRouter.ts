import { Router } from "express";
import authController from "../controllers/authController";

const router = Router();

router.post("/register", authController.register);
router.get("/register", (req, res) => {
  res.send("working!");
});

export default router;
