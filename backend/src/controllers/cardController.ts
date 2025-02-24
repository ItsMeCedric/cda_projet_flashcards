import { Request, Response } from "express";
import cardService from "../services/cardService";

const getAllCards = async (req: Request, res: Response) => {
  const cards = await cardService.getAllCards();
  res.status(200).json(cards);
};

const findById = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const card = await cardService.findById(id);
  res.status(200).json(card);
};

const create = async (req: Request, res: Response) => {
  const data = req.body;
  const card = await cardService.create(data);
  res.status(201).json(card);
};

const update = async (req: Request, res: Response) => {
  const data = req.body;
  const card = await cardService.update(data);
  res.status(200).json(card);
};

const destroy = async (req: Request, res: Response) => {
  const id = parseInt(req.body.id);
  await cardService.destroy(id);
  res.status(200).json({ id: id });
};

export default { getAllCards, findById, create, update, destroy };
