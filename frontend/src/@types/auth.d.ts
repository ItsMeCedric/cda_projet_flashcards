import { User } from "./user";

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface RegisterCredentials {
  username: string;
  email: string;
  password: string;
}

export interface RegisterCredentialsForm extends RegisterCredentials {
  confirmPassword: string;
}

export interface AuthState {
  user: User | undefined;
  isLoading: boolean;
  success: string | null;
  error: string | null;
}
