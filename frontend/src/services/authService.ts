import { LoginCredentials, RegisterCredentials } from "../@types/auth";
import { User } from "../@types/user";
import axiosInstance from "../utils/axios";

export const registerUser = async (credentials: RegisterCredentials) => {
  const response = await axiosInstance.post("/auth/register", credentials);
  if (response.status === 201) return response.data;
  else throw response.data.message;
};

export const loginUser = async (credentials: LoginCredentials): Promise<User> => {
  const response = await axiosInstance.post<User>(`/auth/login`, credentials);
  if (response.status === 200) return response.data;
  else throw response.data;
};

export const validateUserToken = async () => {
  const response = await axiosInstance.get<User>(`/auth/loggedIn`);
  if (response.status === 200) return response.data;
  else throw response.data;
};

export const logoutUser = async () => {
  const response = await axiosInstance.get("/auth/logout");
  if (response.status === 200) localStorage.removeItem("userId");
};

export const updateAuthData = async (data: {
  username: string | undefined;
  password: string | undefined;
  email: string | undefined;
  profilePicture: string | undefined;
}) => {
  return data;
};
