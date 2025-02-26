import { InferAttributes, InferCreationAttributes } from "sequelize";
import User from "../../models/user";

const findAll = async () => {
  return await User.findAll();
};

const findById = async (id: number) => {
  return await User.findByPk(id);
};

const findByEmail = async (email: string) => {
  return await User.findOne({ where: { email } });
};

const findByUsername = async (username: string) => {
  return await User.findOne({ where: { username } });
};

const create = async (data: InferCreationAttributes<User>) => {
  return await User.create(data);
};

const update = async (data: InferAttributes<User>) => {
  const id = data.id;
  return await User.update(data, { where: { id } });
};

const destroy = async (id: number) => {
  return await User.destroy({ where: { id } });
};

export default { findAll, findById, findByEmail, findByUsername, create, update, destroy };
