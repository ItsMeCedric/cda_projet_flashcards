import { InferAttributes, InferCreationAttributes } from "sequelize";
import Store from "../../models/store";

const findAll = async () => {
  return await Store.findAll();
};

const findById = async (id: number) => {
  return await Store.findByPk(id);
};

const findByDeckId = async (id: number) => {
  return await Store.findOne({
    where: {
      deckId: id,
    },
  });
};

const create = async (data: InferCreationAttributes<Store>) => {
  return await Store.create(data);
};

const update = async (data: InferAttributes<Store>) => {
  const id = data.id;
  return await Store.update(data, { where: { id } });
};

const destroy = async (id: number) => {
  return await Store.destroy({ where: { id } });
};

export default { findAll, findById, findByDeckId, create, update, destroy };
