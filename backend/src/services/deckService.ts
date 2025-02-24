import { DeckCreationAttributes } from "../@types/deck";
import deckRepository from "../repositories/deckRepository";

const getAllDecks = () => {
  return deckRepository.findAll();
};

const findById = (id: number) => {
  return deckRepository.findById(id);
};

const create = (data: DeckCreationAttributes) => {
  return deckRepository.create(data);
};

const update = (data: DeckCreationAttributes) => {
  return deckRepository.update(data);
};

const destroy = (id: number) => {
  return deckRepository.destroy(id);
};

export default { getAllDecks, findById, create, update, destroy };
