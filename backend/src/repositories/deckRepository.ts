import Deck from "../../models/deck";

const findByUserId = async (userId: string) => {
  return await Deck.findAll({ where: { userId } });
};

export default { findByUserId };
