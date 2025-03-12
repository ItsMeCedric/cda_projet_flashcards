import { InferAttributes, InferCreationAttributes } from "sequelize";
import cardRepository from "../repositories/cardRepository";
import Card from "../../models/card";

const getAllCards = () => {
  return cardRepository.findAll();
};

const getAllByDeckId = (deckId: number) => {
  return cardRepository.findByDeckId(deckId);
};

const findById = (id: number) => {
  return cardRepository.findById(id);
};

const create = (data: InferCreationAttributes<Card>) => {
  return cardRepository.create(data);
};

const update = (data: InferAttributes<Card>) => {
  return cardRepository.update(data);
};

const destroy = (id: number) => {
  return cardRepository.destroy(id);
};

export default { getAllCards, getAllByDeckId, findById, create, update, destroy };
