import { createReducer } from '@reduxjs/toolkit';
import {
  resetCardState,
  fetchCardsByDeck,
  fetchCardById,
  createCard,
  updateCard,
  deleteCard,
} from '../actions/cardActions';
import { CardState } from '../../@types/card';

const initialState: CardState = {
  isLoading: false,
  isCreated: false,
  allCards: [],
  deckCards: [],
  searchedCards: [],
  selectedCard: null,
  success: null,
  error: null,
};

const UNKNOWN_ERROR = 'Unknown error';

// todo: LS/ Todolist pour les actions/reducers de card et deck
// todo : Prévoir une action pour reset is created à false (après redirection dans le composant)
// todo : Prévoir le reset des messages dans le reducer (au bout de x secondes ou lors du pending d'une action)
// todo : Prévoir des constantes de message de succès

const cardReducer = createReducer(initialState, (builder) => {
  builder
    // ----- RESET_CARD_STATE
    .addCase(resetCardState, (state) => {
      state.isLoading = false;
      state.isCreated = false;
      state.allCards = [];
      state.deckCards = [];
      state.searchedCards = [];
      state.selectedCard = null;
      state.success = null;
      state.error = null;
    })
    // ----- FETCH_CARDS_BY_DECK
    .addCase(fetchCardsByDeck.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    })
    .addCase(fetchCardsByDeck.fulfilled, (state, action) => {
      state.isLoading = false;
      state.deckCards = action.payload;
      state.success = 'Cards récupérées avec succès.';
    })
    .addCase(fetchCardsByDeck.rejected, (state, action) => {
      state.isLoading = false;
      if (typeof action.payload === 'string') {
        state.error = action.payload;
      } else {
        state.error = UNKNOWN_ERROR;
      }
    })
    // ----- FETCH_CARD_BY_ID
    .addCase(fetchCardById.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    })
    .addCase(fetchCardById.fulfilled, (state, action) => {
      state.isLoading = false;
      state.selectedCard = action.payload;
      state.success = 'Card récupérée avec succès.';
    })
    .addCase(fetchCardById.rejected, (state, action) => {
      state.isLoading = false;
      if (typeof action.payload === 'string') {
        state.error = action.payload;
      } else {
        state.error = UNKNOWN_ERROR;
      }
    })
    // ----- CREATE_CARD
    .addCase(createCard.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    })
    .addCase(createCard.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isCreated = true;
      state.deckCards.push(action.payload);
      state.selectedCard = action.payload;
      state.success = 'Card créée avec succès.';
    })
    .addCase(createCard.rejected, (state, action) => {
      state.isLoading = false;
      state.isCreated = false;
      if (typeof action.payload === 'string') {
        state.error = action.payload;
      } else {
        state.error = UNKNOWN_ERROR;
      }
    })
    // ----- UPDATE_CARD
    .addCase(updateCard.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    })
    .addCase(updateCard.fulfilled, (state, action) => {
      state.isLoading = false;
      state.deckCards = state.deckCards.map((card) =>
        card.id === action.payload.id ? action.payload : card
      );
      state.selectedCard = action.payload;
      state.success = 'Card mise à jour avec succès.';
    })
    .addCase(updateCard.rejected, (state, action) => {
      state.isLoading = false;
      if (typeof action.payload === 'string') {
        state.error = action.payload;
      } else {
        state.error = UNKNOWN_ERROR;
      }
    })
    // ----- DELETE_CARD
    .addCase(deleteCard.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    })
    .addCase(deleteCard.fulfilled, (state, action) => {
      state.isLoading = false;
      state.deckCards = state.deckCards.filter(
        (card) => card.id !== action.payload
      );
      state.success = 'Card supprimée avec succès.';
    })
    .addCase(deleteCard.rejected, (state, action) => {
      state.isLoading = false;
      if (typeof action.payload === 'string') {
        state.error = action.payload;
      } else {
        state.error = UNKNOWN_ERROR;
      }
    });
});

export default cardReducer;
