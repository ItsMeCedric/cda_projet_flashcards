import { InferAttributes, InferCreationAttributes } from "sequelize";
import Card from "../../models/card";

const findAll = async () => {
  return await Card.findAll();
};

const findById = async (id: number) => {
  return await Card.findByPk(id);
};

const findByDeckId = async (id: number) => {
  return await Card.findAll({ where: { deckId: id } });
};

const create = async (data: InferCreationAttributes<Card>) => {
  return await Card.create(data);
};

const update = async (data: InferAttributes<Card>) => {
  const id = data.id;
  return await Card.update(data, { where: { id } });
};

const destroy = async (id: number) => {
  return await Card.destroy({ where: { id } });
};

export default { findAll, findById, findByDeckId, create, update, destroy };
