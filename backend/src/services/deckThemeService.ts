import { InferCreationAttributes } from "sequelize";
import deckThemeRepository from "../repositories/deckThemeRepository";
import Theme from "../../models/theme";

const addThemeToDeck = (data: InferCreationAttributes<Theme>, id: number) => {
  return deckThemeRepository.addThemeToDeck(data, id);
};

export default { addThemeToDeck };
