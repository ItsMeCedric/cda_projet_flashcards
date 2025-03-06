// todo : LS/ Appel à l'API (verif endpoint) + return des données

import { LoginCredentials, RegisterCredentials } from "../@types/auth";
import { User } from "../@types/user";
import axiosInstance from "../utils/axios";

export const registerUser = async (credentials: RegisterCredentials) => {
  // todo : LS/ Appel à l'API json-server à effacer + verifier si mail ou username deja existant (côté server)
  await axiosInstance.post("/auth/register", credentials);
};

export const loginUser = async (credentials: LoginCredentials): Promise<User> => {
  //TODO: la réponse contient le hash de l'user, très mauvais
  const response = await axiosInstance.post<User>(`/auth/login`, credentials);
  if (response.status === 200) return response.data;
  else throw new Error("error while logging in");
};

export const validateUserToken = async () => {
  console.log("authService/validateUserToken");
};

export const logoutUser = async () => {
  const response = await axiosInstance.get("/auth/logout");
  if (response.status === 200) localStorage.removeItem("userId");
  console.log("authService/logoutUser");
};
