import { User } from './user';

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface RegisterCredentials {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface AuthState {
  isLogged: boolean;
  user: User | null;
  isLoading: boolean;
  success: string | null;
  error: string | null;
}
