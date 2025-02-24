import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import { DeckMock, NewDeckCredentials } from '../../@types/deck';

// Action pour reset le state
export const resetDeckState = createAction('deck/RESET_DECK_STATE');

// Action pour récupérer tous les decks (asynchrone)
export const fetchAllDecks = createAsyncThunk<DeckMock[], void>( // todo : changer le type de retour + typer rejectWithValue
  'deck/FETCH_ALL_DECKS',
  async (_, { rejectWithValue }) => {
    try {
      return await getAllDecksService();
    } catch (error) {
      // todo : LS/ gestion des erreurs (est ce une errur axios ? si oui, si non...)
      console.error(error);
      return rejectWithValue('Erreur lors de la récupération des decks');
    }
  }
);

// Action pour récupérer des decks de l'utilisateur (asynchrone)
export const fetchUserDecks = createAsyncThunk<DeckMock[], number>( // todo : changer le type de retour + typer rejectWithValue
  'deck/FETCH_USER_DECKS',
  async (userId: number, { rejectWithValue }) => {
    try {
      return await getUserDecksService(userId);
    } catch (error) {
      // todo : LS/ gestion des erreurs (est ce une errur axios ? si oui, si non...)
      console.error(error);
      return rejectWithValue('Erreur lors de la récupération des decks');
    }
  }
);

// Action pour récupérer des decks par critère (asynchrone)
export const fetchDecksByCriteria = createAsyncThunk<DeckMock[], string>( // todo : changer le type de retour + typer rejectWithValue
  'deck/FETCH_DECKS_BY_CRITERIA',
  async (criteria: string, { rejectWithValue }) => {
    // todo : changer le type de criteria
    try {
      return await getDecksByCriteriaService(criteria);
    } catch (error) {
      // todo : LS/ gestion des erreurs (est ce une errur axios ? si oui, si non...)
      console.error(error);
      return rejectWithValue('Erreur lors de la récupération des decks');
    }
  }
);

// Action pour récupérer un deck (asynchrone)
export const fetchDeckById = createAsyncThunk<DeckMock, number>( // todo : changer le type de retour + typer rejectWithValue
  'deck/FETCH_DECK_BY_ID',
  async (deckId: number, { rejectWithValue }) => {
    try {
      return await getDeckByIdService(deckId);
    } catch (error) {
      // todo : LS/ gestion des erreurs (est ce une errur axios ? si oui, si non...)
      console.error(error);
      return rejectWithValue('Erreur lors de la récupération du deck');
    }
  }
);

// Action pour créer un nouveau deck (asynchrone)
export const createDeck = createAsyncThunk<DeckMock, NewDeckCredentials>( // todo : changer le type de retour + typer rejectWithValue
  'deck/CREATE_NEW_DECK',
  async (deck: NewDeckCredentials, { rejectWithValue }) => {
    try {
      return await createDeckService(deck);
    } catch (error) {
      // todo : LS/ gestion des erreurs (est ce une errur axios ? si oui, si non...)
      console.error(error);
      return rejectWithValue('Erreur lors de la création du deck');
    }
  }
);

// Action pour modifier un deck (asynchrone)
export const updateDeck = createAsyncThunk<
  DeckMock, // todo : changer le type de retour + typer rejectWithValue
  { id: number; data: Partial<NewDeckCredentials> }
>('deck/UPDATE_DECK', async ({ id, data }, { rejectWithValue }) => {
  try {
    return await updateDeckService(id, data);
  } catch (error) {
    // todo : LS/ gestion des erreurs (est ce une errur axios ? si oui, si non...)
    console.error(error);
    return rejectWithValue('Erreur lors de la modification du deck');
  }
});

// Action pour supprimer un deck (asynchrone)
export const deleteDeck = createAsyncThunk(
  // todo: typage
  'deck/DELETE_DECK',
  async (deckId: number, { rejectWithValue }) => {
    try {
      return await deleteDeckService(deckId);
    } catch (error) {
      // todo : LS/ gestion des erreurs (est ce une errur axios ? si oui, si non...)
      console.error(error);
      return rejectWithValue('Erreur lors de la suppression du deck');
    }
  }
);
