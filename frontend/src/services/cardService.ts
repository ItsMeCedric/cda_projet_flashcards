import { CardMock, NewCardCredentials } from '../@types/card';
import axiosInstance from '../utils/axios';

export const getCardsByDeckService = async (
  deckId: number
): Promise<CardMock[]> => {
  const response = await axiosInstance.get<CardMock[]>(
    `/decks/${deckId}/cards`
  );
  return response.data;
};

export const getCardByIdService = async (cardId: number): Promise<CardMock> => {
  const response = await axiosInstance.get<CardMock>(`/cards/${cardId}`);
  return response.data;
};

export const createCardService = async (
  card: NewCardCredentials
): Promise<CardMock> => {
  const { question, questionImg, answer, answerImg } = card;
  const newCard = await axiosInstance.post<CardMock>('/cards', {
    question,
    questionImg,
    answer,
    answerImg,
  });
  return newCard.data;
};

// todo: LS/ Est ce que c'est Partial<NewCardCredentials> ou une card complète ?
// todo: Ca depend des endpoints de l'API (put vs patch)
// todo: idem avec les decks
export const updateCardService = async (
  cardId: number,
  data: Partial<NewCardCredentials>
): Promise<CardMock> => {
  const { question, questionImg, answer, answerImg } = data; //
  const updatedCard = await axiosInstance.put<CardMock>(`/cards/${cardId}`, {
    question,
    questionImg,
    answer,
    answerImg,
  });
  return updatedCard.data;
};

export const deleteCardService = async (cardId: number) => {
  await axiosInstance.delete(`/cards/${cardId}`);
  return cardId;
};
