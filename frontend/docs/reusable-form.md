# 📄 Documentation for the `ReusableForm` component

## 🚀 Introduction

This component is a reusable and configurable standard form using :

- [`react-hook-form`](https://react-hook-form.com/) for form handling,
- [`zod`](https://zod.dev/) for form validation,
- [`redux`](https://redux-toolkit.js.org/) for managing form submission through actions.

## 📌 Expected props and types

| **Prop**           | **Expected Type**                                              | **Description**                                         |
| ------------------ | -------------------------------------------------------------- | ------------------------------------------------------- |
| `T`                | `FieldValues` (e.g, `LoginCredentials`, `RegisterCredentials`) | Type of form data (submitted values).                   |
| `R`                | `unknown` ou `void` ou `UserMock`                              | Type of the Redux action return value after submission. |
| `title`            | `string`                                                       | Form title.                                             |
| `formFields`       | `FormFieldBase[]`                                              | Array of form fields.                                   |
| `schemaValidation` | `ZodSchema<T>`                                                 | `Zod` schema for field validation.                      |
| `submitButtonText` | `{ loading: string; default: string; }`                        | Submission button text (loading / default).             |
| `isLoading`        | `boolean`                                                      | Indicates whether the Redux action is pending.          |
| `message`          | `{ error?: string \| null; success?: string \| null; }`        | Error or success message to be displayed.               |
| `reduxAction`      | `AsyncThunk<R, T, AsyncThunkConfig>`                           | `Redux` action to be executed on submission.            |

## 🎨 Customizing styles

By default, the ReusableForm component does not apply any styles. Instead, it automatically generates CSS class names dynamically based on the title prop.

Each form gets a unique set of class names based on its title. The title is processed as follows:

```ts
const formattedTitle = title
  .toLowerCase()
  .trim() // Removes leading and trailing spaces
  .normalize('NFD') // Normalizes accented characters
  .replace(/[\u0300-\u036f]/g, '') // Removes accents
  .replace(/\s+/g, '-') // Replaces spaces with hyphens
  .replace(/[^a-z0-9-]/g, ''); // Removes special characters
```

For example:

- "Sign Up" → form-sign-up-container
- "Login" → form-login-container
- "Password Reset" → form-password-reset-container

## 🏗️ List of generated CSS class names

| **Component**        | **Subcomponent**                  | **Generated Class Name**                       | **Example for "Login" form**           |
| -------------------- | --------------------------------- | ---------------------------------------------- | -------------------------------------- |
| **FormContainer**    | Outer container                   | `form-${formattedTitle}-container`             | `.form-login-container {}`             |
| **FormContainer**    | Inner wrapper                     | `form-${formattedTitle}-wrapper`               | `.form-login-wrapper {}`               |
| **FormTitle**        | Form title                        | `form-${formattedTitle}-title`                 | `.form-login-title {}`                 |
| **FormBase**         | `<form>` element                  | `form-${formattedTitle}-base`                  | `.form-login-base {}`                  |
| **FormInput**        | Wrapper around label & input      | `form-${formattedTitle}-input-wrapper`         | `.form-login-input-wrapper {}`         |
| **FormInput**        | Label for input                   | `form-${formattedTitle}-input-label`           | `.form-login-input-label {}`           |
| **FormInput**        | Input field                       | `form-${formattedTitle}-input`                 | `.form-login-input {}`                 |
| **FormInput**        | Container for input error message | `form-${formattedTitle}-input-error-container` | `.form-login-input-error-container {}` |
| **FormInput**        | Input error message text          | `form-${formattedTitle}-input-error`           | `.form-login-input-error {}`           |
| **FormMessages**     | Wrapper around messages           | `form-${formattedTitle}-messages-container`    | `.form-login-messages-container {}`    |
| **FormMessages**     | Success message                   | `form-${formattedTitle}-message-success`       | `.form-login-message-success {}`       |
| **FormMessages**     | Error message                     | `form-${formattedTitle}-message-error`         | `.form-login-message-error {}`         |
| **FormSubmitButton** | Submit button                     | `form-${formattedTitle}-submit-button`         | `.form-login-submit-button {}`         |

## 🛠️ Example of use

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
const login = createAsyncThunk<UserMock, LoginCredentials>(
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

### Defining your styles (CSS file)

```css
/* Login form container */
.form-login-container {
}

/* Title styling */
.form-login-title {
}

/* Input styling */
.form-login-input {
}
```
