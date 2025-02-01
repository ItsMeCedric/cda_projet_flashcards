import { LoginCredentials, RegisterCredentialsForm } from './auth';

export type FormFieldTypes = LoginCredentials | RegisterCredentialsForm;

// FormFieldNames est l'union des clés de LoginCredentials et RegisterCredentials
// On utilise Extract pour extraire les clés de chaque interface, ici, de type string
export type FormFieldNames = Extract<
  keyof LoginCredentials | keyof RegisterCredentialsForm,
  string
>;

export interface FormFieldBase {
  label: string;
  name: FormFieldNames;
  type: string;
  required: boolean;
  placeholder?: string;
}
