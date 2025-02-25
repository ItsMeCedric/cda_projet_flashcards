import { Request, Response } from "express";
import authService from "../services/authService";

const register = (req: Request, res: Response) => {
  const data = req.body;
  const user = authService.register(data);
  res.status(201).json(user);
};

const login = (req: Request, res: Response) => {
  const data = req.body;
  const response = authService.login(data);
  res.status(200).json(response);
};

const getUserDecks = async (req: Request, res: Response) => {
  const userId = req.user?.id;
  if (!userId) {
    return res.status(401).json({ error: "Unauthorized" });
  }
  const decks = authService.getDecksByUserId(userId);
  res.status(200).json(decks);
};

export default { register, login, getUserDecks };
