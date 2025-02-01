import { FormFieldBase } from '../../../@types/form';

export const loginFormFields: FormFieldBase[] = [
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
