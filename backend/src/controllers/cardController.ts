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

interface RequestWithUser extends Request {
  user: JWTToken;
}

interface JWTToken {
  id: number;
  role: string;
}

const create = async (req: Request, res: Response) => {
  const data = req.body;
  const id = parseInt(req.params.deckId);
  const userId = parseInt(req.params.userId);
  if (userId === (req as RequestWithUser).user.id || (req as RequestWithUser).user.role === "admin") {
    const card = await cardService.create({ ...data, deckId: id });
    res.status(201).json(card);
  } else {
    res.sendStatus(401);
  }
};

const update = async (req: Request, res: Response) => {
  const data = req.body;
  const id = parseInt(req.params.cardId);
  const userId = parseInt(req.params.userId);
  if (userId === (req as RequestWithUser).user.id || (req as RequestWithUser).user.role === "admin") {
    const card = await cardService.update({ ...data, id });
    res.status(200).json(card);
  } else {
    res.sendStatus(401);
  }
};

const destroy = async (req: Request, res: Response) => {
  const id = parseInt(req.params.cardId);
  const userId = parseInt(req.params.userId);
  if (userId === (req as RequestWithUser).user.id || (req as RequestWithUser).user.role === "admin") {
    await cardService.destroy(id);
    res.status(200).json({ id });
  } else {
    res.sendStatus(401);
  }
};

export default { getAllCards, getAllCardsByDeckId, findById, create, update, destroy };
