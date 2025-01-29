import { createAction, createAsyncThunk } from "@reduxjs/toolkit";

// Action pour reset le state
export const resetAuthState = createAction("auth/RESET_AUTH_STATE");

// Action pour l'inscription d'un utilisateur (asynchrone)
export const register = createAsyncThunk("auth/REGISTER", async (credentials, { rejectWithValue }) => {
  // todo : Ajouter le type de credentials
  try {
    console.log(credentials);
    // todo : Appel à l'API pour s'inscrire
  } catch (error) {
    // todo : gestion des erreurs (est ce une errur axios ? si oui, si non...)
    return rejectWithValue(error);
  }
});

// Action pour la connexion d'un utilisateur (asynchrone)
export const login = createAsyncThunk("auth/LOGIN", async (credentials, { rejectWithValue }) => {
  // todo : Ajouter le type de credentials
  try {
    console.log(credentials);
    // todo : Appel à l'API pour se connecter
  } catch (error) {
    // todo : gestion des erreurs (est ce une errur axios ? si oui, si non...)
    return rejectWithValue(error);
  }
});

// Action valider le token de l'utilisateur (asynchrone)
export const validateUserToken = createAsyncThunk("auth/VALIDATE_USER_TOKEN", async (_, { rejectWithValue }) => {
  try {
    console.log("Validation du token de l'utilisateur");
    // todo : Appel à l'API pour valider le token
  } catch (error) {
    // todo : gestion des erreurs (est ce une errur axios ? si oui, si non...)
    return rejectWithValue(error);
  }
});

// Action pour la déconnexion de l'utilisateur
export const logout = createAction("auth/LOGOUT");
