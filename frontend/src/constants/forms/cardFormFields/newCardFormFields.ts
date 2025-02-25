import { FormFieldBase } from '../../../@types/form';

export const newCardFormFields: FormFieldBase[] = [
  {
    label: 'Question',
    name: 'question',
    type: 'text',
    required: true,
    placeholder: 'Entrez le question de votre carte',
  },
  {
    label: 'Document rattaché à la question',
    name: 'questionImg',
    type: 'file',
    // accept: 'image/*', // ne fonctionne pas avec FormFieldBase -> 'export interface FormField extends InputHTMLAttributes<HTMLInputElement> {'  ou adapter le type de FormFieldBase ou via Zod ?
    required: false,
    placeholder: 'Ajoutez un document à votre question',
  },
  {
    label: 'Réponse',
    name: 'answer',
    type: 'text',
    required: true,
    placeholder: 'Entrez la réponse de votre carte',
  },
  {
    label: 'Document rattaché à la réponse',
    name: 'answerImg',
    type: 'file',
    // accept: 'image/*', // ne fonctionne pas avec FormFieldBase -> 'export interface FormField extends InputHTMLAttributes<HTMLInputElement> {'  ou adapter le type de FormFieldBase ou via Zod ?
    required: false,
    placeholder: 'Ajoutez un document à votre réponse',
  },
];
