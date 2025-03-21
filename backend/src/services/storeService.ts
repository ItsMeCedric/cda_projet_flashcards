import { InferAttributes, InferCreationAttributes } from "sequelize";
import storeRepository from "../repositories/storeRepository";
import Store from "../../models/store";

const getAllStores = () => {
  return storeRepository.findAll();
};

const findById = (id: number) => {
  return storeRepository.findById(id);
};

const findByDeckId = (id: number) => {
  return storeRepository.findByDeckId(id);
};

const create = (data: InferCreationAttributes<Store>) => {
  return storeRepository.create(data);
};

const update = (data: InferAttributes<Store>) => {
  return storeRepository.update(data);
};

const destroy = (id: number) => {
  return storeRepository.destroy(id);
};

export default { getAllStores, findById, findByDeckId, create, update, destroy };
