import { Request, Response } from "express";
import themeService from "../services/themeService";

const getAllThemes = async (req: Request, res: Response) => {
  const themes = await themeService.getAllThemes();
  res.status(200).json(themes);
};

const create = async (req: Request, res: Response) => {
  const data = req.body;
  const theme = await themeService.create(data);
  res.status(201).json(theme);
};

// a voir
const destroy = async (req: Request, res: Response) => {
  const id = parseInt(req.params.themeId);
  await themeService.destroy(id);
  res.status(200).json({ id: id });
};

export default { getAllThemes, create, destroy };
