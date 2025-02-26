// todo : LS/ Appel à l'API (verif endpoint) + return des données

import { LoginCredentials, RegisterCredentials } from "../@types/auth";
import { UserMock } from "../@types/user";
import axiosInstance from "../utils/axios";

export const registerUser = async (credentials: RegisterCredentials) => {
  // todo : LS/ Appel à l'API json-server à effacer + verifier si mail ou username deja existant (côté server)
  await axiosInstance.post("/auth/register", credentials);
};

export const loginUser = async (credentials: LoginCredentials): Promise<UserMock> => {
  // todo : LS/ changer le type de retour + changer le endpoint
  // const response = await axiosInstance.post<UserMock>("/", credentials);
  // return response.data;

  // todo : LS/ Appel à l'API json-server à effacer
  const response = await axiosInstance.post<UserMock[]>(`/auth/login`, credentials);
  if (response.data.length === 0) {
    throw new Error("User not found");
  }
  console.log(response.data);
  return response.data[0];
};

export const validateUserToken = async () => {
  console.log("authService/validateUserToken");
};

export const logoutUser = async () => {
  console.log("authService/logoutUser");
};
