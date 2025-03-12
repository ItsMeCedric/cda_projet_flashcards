import { Request, Response } from "express";
import cardService from "../services/cardService";

const getAllCards = async (req: Request, res: Response) => {
  const cards = await cardService.getAllCards();
  res.status(200).json(cards);
};

const getAllCardsByDeckId = async (req: Request, res: Response) => {
  const deckId = parseInt(req.params.deckId);
  const cards = await cardService.getAllByDeckId(deckId);
  res.status(200).json(cards);
};

const findById = async (req: Request, res: Response) => {
  const id = parseInt(req.params.cardId);
  const card = await cardService.findById(id);
  res.status(200).json(card);
};

const create = async (req: Request, res: Response) => {
  const data = req.body;
  const card = await cardService.create({ ...data, deckId: parseInt(req.params.deckId) });
  res.status(201).json(card);
};

const update = async (req: Request, res: Response) => {
  const data = req.body;
  const id = parseInt(req.params.cardId);
  const card = await cardService.update({ ...data, id });
  res.status(200).json(card);
};

const destroy = async (req: Request, res: Response) => {
  const id = parseInt(req.params.cardId);
  await cardService.destroy(id);
  res.status(200).json({ id });
};

export default { getAllCards, getAllCardsByDeckId, findById, create, update, destroy };
