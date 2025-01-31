import { createReducer } from '@reduxjs/toolkit';

import {
  resetAuthState,
  register,
  login,
  validateToken,
  logout,
} from '../actions/authActions';
import { AuthState } from '../../@types/auth';

const initialState: AuthState = {
  isLogged: false,
  user: null,
  isLoading: false,
  success: null,
  error: null,
};

const UNKNOWN_ERROR = 'Unknown error';

const authReducer = createReducer(initialState, (builder) => {
  // todo : A compléter
  builder
    // ----- RESET_AUTH_STATE
    .addCase(resetAuthState, (state) => {
      state.isLogged = false;
      state.user = null;
      state.isLoading = false;
      state.success = null;
      state.error = null;
    })
    // ----- REGISTER
    .addCase(register.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    })
    .addCase(register.fulfilled, (state) => {
      state.isLoading = false;
      state.success = 'Inscription réussie, vous pouvez vous connecter.';
    })
    .addCase(register.rejected, (state, action) => {
      state.isLoading = false;
      if (typeof action.payload === 'string') {
        // todo : LS/ à modifier si le backend renvoie des erreurs structurées
        state.error = action.payload;
      } else {
        state.error = UNKNOWN_ERROR;
      }
    })
    // ----- LOGIN
    .addCase(login.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    })
    .addCase(login.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isLogged = true;
      state.user = action.payload;
    })
    .addCase(login.rejected, (state, action) => {
      state.isLoading = false;
      if (typeof action.payload === 'string') {
        // todo : LS/ à modifier si le backend renvoie des erreurs structurées
        state.error = action.payload;
      } else {
        state.error = UNKNOWN_ERROR;
      }
    })
    // ----- VALIDATE_USER_TOKEN
    .addCase(validateToken.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    })
    .addCase(validateToken.fulfilled, (state) => {
      state.isLoading = false;
      state.isLogged = true;
    })
    .addCase(validateToken.rejected, (state, action) => {
      state.isLoading = false;
      state.isLogged = false;
      state.user = null;
      if (typeof action.payload === 'string') {
        // todo : LS/ à modifier si le backend renvoie des erreurs structurées
        state.error = action.payload;
      } else {
        state.error = UNKNOWN_ERROR;
      }
    })
    // ----- LOGOUT
    .addCase(logout.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    })
    .addCase(logout.fulfilled, (state) => {
      state.isLoading = false;
      state.isLogged = false;
      state.user = null;
      state.success = 'Logout successful.';
      // todo : LS/ supprimer token / utilisateur
    })
    .addCase(logout.rejected, (state, action) => {
      state.isLoading = false;
      state.isLogged = false;
      state.user = null;
      if (typeof action.payload === 'string') {
        // todo : LS/ à modifier si le backend renvoie des erreurs structurées
        state.error = action.payload;
      } else {
        state.error = UNKNOWN_ERROR;
      }
      // todo : LS/ supprimer quand même token / utilisateur ?
    });
});

export default authReducer;
