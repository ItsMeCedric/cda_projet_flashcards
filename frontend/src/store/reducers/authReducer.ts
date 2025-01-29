import { createReducer } from "@reduxjs/toolkit";

import { resetAuthState, register, login, validateUserToken, logout } from "../actions/authActions";

interface AuthState {
  // todo : Ajouter les propriétés du state
  // isLogged: boolean;
  // user: User | null;
  isLoading: boolean;
  error: string | null;
}

const initialState: AuthState = {
  // todo : Initialiser le state
  // isLogged: false,
  // user: null,
  isLoading: false,
  error: null,
};

const UNKNOWN_ERROR = "Unknown error";

const authReducer = createReducer(initialState, (builder) => {
  // todo : A compléter
  builder
    // ----- RESET_AUTH_STATE
    .addCase(resetAuthState, (state) => {
      state.isLoading = false;
      state.error = null;
    })
    // ----- REGISTER
    .addCase(register.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    })
    .addCase(register.fulfilled, (state) => {
      state.isLoading = false;
    })
    .addCase(register.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload ? (action.payload as string) : UNKNOWN_ERROR;
    })
    // ----- LOGIN
    .addCase(login.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    })
    .addCase(login.fulfilled, (state) => {
      state.isLoading = false;
      // todo : stocker token / utilisateur
    })
    .addCase(login.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload ? (action.payload as string) : UNKNOWN_ERROR;
    })
    // ----- VALIDATE_USER_TOKEN
    .addCase(validateUserToken.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    })
    .addCase(validateUserToken.fulfilled, (state) => {
      state.isLoading = false;
    })
    .addCase(validateUserToken.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload ? (action.payload as string) : UNKNOWN_ERROR;
    })
    // ----- LOGOUT
    .addCase(logout, (state) => {
      state.isLoading = false;
      state.error = null;
    });
});

export default authReducer;
