import { FormFieldBase } from '../../../@types/form';

export const signInFormFields: FormFieldBase[] = [
  {
    label: "Nom d'utilisateur",
    name: 'username',
    type: 'text',
    required: true,
    placeholder: 'Entrez votre nom',
  },
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
    placeholder: 'Créez un mot de passe',
  },
  {
    label: 'Confirmation du mot de passe',
    name: 'confirmPassword',
    type: 'password',
    required: true,
    placeholder: 'Confirmez votre mot de passe',
  },
];
