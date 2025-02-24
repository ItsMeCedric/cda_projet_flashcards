import deck from "../../models/deck";
import { DeckCreationAttributes } from "../@types/deck";

const findAll = async () => {
  return await deck.findAll();
};

const findById = async (id: number) => {
  return await deck.findByPk(id);
};

const create = async (data: DeckCreationAttributes) => {
  return await deck.create(data);
};

const update = async (data: DeckCreationAttributes) => {
  const id = data.id;
  return await deck.update(data, { where: { id } });
};

const destroy = async (id: number) => {
  return await deck.destroy({ where: { id } });
};

export default { findAll, findById, create, update, destroy };
