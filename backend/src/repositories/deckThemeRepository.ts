import { InferCreationAttributes } from "sequelize";
import Theme from "../../models/theme";
import Deck from "../../models/deck";

const addThemeToDeck = async (data: InferCreationAttributes<Theme>, id: number) => {
  const deck = await Deck.findByPk(id);
  return await deck.addTheme(data.id);
};

export default { addThemeToDeck };
