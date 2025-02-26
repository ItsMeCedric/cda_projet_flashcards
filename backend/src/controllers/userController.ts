import { Request, Response } from "express";
import userService from "../services/userService";

const getAllusers = async (req: Request, res: Response) => {
  const users = await userService.getAllUsers();
  res.status(200).json(users);
};

const findById = async (req: Request, res: Response) => {
  const id = parseInt(req.params.userId);
  const user = await userService.findById(id);
  res.status(200).json(user);
};

//TODO: ajouter le middleware de vérification d'authentification
const create = async (req: Request, res: Response) => {
  const data = req.body;
  const user = await userService.create(data);
  res.status(201).json(user);
};

//TODO: ajouter le middleware de vérification d'authentification
const update = async (req: Request, res: Response) => {
  const data = req.body;
  const user = await userService.update(data);
  res.status(200).json(user);
};

//TODO: ajouter le middleware de vérification d'authentification
const destroy = async (req: Request, res: Response) => {
  const id = parseInt(req.body.id);
  await userService.destroy(id);
  res.status(200).json({ id: id });
};

export default { getAllusers, findById, create, update, destroy };
