import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import { registerUser, loginUser, validateUserToken, logoutUser } from "../../services/authService";
import { LoginCredentials, RegisterCredentials } from "../../@types/auth";
import { UserMock } from "../../@types/user";

// Action pour reset le state
export const resetAuthState = createAction("auth/RESET_AUTH_STATE");

// Action pour l'inscription d'un utilisateur (asynchrone)
export const register = createAsyncThunk(
  "auth/REGISTER",
  async (credentials: RegisterCredentials, { rejectWithValue }) => {
    try {
      return await registerUser(credentials);
    } catch (error) {
      // todo : gestion des erreurs (est ce une errur axios ? si oui, si non...)
      return rejectWithValue(error);
    }
  }
);

// Action pour la connexion d'un utilisateur (asynchrone)
export const login = createAsyncThunk<UserMock, LoginCredentials>( // todo : changer le type de retour
  "auth/LOGIN",
  async (credentials, { rejectWithValue }) => {
    try {
      return await loginUser(credentials);
    } catch (error) {
      // todo : gestion des erreurs (est ce une errur axios ? si oui, si non...)
      return rejectWithValue(error);
    }
  }
);

// Action valider le token de l'utilisateur (asynchrone)
export const validateToken = createAsyncThunk("auth/VALIDATE_USER_TOKEN", async (_, { rejectWithValue }) => {
  try {
    return await validateUserToken();
  } catch (error) {
    // todo : gestion des erreurs (est ce une errur axios ? si oui, si non...)
    return rejectWithValue(error);
  }
});

// Action pour la déconnexion de l'utilisateur
export const logout = createAsyncThunk("auth/LOGOUT", async (_, { rejectWithValue }) => {
  try {
    return await logoutUser();
  } catch (error) {
    // todo : gestion des erreurs (est ce une errur axios ? si oui, si non...)
    return rejectWithValue(error);
  }
});
