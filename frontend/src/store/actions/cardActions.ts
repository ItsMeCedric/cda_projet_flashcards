import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import { CardMock, NewCardCredentials } from '../../@types/card';

// Action pour reset le state
export const resetCardState = createAction('card/RESET_CARD_STATE');

// Action pour récupérer toutes les cards d'un deck (asynchrone)
export const fetchCardsByDeck = createAsyncThunk<CardMock[], number>(
  'card/FETCH_CARDS_BY_DECK',
  async (deckId: number, { rejectWithValue }) => {
    try {
      return await getCardsByDeckService(deckId);
    } catch (error) {
      // todo : LS/ gestion des erreurs (est ce une errur axios ? si oui, si non...)
      console.error(error);
      return rejectWithValue('Erreur lors de la récupération des cards');
    }
  }
);
// Action pour récupérer une card (asynchrone)
export const fetchCardById = createAsyncThunk<CardMock, number>(
  'card/FETCH_CARD_BY_ID',
  async (cardId: number, { rejectWithValue }) => {
    try {
      return await getCardByIdService(cardId);
    } catch (error) {
      // todo : LS/ gestion des erreurs (est ce une errur axios ? si oui, si non...)
      console.error(error);
      return rejectWithValue('Erreur lors de la récupération de la card');
    }
  }
);
// Action pour créer une card (asynchrone)
export const createCard = createAsyncThunk<CardMock, NewCardCredentials>(
  'card/CREATE_CARD',
  async (newCard: NewCardCredentials, { rejectWithValue }) => {
    try {
      return await createCardService(newCard);
    } catch (error) {
      // todo : LS/ gestion des erreurs (est ce une errur axios ? si oui, si non...)
      console.error(error);
      return rejectWithValue('Erreur lors de la création de la card');
    }
  }
);
// Action pour mettre à jour une card (asynchrone)
export const updateCard = createAsyncThunk<
  CardMock,
  { cardId: number; data: Partial<NewCardCredentials> }
>('card/UPDATE_CARD', async ({ cardId, data }, { rejectWithValue }) => {
  try {
    return await updateCardService(cardId, data);
  } catch (error) {
    // todo : LS/ gestion des erreurs (est ce une errur axios ? si oui, si non...)
    console.error(error);
    return rejectWithValue('Erreur lors de la mise à jour de la card');
  }
});
// Action pour supprimer une card (asynchrone)
export const deleteCard = createAsyncThunk(
  // todo: typage
  'card/DELETE_CARD',
  async (cardId: number, { rejectWithValue }) => {
    try {
      return await deleteCardService(cardId);
    } catch (error) {
      // todo : LS/ gestion des erreurs (est ce une errur axios ? si oui, si non...)
      console.error(error);
      return rejectWithValue('Erreur lors de la suppression de la card');
    }
  }
);
