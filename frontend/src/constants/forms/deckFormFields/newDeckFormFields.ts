import { FormFieldBase } from '../../../@types/form';

export const newDeckFormFields: FormFieldBase[] = [
  {
    label: 'Nom',
    name: 'name',
    type: 'text',
    required: true,
    placeholder: 'Entrez le nom de votre deck',
  },
  {
    label: 'Sujet',
    name: 'subject',
    type: 'text',
    required: true,
    placeholder: 'Entrez le sujet de votre deck',
  },
];
