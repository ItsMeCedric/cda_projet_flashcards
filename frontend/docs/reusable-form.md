# Documentation for the `ReusableForm` component

## Introduction

This component is a reusable and configurable standard form using :

- [`react-hook-form`](https://react-hook-form.com/) for form handling,
- [`zod`](https://zod.dev/) for form validation,
- [`redux`](https://redux-toolkit.js.org/) for managing form submission through actions.

## Expected props and types

| **Prop**           | **Expected Type**                                              | **Description**                                               |
| ------------------ | -------------------------------------------------------------- | ------------------------------------------------------------- |
| `T`                | `FieldValues` (e.g, `LoginCredentials`, `RegisterCredentials`) | Type of form data (submitted values).                         |
| `R`                | `unknown` ou `void` ou `UserMock`                              | Type of the Redux action return value after submission.       |
| `FormClassNames`   | `FormClassNames`                                               | Object containing optional CSS classes for each form section. |
| `title`            | `string`                                                       | Form title.                                                   |
| `formFields`       | `FormFieldBase[]`                                              | Array of form fields.                                         |
| `schemaValidation` | `ZodSchema<T>`                                                 | `Zod` schema for field validation.                            |
| `submitButtonText` | `{ loading: string; default: string; }`                        | Submission button text (loading / default).                   |
| `isLoading`        | `boolean`                                                      | Indicates whether the Redux action is pending.                |
| `message`          | `{ error?: string \| null; success?: string \| null; }`        | Error or success message to be displayed.                     |
| `reduxAction`      | `AsyncThunk<R, T, AsyncThunkConfig>`                           | `Redux` action to be executed on submission.                  |

## Example of use

### Typing form fields and return data

Defines the structure of the form data (`LoginCredentials`) and the expected response (`UserMock`).

```ts
interface LoginCredentials {
  email: string;
  password: string;
}

interface UserMock {
  id: number;
  username: string;
  first_name: string | null;
  last_name: string | null;
  email: string;
  b64Url: string;
  verified: boolean;
  hash: string;
}
```

### Defining form fields

The `loginFormFields` array describes the form fields.

```ts
const loginFormFields: FormFieldBase[] = [
  {
    label: 'Email',
    name: 'email',
    type: 'email',
    required: true,
    placeholder: 'Entrez votre email',
  },
  {
    label: 'Mot de passe',
    name: 'password',
    type: 'password',
    required: true,
    placeholder: 'Entrez votre mot de passe',
  },
];
```

### Defining the validation schema

The `loginSchema` ensures that the fields are correctly validated before submission.

```ts
const loginSchema = z.object({
  email: z.string().email('Veuillez entrer une adresse email valide'),
  password: z.string(),
});
```

### Redux action definition for form submission

Defines the `login` action that will be dispatched upon form submission.

```ts
export const login = createAsyncThunk<UserMock, LoginCredentials>(
  'auth/LOGIN',
  async (credentials, { rejectWithValue }) => {
    try {
      return await loginUser(credentials);
    } catch (error) {
      console.error(error);
      return rejectWithValue('error');
    }
  }
);
```

### Using the ReusableForm component

This example shows how to integrate `ReusableForm` into a React component.

```tsx
<ReusableForm<LoginCredentials, UserMock>
  title="Connexion"
  formFields={loginFormFields}
  schemaValidation={loginSchema}
  submitButtonText={{
    loading: 'Connexion',
    default: 'Se connecter',
  }}
  isLoading={isLoading}
  message={{ error: error, success: null }}
  reduxAction={login as AsyncThunk<UserMock, LoginCredentials, object>}
/>
```
