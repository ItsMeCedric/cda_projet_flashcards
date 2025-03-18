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
 * /decks:
 *   get:
 *     tags:
 *       - Decks
 *     summary: Retourne tous les jeux d'un utilisateur
 *     description: Cette route permet de récupérer tous les jeux associés à un utilisateur donné par son ID.
 *     parameters:
 *       - in: path
 *         name: userId
 *         required: true
 *         description: ID de l'utilisateur pour lequel récupérer les jeux.
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Liste des jeux retournée avec succès
 */
router.get("/", verifyAuth, deckController.getAllDecksByUserId);

/**
 * @swagger
 * /decks/{deckId}:
 *   get:
 *     tags:
 *       - Decks
 *     summary: Retourne un jeu par son ID
 *     description: Cette route permet de récupérer un jeu spécifique en fonction de son ID.
 *     parameters:
 *       - in: path
 *         name: deckId
 *         required: true
 *         description: ID du jeu à récupérer.
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Jeu retourné avec succès
 */
router.get("/:deckId", verifyAuth, deckController.findById);

/**
 * @swagger
 * /decks/{deckId}/publish:
 *   get:
 *     tags:
 *       - Decks
 *     summary: Publie un jeu
 *     description: Cette route permet de publier un jeu, le rendant accessible publiquement.
 *     parameters:
 *       - in: path
 *         name: deckId
 *         required: true
 *         description: ID du jeu à publier.
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Jeu publié avec succès
 */
router.get("/:deckId/publish", verifyAuth, deckController.publish);

/**
 * @swagger
 * /decks:
 *   post:
 *     tags:
 *       - Decks
 *     summary: Crée un nouveau jeu
 *     description: Cette route permet de créer un jeu pour l'utilisateur spécifié.
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
 *         description: Jeu créé avec succès
 */
router.post("/", verifyAuth, deckController.create);

/**
 * @swagger
 * /decks/{deckId}:
 *   patch:
 *     tags:
 *       - Decks
 *     summary: Met à jour un jeu
 *     description: Cette route permet de mettre à jour un jeu existant en fonction de son ID.
 *     parameters:
 *       - in: path
 *         name: deckId
 *         required: true
 *         description: ID du jeu à mettre à jour.
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
 *         description: Jeu mis à jour avec succès
 */
router.patch("/:deckId", verifyAuth, deckController.update);

/**
 * @swagger
 * /decks/{deckId}:
 *   delete:
 *     tags:
 *       - Decks
 *     summary: Supprime un jeu
 *     description: Cette route permet de supprimer un jeu en fonction de son ID.
 *     parameters:
 *       - in: path
 *         name: deckId
 *         required: true
 *         description: ID du jeu à supprimer.
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Jeu supprimé avec succès
 */
router.delete("/:deckId", verifyAuth, deckController.destroy);

export default router;
