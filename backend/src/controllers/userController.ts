import { Request, Response } from "express";
import userService from "../services/userService";

const getAllUsers = async (req: Request, res: Response) => {
  const users = await userService.getAllUsers();
  res.status(200).json(users);
};

const findById = async (req: Request, res: Response) => {
  const id = parseInt(req.params.userId);
  const user = await userService.findById(id);
  res.status(200).json(user);
};

const create = async (req: Request, res: Response) => {
  const data = req.body;
  if (data.role) {
    res.sendStatus(401);
    return;
  }
  const user = await userService.create(data);
  res.status(201).json(user);
};

const update = async (req: Request, res: Response) => {
  const data = req.body;
  const id = parseInt(req.params.userId);
  if (req.user.id != id) {
    res.sendStatus(401);
    return;
  }
  try {
    await userService.update({ ...data, id }, req.file);
    const user = await userService.findById(id);
    res.status(200).json(user);
  } catch (err) {
    res.sendStatus(409);
  }
};

const destroy = async (req: Request, res: Response) => {
  const id = parseInt(req.params.userId);
  await userService.destroy(id);
  res.status(200).json({ id: id });
};

export default { getAllUsers, findById, create, update, destroy };
