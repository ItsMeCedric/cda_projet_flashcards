import { Request, Response } from "express";
import userService from "../services/userService";
import argon2 from "argon2";

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
  const user = await userService.create(data);
  res.status(201).json(user);
};

const update = async (req: Request, res: Response) => {
  const data = req.body;

  if (data.password) {
    data.hash = await argon2.hash(data.password, {
      type: argon2.argon2id,
      secret: Buffer.from(process.env.ARGON2SECRET as string),
    });
  }

  const id = parseInt(req.params.userId);
  await userService.update({ ...data, id });
  const user = await userService.findById(id);

  res.status(200).json(user);
};

const destroy = async (req: Request, res: Response) => {
  const id = parseInt(req.params.userId);
  await userService.destroy(id);
  res.status(200).json({ id: id });
};

export default { getAllUsers, findById, create, update, destroy };
