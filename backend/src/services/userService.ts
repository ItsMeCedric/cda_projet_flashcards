import { InferAttributes, InferCreationAttributes } from "sequelize";
import userRepository from "../repositories/userRepository";
import user from "../../models/user";

const getAllusers = () => {
  return userRepository.findAll();
};

const findById = (id: number) => {
  return userRepository.findById(id);
};

const create = (data: InferCreationAttributes<user>) => {
  return userRepository.create(data);
};

const update = (data: InferAttributes<user>) => {
  return userRepository.update(data);
};

const destroy = (id: number) => {
  return userRepository.destroy(id);
};

export default { getAllusers, findById, create, update, destroy };
