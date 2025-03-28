import { Request, Response } from "express";
import deckService from "../services/deckService";

interface RequestWithUser extends Request {
  user: JWTToken;
}

interface JWTToken {
  id: number;
  role: string;
}

const getAllDecks = async (req: Request, res: Response) => {
  const decks = await deckService.getAllDecks();
  res.status(200).json(decks);
};

const getAllDecksByUserId = async (req: Request, res: Response) => {
  const userId = parseInt(req.params.userId);
  const decks = await deckService.getAllDecksByUserId(userId);
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

const findPublicByDeckId = async (req: Request, res: Response) => {
  const id = parseInt(req.params.deckId);
  const deck = await deckService.findPublicByDeckId(id);
  res.status(200).json(deck);
};

const create = async (req: Request, res: Response) => {
  const data = req.body;
  const id = parseInt(req.params.userId);
  const userId = parseInt(req.params.userId);
  if (userId === (req as RequestWithUser).user.id || (req as RequestWithUser).user.role === "admin") {
    const deck = await deckService.create({ ...data, userId: id });
    res.status(201).json(deck);
  } else {
    res.sendStatus(401);
  }
};

const update = async (req: Request, res: Response) => {
  const data = req.body;
  const id = parseInt(req.params.deckId);
  const userId = parseInt(req.params.userId);
  const keys = Object.keys(data);
  if (
    userId === (req as RequestWithUser).user.id ||
    (req as RequestWithUser).user.role === "admin" ||
    (keys.length === 1 && keys[0] === "playCount")
  ) {
    const deck = await deckService.update({ ...data, id });
    res.status(200).json(deck);
  } else {
    res.sendStatus(401);
  }
};

const destroy = async (req: Request, res: Response) => {
  const id = parseInt(req.params.deckId);
  const userId = parseInt(req.params.userId);
  if (userId === (req as RequestWithUser).user.id || (req as RequestWithUser).user.role === "admin") {
    await deckService.destroy(id);
    res.status(200).json({ id });
  } else {
    res.sendStatus(401);
  }
};

const publish = async (req: Request, res: Response) => {
  const id = parseInt(req.params.deckId);
  const userId = parseInt(req.params.userId);
  if (userId === (req as RequestWithUser).user.id || (req as RequestWithUser).user.role === "admin") {
    try {
      const deck = await deckService.publish(id);
      res.status(200).json(deck);
    } catch (err) {
      res.status(500).json({ message: err });
    }
  } else {
    res.sendStatus(401);
  }
};

export default {
  getAllDecks,
  getAllDecksByUserId,
  findById,
  findPublic,
  findPublicByDeckId,
  create,
  update,
  destroy,
  publish,
};
