import { Request, Response } from "express";
import deckThemeService from "../services/deckThemeService";

const addThemeToDeck = async (req: Request, res: Response) => {
  const { data, id } = req.body;
  const theme = await deckThemeService.addThemeToDeck(data, id);
  res.status(201).json(theme);
};

export default { addThemeToDeck };
