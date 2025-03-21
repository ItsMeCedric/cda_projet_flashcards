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

const findPublicByDeckId = (id: number) => {
  return deckRepository.findPublicByDeckId(id);
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
  let store = await storeService.findByDeckId(id);
  if (store) {
    await storeService.destroy(store.id);
  } else {
    await storeService.create({ id: undefined, deckId: id, createdAt: undefined, updatedAt: undefined });
  }
};

export default {
  getAllDecks,
  getAllDecksByUserId,
  findById,
  findPublic,
  findPublicByDeckId,
  create,
  update,
  destroy,
  publish,
};
