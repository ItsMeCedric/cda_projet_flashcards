import { InferCreationAttributes } from "sequelize";
import Theme from "../../models/theme";

const findAll = async () => {
  return await Theme.findAll();
};

// Admin créer un theme
const create = async (data: InferCreationAttributes<Theme>) => {
  return await Theme.create(data);
};

const destroy = async (id: number) => {
  return await Theme.destroy({ where: { id } });
};

export default { findAll, create, destroy };
