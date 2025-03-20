import { createReducer } from "@reduxjs/toolkit";

import { resetAuthState, register, login, validateToken, logout, resetError, updateData } from "../actions/authActions";
import { AuthState } from "../../@types/auth";

const initialState: AuthState = {
  user: undefined,
  isLoading: false,
  success: null,
  error: null,
};

const UNKNOWN_ERROR = "Unknown error";

const authReducer = createReducer(initialState, (builder) => {
  // todo : A compléter
  builder
    .addCase(resetError, (state) => {
      state.error = null;
      state.success = null;
    })
    // ----- RESET_AUTH_STATE
    .addCase(resetAuthState, (state) => {
      state.user = undefined;
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
      state.success = "Inscription réussie, vous pouvez vous connecter.";
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
    .addCase(login.fulfilled, (state, action) => {
      state.isLoading = false;
      state.user = action.payload;
    })
    .addCase(login.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload ? (action.payload as string) : UNKNOWN_ERROR;
    })
    // ----- VALIDATE_USER_TOKEN
    .addCase(validateToken.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    })
    .addCase(validateToken.fulfilled, (state, action) => {
      state.user = action.payload;
      state.isLoading = false;
    })
    .addCase(validateToken.rejected, (state, action) => {
      state.isLoading = false;
      state.user = undefined;
      state.error = action.payload ? (action.payload as string) : UNKNOWN_ERROR;
    })
    // ----- LOGOUT
    .addCase(logout.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    })
    .addCase(logout.fulfilled, (state) => {
      state.isLoading = false;
      state.user = undefined;
      state.success = "Logout successful.";
      // todo : supprimer token / utilisateur
    })
    .addCase(logout.rejected, (state, action) => {
      state.isLoading = false;
      state.user = undefined;
      state.error = action.payload ? (action.payload as string) : UNKNOWN_ERROR;
      // todo : supprimer quand même token / utilisateur ?
    })
    .addCase(updateData.fulfilled, (state, action) => {
      if (state.user === undefined) {
      } else {
        state.user = {
          ...state.user,
          id: state.user.id,
          username: action.payload.username ? action.payload.username : state.user.username,
          email: action.payload.email ? action.payload.email : state.user.email,
          profilePicture: action.payload.profilePicture ? action.payload.profilePicture : state.user.profilePicture,
        };
      }
    });
});

export default authReducer;
