import { InferCreationAttributes } from "sequelize";
import themeRepository from "../repositories/themeRepository";
import Theme from "../../models/theme";

const getAllThemes = () => {
  return themeRepository.findAll();
};

const create = (data: InferCreationAttributes<Theme>) => {
  return themeRepository.create(data);
};

const destroy = (id: number) => {
  return themeRepository.destroy(id);
};

export default { getAllThemes, create, destroy };
