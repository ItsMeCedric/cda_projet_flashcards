// todo : Appel à l'API (verif endpoint) + return des données

import { LoginCredentials, RegisterCredentials } from "../@types/auth";
import { UserMock } from "../@types/user";
import axiosInstance from "../utils/axios";

export const registerUser = async (credentials: RegisterCredentials) => {
  console.log("authService/RegisterUser");
  console.log(credentials);
};

export const loginUser = async (credentials: LoginCredentials): Promise<UserMock> => {
  // todo : changer le type de retour
  const response = await axiosInstance.post("/", credentials);
  return response.data;
};

export const validateUserToken = async () => {
  console.log("authService/validateUserToken");
};

export const logoutUser = async () => {
  console.log("authService/logoutUser");
};
