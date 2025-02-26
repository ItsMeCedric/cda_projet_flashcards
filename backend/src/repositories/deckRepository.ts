import { InferAttributes, InferCreationAttributes } from "sequelize";
import Deck from "../../models/deck";

const findAll = async () => {
  return await Deck.findAll();
};

const findById = async (id: number) => {
  return await Deck.findByPk(id);
};

const findByUserId = async (id: number) => {
  return await Deck.findAll({ where: { userId: id } });
};

const create = async (data: InferCreationAttributes<Deck>) => {
  return await Deck.create(data);
};

const update = async (data: InferAttributes<Deck>) => {
  const id = data.id;
  return await Deck.update(data, { where: { id } });
};

const destroy = async (id: number) => {
  return await Deck.destroy({ where: { id } });
};

export default { findAll, findById, findByUserId, create, update, destroy };
