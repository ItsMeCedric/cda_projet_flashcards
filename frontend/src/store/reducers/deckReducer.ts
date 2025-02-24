import { createReducer } from '@reduxjs/toolkit';

import {
  resetDeckState,
  fetchAllDecks,
  fetchUserDecks,
  fetchDecksByCriteria,
  fetchDeckById,
  createDeck,
  updateDeck,
  deleteDeck,
} from '../actions/deckActions';
import { DeckState } from '../../@types/deck';

const initialState: DeckState = {
  isLoading: false,
  allDecks: [],
  userDecks: [],
  searchedDecks: [],
  selectedDeck: null,
  success: null,
  error: null,
};

const UNKNOWN_ERROR = 'Unknown error';

const deckReducer = createReducer(initialState, (builder) => {
  builder
    // ----- RESET_DECK_STATE
    .addCase(resetDeckState, (state) => {
      state.isLoading = false;
      state.allDecks = [];
      state.userDecks = [];
      state.searchedDecks = [];
      state.selectedDeck = null;
      state.success = null;
      state.error = null;
    })
    // ----- FETCH_ALL_DECKS
    .addCase(fetchAllDecks.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    })
    .addCase(fetchAllDecks.fulfilled, (state, action) => {
      state.isLoading = false;
      state.allDecks = action.payload;
      state.success = 'Decks récupérés avec succès.';
    })
    .addCase(fetchAllDecks.rejected, (state, action) => {
      state.isLoading = false;
      if (typeof action.payload === 'string') {
        state.error = action.payload;
      } else {
        state.error = UNKNOWN_ERROR;
      }
    })
    // ----- FETCH_USER_DECKS
    .addCase(fetchUserDecks.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    })
    .addCase(fetchUserDecks.fulfilled, (state, action) => {
      state.isLoading = false;
      state.userDecks = action.payload;
      state.success = 'Decks récupérés avec succès.';
    })
    .addCase(fetchUserDecks.rejected, (state, action) => {
      state.isLoading = false;
      if (typeof action.payload === 'string') {
        state.error = action.payload;
      } else {
        state.error = UNKNOWN_ERROR;
      }
    })
    // ----- FETCH_DECKS_BY_CRITERIA
    .addCase(fetchDecksByCriteria.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    })
    .addCase(fetchDecksByCriteria.fulfilled, (state, action) => {
      state.isLoading = false;
      state.searchedDecks = action.payload;
      state.success = 'Decks récupérés avec succès.';
    })
    .addCase(fetchDecksByCriteria.rejected, (state, action) => {
      state.isLoading = false;
      if (typeof action.payload === 'string') {
        state.error = action.payload;
      } else {
        state.error = UNKNOWN_ERROR;
      }
    })
    // ----- FETCH_DECK_BY_ID
    .addCase(fetchDeckById.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    })
    .addCase(fetchDeckById.fulfilled, (state, action) => {
      state.isLoading = false;
      state.selectedDeck = action.payload;
      state.success = 'Deck récupéré avec succès.';
    })
    .addCase(fetchDeckById.rejected, (state, action) => {
      state.isLoading = false;
      if (typeof action.payload === 'string') {
        state.error = action.payload;
      } else {
        state.error = UNKNOWN_ERROR;
      }
    })
    // ----- CREATE_DECK
    .addCase(createDeck.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    })
    .addCase(createDeck.fulfilled, (state, action) => {
      state.isLoading = false;
      state.userDecks.push(action.payload);
      state.selectedDeck = action.payload;
      state.success = 'Deck créé avec succès.';
    })
    .addCase(createDeck.rejected, (state, action) => {
      state.isLoading = false;
      if (typeof action.payload === 'string') {
        state.error = action.payload;
      } else {
        state.error = UNKNOWN_ERROR;
      }
    })
    // ----- UPDATE_DECK
    .addCase(updateDeck.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    })
    .addCase(updateDeck.fulfilled, (state, action) => {
      state.isLoading = false;
      state.userDecks = state.userDecks.map((deck) =>
        deck.id === action.payload.id ? action.payload : deck
      );
      state.selectedDeck = action.payload;
      state.success = 'Deck modifié avec succès.';
    })
    .addCase(updateDeck.rejected, (state, action) => {
      state.isLoading = false;
      if (typeof action.payload === 'string') {
        state.error = action.payload;
      } else {
        state.error = UNKNOWN_ERROR;
      }
    })
    // ----- DELETE_DECK
    .addCase(deleteDeck.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    })
    .addCase(deleteDeck.fulfilled, (state, action) => {
      state.isLoading = false;
      state.userDecks = state.userDecks.filter(
        (deck) => deck.id !== action.payload
      );
      state.success = 'Deck supprimé avec succès.';
    })
    .addCase(deleteDeck.rejected, (state, action) => {
      state.isLoading = false;
      if (typeof action.payload === 'string') {
        state.error = action.payload;
      } else {
        state.error = UNKNOWN_ERROR;
      }
    });
});

export default deckReducer;
