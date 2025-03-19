import { InferCreationAttributes } from "sequelize";
import deckThemeRepository from "../repositories/deckThemeRepository";
import Theme from "../../models/theme";

const addThemeToDeck = (data: InferCreationAttributes<Theme>, id: number) => {
  return deckThemeRepository.addThemeToDeck(data, id);
};

const getAllThemeByDeck = async (id: number) => {
  return deckThemeRepository.getAllThemeByDeck(id);
};

export default { addThemeToDeck, getAllThemeByDeck };
