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
 */

/**
 * @swagger
 * /users:
 *   get:
 *     tags:
 *       - Users
 *     summary: Retourne tous les utilisateurs
 *     description: Cette route permet de récupérer la liste de tous les utilisateurs dans la base de données.
 *     responses:
 *       200:
 *         description: Liste des utilisateurs retournée avec succès
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: number
 *                     example: 1
 *                   name:
 *                     type: string
 *                     example: "john"
 *                   email:
 *                     type: string
 *                     example: "john@domain.com"
 */
router.get("/", verifyAuth, userController.getAllUsers);

/**
 * @swagger
 * /users/{id}:
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
 */
router.get("/:userId", verifyAuth, userController.findById);

/**
 * @swagger
 * /users:
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
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *     responses:
 *       201:
 *         description: Utilisateur créé avec succès
 */
router.post("/", verifyAuth, userController.create);

/**
 * @swagger
 * /users/{id}:
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
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *     responses:
 *       200:
 *         description: Utilisateur mis à jour avec succès
 */
router.patch("/:userId", verifyAuth, upload.single("profilePicture"), userController.update);

/**
 * @swagger
 * /users/{id}:
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
 */
router.delete("/:userId", verifyAuth, userController.destroy);

export default router;
