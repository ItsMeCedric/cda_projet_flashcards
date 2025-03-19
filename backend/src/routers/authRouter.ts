import { Router } from "express";
import authController from "../controllers/authController";
import verifyAuth from "../middlewares/authMiddleware";

const router = Router();

/**
 * @swagger
 * tags:
 *   - name: Auth
 *     description: API pour la gestion de l'authentification
 */

/**
 * @swagger
 * /api/auth/register:
 *   post:
 *     tags:
 *       - Auth
 *     summary: Enregistre un nouvel utilisateur
 *     description: Cette route permet d'enregistrer un nouvel utilisateur.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       201:
 *         description: Utilisateur créé avec succès
 */
router.post("/register", authController.register);

/**
 * @swagger
 * /api/auth/login:
 *   post:
 *     tags:
 *       - Auth
 *     summary: Connecte un utilisateur
 *     description: Cette route permet de connecter un utilisateur et de générer un token d'authentification.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Connexion réussie, token retourné
 */
router.post("/login", authController.login);

/**
 * @swagger
 * /api/auth/loggedIn:
 *   get:
 *     tags:
 *       - Auth
 *     summary: Vérifie si un utilisateur est connecté
 *     description: Cette route permet de vérifier si un utilisateur est actuellement connecté.
 *     responses:
 *       200:
 *         description: Utilisateur connecté retourné
 *       401:
 *         description: Token manquant ou invalide
 * security:
 *   - BearerAuth: []  # Spécifie que cette route nécessite un token JWT
 */
router.get("/loggedIn", verifyAuth, authController.loggedIn);

/**
 * @swagger
 * /api/auth/logout:
 *   get:
 *     tags:
 *       - Auth
 *     summary: Déconnecte un utilisateur
 *     description: Cette route permet de déconnecter un utilisateur en supprimant son token.
 *     responses:
 *       200:
 *         description: Utilisateur déconnecté avec succès
 *       401:
 *         description: Token manquant ou invalide
 * security:
 *   - BearerAuth: []  # Spécifie que cette route nécessite un token JWT
 */
router.get("/logout", verifyAuth, authController.logout);

export default router;
