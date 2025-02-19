import { LoginCredentials, RegisterCredentials } from './auth';
import { NewDeckCredentials } from './deck';

export type FormFieldTypes = LoginCredentials | RegisterCredentials;

// FormFieldNames est l'union des clés de LoginCredentials et RegisterCredentials
// On utilise Extract pour extraire les clés de chaque interface, ici, de type string
export type FormFieldNames = Extract<
  keyof LoginCredentials | keyof RegisterCredentials | keyof NewDeckCredentials,
  string
>;

/**
 * Définition d'un champ de formulaire (ex: input email, password, etc.)
 */

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
    label?: string;
    input?: string;
    inputErrorContainer?: string;
    error?: string;
  };
  error?: string;
  // UseFormRegister<T> dans react-hook-form nécessite un type T qui définit les champs possibles du formulaire.
  register: UseFormRegister<T>; // T permet d'assurer que name correspond bien aux clés d'un formulaire valide.
}

// export interface FormInputProps2 extends FormFieldBase {
//   classNames?: {
//     wrapper?: string;
//     input?: string;
//     error?: string;
//   };
// }

/**
 *  Manually Defining thunkApi Types
 *  https://redux-toolkit.js.org/usage/usage-with-typescript#manually-defining-thunkapi-types
 */

export type AsyncThunkConfig = {
  /** return type for `thunkApi.getState` */
  state?: unknown;
  /** type for `thunkApi.dispatch` */
  dispatch?: Dispatch;
  /** type of the `extra` argument for the thunk middleware, which will be passed in as `thunkApi.extra` */
  extra?: unknown;
  /** type to be passed into `rejectWithValue`'s first argument that will end up on `rejectedAction.payload` */
  rejectValue?: unknown;
  /** return type of the `serializeError` option callback */
  serializedErrorType?: unknown;
  /** type to be returned from the `getPendingMeta` option callback & merged into `pendingAction.meta` */
  pendingMeta?: unknown;
  /** type to be passed into the second argument of `fulfillWithValue` to finally be merged into `fulfilledAction.meta` */
  fulfilledMeta?: unknown;
  /** type to be passed into the second argument of `rejectWithValue` to finally be merged into `rejectedAction.meta` */
  rejectedMeta?: unknown;
};

/**
 *  Définition des classes CSS optionnelles pour chaque partie du formulaire
 */

// export interface FormClassNames {
//   formContainer?: string;
//   formWrapper?: string;
//   formTitle?: string;
//   formBase?: string;
//   inputWrapper?: string;
//   inputLabel?: string;
//   input?: string;
//   inputErrorContainer?: string;
//   inputError?: string;
//   messagesContainer?: string;
//   messageError?: string;
//   messageSuccess?: string;
//   submitButton?: string;
// }
