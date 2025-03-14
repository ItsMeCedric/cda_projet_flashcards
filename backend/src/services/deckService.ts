import { InferAttributes, InferCreationAttributes } from "sequelize";
import deckRepository from "../repositories/deckRepository";
import Deck from "../../models/deck";
import storeService from "./storeService";

const getAllDecks = () => {
  return deckRepository.findAll();
};

const getAllDecksByUserId = (userId: number) => {
  return deckRepository.findByUserId(userId);
};

const findById = (id: number) => {
  return deckRepository.findById(id);
};

const findPublic = () => {
  return deckRepository.findPublic();
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

const publish = async (id: number) => {
  let deck = await findById(id);
  if (deck === null) throw "Deck not found";
  if (deck.storeId) {
    await storeService.destroy(deck.storeId);
    deck.storeId = null;
  } else {
    const store = await storeService.create({ deckId: id });
    deck.storeId = store.id;
  }
  deck = await deck.save();
  return deck;
};

export default { getAllDecks, getAllDecksByUserId, findById, findPublic, create, update, destroy, publish };
