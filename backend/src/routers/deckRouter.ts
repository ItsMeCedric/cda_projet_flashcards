import { Router } from "express";
import deckController from "../controllers/deckController";
import verifyAuth from "../middlewares/authMiddleware";

const router = Router({ mergeParams: true });

/**
 * @swagger
 * tags:
 *   - name: Decks
 *     description: API pour la gestion des decks
 */

/**
 * @swagger
 * /users/{userId}/decks:
 *   get:
 *     tags:
 *       - Decks
 *     summary: Retourne tous les deckx d'un utilisateur
 *     description: Cette route permet de récupérer tous les deckx associés à un utilisateur donné par son ID.
 *     parameters:
 *       - in: query
 *         name: userId
 *         required: true
 *         description: ID de l'utilisateur pour lequel récupérer les deckx.
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Liste des deckx retournée avec succès
 *       401:
 *         description: Token non valide ou manquant
 * security:
 *   - BearerAuth: []  # Spécifie que cette route nécessite un token JWT
 */
router.get("/", verifyAuth, deckController.getAllDecksByUserId);

/**
 * @swagger
 * /users/{userId}/decks/{deckId}:
 *   get:
 *     tags:
 *       - Decks
 *     summary: Retourne un deck par son ID
 *     description: Cette route permet de récupérer un deck spécifique en fonction de son ID.
 *     parameters:
 *       - in: path
 *         name: deckId
 *         required: true
 *         description: ID du deck à récupérer.
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: deck retourné avec succès
 *       401:
 *         description: Token non valide ou manquant
 * security:
 *   - BearerAuth: []  # Spécifie que cette route nécessite un token JWT
 */
router.get("/:deckId", verifyAuth, deckController.findById);

/**
 * @swagger
 * /users/{userId}/decks/{deckId}/publish:
 *   get:
 *     tags:
 *       - Decks
 *     summary: Publie un deck
 *     description: Cette route permet de publier un deck, le rendant accessible publiquement.
 *     parameters:
 *       - in: path
 *         name: deckId
 *         required: true
 *         description: ID du deck à publier.
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: deck publié avec succès
 *       401:
 *         description: Token non valide ou manquant
 * security:
 *   - BearerAuth: []  # Spécifie que cette route nécessite un token JWT
 */
router.get("/:deckId/publish", verifyAuth, deckController.publish);

/**
 * @swagger
 * /users/{userId}/decks:
 *   post:
 *     tags:
 *       - Decks
 *     summary: Crée un nouveau deck
 *     description: Cette route permet de créer un deck pour l'utilisateur spécifié.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               description:
 *                 type: string
 *     responses:
 *       201:
 *         description: deck créé avec succès
 *       401:
 *         description: Token non valide ou manquant
 * security:
 *   - BearerAuth: []  # Spécifie que cette route nécessite un token JWT
 */
router.post("/", verifyAuth, deckController.create);

/**
 * @swagger
 * /users/{userId}/decks/{deckId}:
 *   patch:
 *     tags:
 *       - Decks
 *     summary: Met à jour un deck
 *     description: Cette route permet de mettre à jour un deck existant en fonction de son ID.
 *     parameters:
 *       - in: path
 *         name: deckId
 *         required: true
 *         description: ID du deck à mettre à jour.
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               description:
 *                 type: string
 *     responses:
 *       200:
 *         description: deck mis à jour avec succès
 *       401:
 *         description: Token non valide ou manquant
 * security:
 *   - BearerAuth: []  # Spécifie que cette route nécessite un token JWT
 */
router.patch("/:deckId", verifyAuth, deckController.update);

/**
 * @swagger
 * /users/{userId}/decks/{deckId}:
 *   delete:
 *     tags:
 *       - Decks
 *     summary: Supprime un deck
 *     description: Cette route permet de supprimer un deck en fonction de son ID.
 *     parameters:
 *       - in: path
 *         name: deckId
 *         required: true
 *         description: ID du deck à supprimer.
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: deck supprimé avec succès
 *       401:
 *         description: Token non valide ou manquant
 * security:
 *   - BearerAuth: []  # Spécifie que cette route nécessite un token JWT
 */
router.delete("/:deckId", verifyAuth, deckController.destroy);

export default router;
