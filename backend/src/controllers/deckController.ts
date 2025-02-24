import { Request, Response } from "express";
import deckService from "../services/deckService";

const getAllDecks = async (req: Request, res: Response) => {
  const decks = await deckService.getAllDecks();
  res.status(200).json(decks);
};

const findById = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const deck = await deckService.findById(id);
  res.status(200).json(deck);
};

const create = async (req: Request, res: Response) => {
  const data = req.body;
  const deck = await deckService.create(data);
  res.status(201).json(deck);
};

const update = async (req: Request, res: Response) => {
  const data = req.body;
  const deck = await deckService.update(data);
  res.status(200).json(deck);
};

const destroy = async (req: Request, res: Response) => {
  const id = parseInt(req.body.id);
  await deckService.destroy(id);
  res.status(200).json({ id: id });
};

export default { getAllDecks, findById, create, update, destroy };
