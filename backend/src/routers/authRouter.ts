import { Router } from "express";
import authController from "../controllers/authController";

const router = Router();

/**
 * @swagger
 * tags:
 *   - name: Auth
 *     description: API pour la gestion de l'authentification
 */

/**
 * @swagger
 * /auth/register:
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
 *               name:
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
 * /auth/login:
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
 * /auth/loggedIn:
 *   get:
 *     tags:
 *       - Auth
 *     summary: Vérifie si un utilisateur est connecté
 *     description: Cette route permet de vérifier si un utilisateur est actuellement connecté.
 *     responses:
 *       200:
 *         description: Utilisateur connecté retourné
 */
router.get("/loggedIn", authController.loggedIn);

/**
 * @swagger
 * /auth/logout:
 *   get:
 *     tags:
 *       - Auth
 *     summary: Déconnecte un utilisateur
 *     description: Cette route permet de déconnecter un utilisateur en supprimant son token.
 *     responses:
 *       200:
 *         description: Utilisateur déconnecté avec succès
 */
router.get("/logout", authController.logout);

export default router;
