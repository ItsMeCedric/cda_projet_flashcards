import { Router } from "express";
import userController from "../controllers/userController";
import verifyAuth from "../middlewares/authMiddleware";
import upload from "../middlewares/multerConfig";

const router = Router({ mergeParams: true });

/**
 * @swagger
 * /users:
 *   get:
 *     summary: Retourne tous les utilisateurs
 *     responses:
 *       200:
 *         description: Succès
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               properties:
 *                 id:
 *                   type: number
 *                   example: 1
 *                 name:
 *                   type: string
 *                   example: "john"
 *                 email:
 *                   type: string
 *                   example: "john@domain.com"
 */
router.get("/", verifyAuth, userController.getAllUsers);

/**
 * @swagger
 * /users/:id:
 *   get:
 *     summary: Retourne un utilisateur défini par son id
 *     responses:
 *       200:
 *         description: Succès
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: number
 *                   example: 1
 *                 name:
 *                   type: string
 *                   example: "john"
 *                 email:
 *                   type: string
 *                   example: "john@domain.com"
 */
router.get("/:userId", verifyAuth, userController.findById);
router.post("/", verifyAuth, userController.create);
router.patch("/:userId", verifyAuth, upload.single("profilePicture"), userController.update);
router.delete("/:userId", verifyAuth, userController.destroy);

export default router;
