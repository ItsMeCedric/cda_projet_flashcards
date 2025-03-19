import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import { registerUser, loginUser, validateUserToken, logoutUser, updateAuthData } from "../../services/authService";
import { LoginCredentials, RegisterCredentials } from "../../@types/auth";
import { User } from "../../@types/user";

// Action pour reset le state
export const resetAuthState = createAction("auth/RESET_AUTH_STATE");

export const resetError = createAction("auth/RESET_ERROR");

// Action pour l'inscription d'un utilisateur (asynchrone)
export const register = createAsyncThunk(
  "auth/REGISTER",
  async (credentials: RegisterCredentials, { rejectWithValue }) => {
    try {
      return await registerUser(credentials);
    } catch (error: any) {
      // todo : LS/ gestion des erreurs (est ce une errur axios ? si oui, si non...)
      console.error(error);
      if (error.status === 400) return rejectWithValue("Compte existant");
      return rejectWithValue("Erreur");
    }
  }
);

// Action pour la connexion d'un utilisateur (asynchrone)
export const login = createAsyncThunk<User, LoginCredentials>( // todo : changer le type de retour
  "auth/LOGIN",
  async (credentials, { rejectWithValue }) => {
    try {
      return await loginUser(credentials);
    } catch (error: any) {
      // todo : LS/ gestion des erreurs (est ce une errur axios ? si oui, si non...)
      console.error(error);
      if (error.status === 401) return rejectWithValue("Email ou mot de passe erroné.");
      return rejectWithValue("Erreur");
    }
  }
);

// Action valider le token de l'utilisateur (asynchrone)
export const validateToken = createAsyncThunk("auth/VALIDATE_USER_TOKEN", async (_, { rejectWithValue }) => {
  try {
    return await validateUserToken();
  } catch (error) {
    // todo : LS/ gestion des erreurs (est ce une errur axios ? si oui, si non...)
    console.error(error);
    return rejectWithValue("");
  }
});

// Action pour la déconnexion de l'utilisateur
export const logout = createAsyncThunk("auth/LOGOUT", async (_, { rejectWithValue }) => {
  try {
    return await logoutUser();
  } catch (error) {
    // todo : LS/ gestion des erreurs (est ce une errur axios ? si oui, si non...)
    console.error(error);
    return rejectWithValue("error");
  }
});

// action pcq louis casse les couilles
export const updateData = createAsyncThunk(
  "auth/UPDATE_DATA",
  async (data: RegisterCredentials, { rejectWithValue }) => {
    try {
      return await updateAuthData(data);
    } catch (error) {
      return rejectWithValue("error");
    }
  }
);
