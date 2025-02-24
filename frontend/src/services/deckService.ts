import { DeckMock, NewDeckCredentials } from '../@types/deck';
import axiosInstance from '../utils/axios';

export const getAllDecksService = async () => {
  // todo : LS/ Appel à l'API (verif endpoint) + return des données
  console.log('deckService/getAllDecksService');
  const response = await axiosInstance.get<DeckMock[]>('/decks');
  return response.data;
};

export const getUserDecksService = async (userId: number) => {
  // todo : LS/ Appel à l'API (verif endpoint) + return des données
  console.log('deckService/getUserDecksService');
  const response = await axiosInstance.get<DeckMock[]>(
    `/decks?userId=${userId}`
  );
  return response.data;
};

export const getDecksByCriteriaService = async (criteria: string) => {
  // todo : LS/ Appel à l'API (verif endpoint) + return des données
  console.log('deckService/getDecksByCriteriaService');
  const response = await axiosInstance.get<DeckMock[]>(
    `/decks?name=${criteria}`
  );
  return response.data;
};

export const getDeckByIdService = async (deckId: number) => {
  // todo : LS/ Appel à l'API (verif endpoint) + return des données
  console.log('deckService/getDeckByIdService');
  const response = await axiosInstance.get<DeckMock>(`/decks/${deckId}`);
  return response.data;
};

export const createDeckService = async (
  deck: NewDeckCredentials
): Promise<DeckMock> => {
  // todo : LS/ Appel à l'API (verif endpoint) + return des données
  // const { data } = await axiosInstance.post<DeckMock>('/decks', deck);
  // return data;
  const { name, subject } = deck;
  const newDeck = await axiosInstance.post('/decks', { name, subject });
  return newDeck.data as DeckMock;
};

export const updateDeckService = async (
  deckId: number,
  data: Partial<NewDeckCredentials>
): Promise<DeckMock> => {
  // todo : LS/ Appel à l'API (verif endpoint) + return des données
  console.log('deckService/updateDeckService');
  const { name, subject } = data;
  const updatedDeck = await axiosInstance.put(`/decks/${deckId}`, {
    name,
    subject,
  });
  return updatedDeck.data as DeckMock;
};

export const deleteDeckService = async (deckId: number) => {
  // todo : LS/ Appel à l'API (verif endpoint) + return des données
  console.log('deckService/deleteDeckService');
  await axiosInstance.delete(`/decks/${deckId}`);
};
