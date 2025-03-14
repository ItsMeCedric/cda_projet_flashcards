import { Request, Response } from "express";
import storeService from "../services/storeService";

const getAllStores = async (req: Request, res: Response) => {
  const stores = await storeService.getAllStores();
  res.status(200).json(stores);
};

const findById = async (req: Request, res: Response) => {
  const id = parseInt(req.params.storeId);
  const store = await storeService.findById(id);
  res.status(200).json(store);
};

const create = async (req: Request, res: Response) => {
  const data = req.body;
  const store = await storeService.create(data);
  res.status(201).json(store);
};

const update = async (req: Request, res: Response) => {
  const data = req.body;
  const id = parseInt(req.params.storeId);
  await storeService.update({ ...data, id });
  const store = await storeService.findById(id);
  res.status(200).json(store);
};

const destroy = async (req: Request, res: Response) => {
  const id = parseInt(req.params.storeId);
  await storeService.destroy(id);
  res.status(200).json({ id: id });
};

export default { getAllStores, findById, create, update, destroy };
