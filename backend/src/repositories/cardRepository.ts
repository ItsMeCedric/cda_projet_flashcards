import Card from "../../models/card";
import { CardCreationAttributes } from "../@types/card";

const findAll = async () => {
  return await Card.findAll();
};

const findById = async (id: number) => {
  return await Card.findByPk(id);
};

const create = async (data: CardCreationAttributes) => {
  return await Card.create(data);
};

const update = async (data: CardCreationAttributes) => {
  const id = data.id;
  return await Card.update(data, { where: { id } });
};

const destroy = async (id: number) => {
  return await Card.destroy({ where: { id } });
};

export default { findAll, findById, create, update, destroy };
