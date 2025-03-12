import { InferAttributes, InferCreationAttributes } from "sequelize";
import deckRepository from "../repositories/deckRepository";
import Deck from "../../models/deck";

const getAllDecks = () => {
  return deckRepository.findAll();
};

const getAllDecksByUserId = (userId: number) => {
  return deckRepository.findByUserId(userId);
};

const findById = (id: number) => {
  return deckRepository.findById(id);
};

const create = (data: InferCreationAttributes<Deck>) => {
  return deckRepository.create(data);
};

const update = (data: InferAttributes<Deck>) => {
  return deckRepository.update(data);
};

const destroy = (id: number) => {
  return deckRepository.destroy(id);
};

export default { getAllDecks, getAllDecksByUserId, findById, create, update, destroy };
