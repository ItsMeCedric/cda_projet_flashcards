import { Request, Response } from "express";
import deckThemeService from "../services/deckThemeService";

const addThemeToDeck = async (req: Request, res: Response) => {
  const { data, id } = req.body;
  const theme = await deckThemeService.addThemeToDeck(data, id);
  res.status(201).json(theme);
};

const getAllThemeByDeck = async (req: Request, res: Response) => {
  const id = parseInt(req.params.deckId);
  const themes = await deckThemeService.getAllThemeByDeck(id);

  res.status(201).json(themes);
};

export default { addThemeToDeck, getAllThemeByDeck };
