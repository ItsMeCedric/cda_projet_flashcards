import { Request, Response } from "express";
import deckService from "../services/deckService";
import storeService from "../services/storeService";
import { InferCreationAttributes } from "sequelize";

const getAllDecks = async (req: Request, res: Response) => {
  const decks = await deckService.getAllDecks();
  res.status(200).json(decks);
};

const findById = async (req: Request, res: Response) => {
  const id = parseInt(req.params.deckId);
  const deck = await deckService.findById(id);
  res.status(200).json(deck);
};

const findPublic = async (req: Request, res: Response) => {
  const decks = await deckService.findPublic();
  res.status(200).json(decks);
};

//TODO: ajouter le middleware de vérification d'authentification
const create = async (req: Request, res: Response) => {
  const data = req.body;
  const deck = await deckService.create({ ...data, userId: parseInt(req.params.userId) });
  res.status(201).json(deck);
};

//TODO: ajouter le middleware de vérification d'authentification
const update = async (req: Request, res: Response) => {
  const data = req.body;
  const id = parseInt(req.params.deckId);
  const deck = await deckService.update({ ...data, id });
  res.status(200).json(deck);
};

//TODO: ajouter le middleware de vérification d'authentification
const destroy = async (req: Request, res: Response) => {
  const id = parseInt(req.params.deckId);
  await deckService.destroy(id);
  res.status(200).json({ id });
};

const publish = async (req: Request, res: Response) => {
  const id = parseInt(req.params.deckId);
  try {
    const deck = await deckService.publish(id);
    res.status(200).json(deck);
  } catch (err) {
    res.status(500).json({ message: err });
  }
};

export default { getAllDecks, findById, findPublic, create, update, destroy, publish };
