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

// T peut être n'importe quelle interface (qui étend FieldValues). T représente la structure des champs du formulaire. T ne sert qu'à register.
// On utilise T pour que le composant soit générique et puisse être utilisé avec n'importe quelle interface
// On utilise FormFieldBase
export interface FormInputProps<T extends FieldValues> extends FormFieldBase {
  classNames?: {
    wrapper?: string;
    input?: string;
    error?: string;
  };
  error?: string;
  // UseFormRegister<T> dans react-hook-form nécessite un type T qui définit les champs possibles du formulaire.
  register: UseFormRegister<T>; // T permet d'assurer que name correspond bien aux clés d'un formulaire valide.
}
