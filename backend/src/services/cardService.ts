import { CardCreationAttributes } from "../@types/card";
import cardRepository from "../repositories/cardRepository";

const getAllCards = () => {
  return cardRepository.findAll();
};

const findById = (id: number) => {
  return cardRepository.findById(id);
};

const create = (data: CardCreationAttributes) => {
  return cardRepository.create(data);
};

const update = (data: CardCreationAttributes) => {
  return cardRepository.update(data);
};

const destroy = (id: number) => {
  return cardRepository.destroy(id);
};

export default { getAllCards, findById, create, update, destroy };
