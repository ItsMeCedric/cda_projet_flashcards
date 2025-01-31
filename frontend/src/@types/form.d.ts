import { LoginCredentials, RegisterCredentials } from './auth';

export type FormFieldTypes = LoginCredentials | RegisterCredentials;

// FormFieldNames est l'union des clés de LoginCredentials et RegisterCredentials
// On utilise Extract pour extraire les clés de chaque interface, ici, de type string
export type FormFieldNames = Extract<
  keyof LoginCredentials | keyof RegisterCredentials,
  string
>;
