import { Router } from "express";
import cardController from "../controllers/cardController";
import verifyAuth from "../middlewares/authMiddleware";

const router = Router({ mergeParams: true });

/**
 * @swagger
 * tags:
 *   - name: Cards
 *     description: API pour la gestion des cartes
 * security:
 *   - BearerAuth: []  # Spécifie que cette route nécessite un token JWT
 */

/**
 * @swagger
 * /users/{userId}/decks/{deckId}/cards:
 *   get:
 *     tags:
 *       - Cards
 *     summary: Retourne toutes les cartes d'un jeu
 *     description: Cette route permet de récupérer toutes les cartes d'un jeu spécifique par son ID.
 *     parameters:
 *       - in: path
 *         name: deckId
 *         required: true
 *         description: ID du jeu dont les cartes doivent être récupérées.
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Liste des cartes retournée avec succès
 *       401:
 *         description: Token non valide ou manquant
 * security:
 *   - BearerAuth: []  # Spécifie que cette route nécessite un token JWT
 */
router.get("/", verifyAuth, cardController.getAllCardsByDeckId);

/**
 * @swagger
 * /users/{userId}/decks/{deckId}/cards/{cardId}:
 *   get:
 *     tags:
 *       - Cards
 *     summary: Retourne une carte par son ID
 *     description: Cette route permet de récupérer une carte spécifique en fonction de son ID.
 *     parameters:
 *       - in: path
 *         name: cardId
 *         required: true
 *         description: ID de la carte à récupérer.
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Carte retournée avec succès
 *       401:
 *         description: Token non valide ou manquant
 * security:
 *   - BearerAuth: []  # Spécifie que cette route nécessite un token JWT
 */
router.get("/:cardId", verifyAuth, cardController.findById);

/**
 * @swagger
 * /users/{userId}/decks/{deckId}/cards:
 *   post:
 *     tags:
 *       - Cards
 *     summary: Crée une nouvelle carte
 *     description: Cette route permet de créer une carte dans un jeu existant.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               front:
 *                 type: string
 *               back:
 *                 type: string
 *     responses:
 *       201:
 *         description: Carte créée avec succès
 *       401:
 *         description: Token non valide ou manquant
 * security:
 *   - BearerAuth: []  # Spécifie que cette route nécessite un token JWT
 */
router.post("/", verifyAuth, cardController.create);

/**
 * @swagger
 * /users/{userId}/decks/{deckId}/cards/{cardId}:
 *   patch:
 *     tags:
 *       - Cards
 *     summary: Met à jour une carte
 *     description: Cette route permet de mettre à jour une carte en fonction de son ID.
 *     parameters:
 *       - in: path
 *         name: cardId
 *         required: true
 *         description: ID de la carte à mettre à jour.
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               front:
 *                 type: string
 *               back:
 *                 type: string
 *     responses:
 *       200:
 *         description: Carte mise à jour avec succès
 *       401:
 *         description: Token non valide ou manquant
 * security:
 *   - BearerAuth: []  # Spécifie que cette route nécessite un token JWT
 */
router.patch("/:cardId", verifyAuth, cardController.update);

/**
 * @swagger
 * /users/{userId}/decks/{deckId}/cards/{cardId}:
 *   delete:
 *     tags:
 *       - Cards
 *     summary: Supprime une carte
 *     description: Cette route permet de supprimer une carte en fonction de son ID.
 *     parameters:
 *       - in: path
 *         name: cardId
 *         required: true
 *         description: ID de la carte à supprimer.
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Carte supprimée avec succès
 *       401:
 *         description: Token non valide ou manquant
 * security:
 *   - BearerAuth: []  # Spécifie que cette route nécessite un token JWT
 */
router.delete("/:cardId", verifyAuth, cardController.destroy);

export default router;
