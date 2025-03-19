import { Router } from "express";
import userController from "../controllers/userController";
import verifyAuth from "../middlewares/authMiddleware";
import upload from "../middlewares/multerConfig";

const router = Router({ mergeParams: true });

/**
 * @swagger
 * tags:
 *   - name: Users
 *     description: API pour la gestion des utilisateurs
 * security:
 *   - BearerAuth: []  # Spécifie que cette route nécessite un token JWT
 */

/**
 * @swagger
 * /api/users:
 *   get:
 *     tags:
 *       - Users
 *     summary: Retourne tous les utilisateurs
 *     description: Cette route permet de récupérer la liste de tous les utilisateurs dans la base de données.
 *     responses:
 *       200:
 *         description: Liste des utilisateurs retournée avec succès
 *       401:
 *         description: Token non valide ou manquant
 * security:
 *   - BearerAuth: []  # Spécifie que cette route nécessite un token JWT
 */
router.get("/", verifyAuth, userController.getAllUsers);

/**
 * @swagger
 * /api/users/{id}:
 *   get:
 *     tags:
 *       - Users
 *     summary: Retourne un utilisateur défini par son id
 *     description: Cette route permet de récupérer un utilisateur en fonction de son identifiant unique.
 *     parameters:
 *       - in: path
 *         name: userId
 *         required: true
 *         description: ID de l'utilisateur à récupérer.
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Détails de l'utilisateur retournés avec succès
 *       401:
 *         description: Token non valide ou manquant
 * security:
 *   - BearerAuth: []  # Spécifie que cette route nécessite un token JWT
 */
router.get("/:userId", verifyAuth, userController.findById);

/**
 * @swagger
 * /api/users:
 *   post:
 *     tags:
 *       - Users
 *     summary: Crée un nouvel utilisateur
 *     description: Cette route permet de créer un utilisateur avec les informations fournies.
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
 *     responses:
 *       201:
 *         description: Utilisateur créé avec succès
 *       401:
 *         description: Token non valide ou manquant
 * security:
 *   - BearerAuth: []  # Spécifie que cette route nécessite un token JWT
 */
router.post("/", verifyAuth, userController.create);

/**
 * @swagger
 * /api/users/{id}:
 *   patch:
 *     tags:
 *       - Users
 *     summary: Met à jour les informations d'un utilisateur
 *     description: Cette route permet de mettre à jour les informations de l'utilisateur, y compris l'image de profil.
 *     parameters:
 *       - in: path
 *         name: userId
 *         required: true
 *         description: ID de l'utilisateur à mettre à jour.
 *         schema:
 *           type: integer
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
 *       200:
 *         description: Utilisateur mis à jour avec succès
 *       401:
 *         description: Token non valide ou manquant
 * security:
 *   - BearerAuth: []  # Spécifie que cette route nécessite un token JWT
 */
router.patch("/:userId", verifyAuth, upload.single("profilePicture"), userController.update);

/**
 * @swagger
 * /api/users/{id}:
 *   delete:
 *     tags:
 *       - Users
 *     summary: Supprime un utilisateur
 *     description: Cette route permet de supprimer un utilisateur en fonction de son ID.
 *     parameters:
 *       - in: path
 *         name: userId
 *         required: true
 *         description: ID de l'utilisateur à supprimer.
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Utilisateur supprimé avec succès
 *       401:
 *         description: Token non valide ou manquant
 * security:
 *   - BearerAuth: []  # Spécifie que cette route nécessite un token JWT
 */
router.delete("/:userId", verifyAuth, userController.destroy);

export default router;
