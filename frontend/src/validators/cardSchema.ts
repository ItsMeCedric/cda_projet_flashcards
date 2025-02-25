import { z } from 'zod';

// note: Pour les images, on utilise FileList (qui est une liste de fichiers)
// On valide que la liste contient 0 ou 1 fichier
// On valide que la liste contient 0 fichier ou le fichier est une image
// On valide que la liste contient 0 fichier ou le fichier est inférieur à 5 Mo

export const newCardSchema = z.object({
  question: z
    .string()
    .min(3, 'La question doit contenir au moins 3 caractères'),
  questionImg: z
    .instanceof(FileList) // todo: LS/ ajuster typage et validator - voir console.log(newCard); dans l'action
    .refine((list) => list.length === 0 || list.length === 1, {
      message: "Vous ne pouvez pas envoyer plus d'un fichier",
    })
    .refine((list) => list.length === 0 || list[0].size < 5000000, {
      message: 'Le fichier doit être inférieur à 5 Mo',
    })
    .refine((list) => list.length === 0 || list[0].type.startsWith('image/'), {
      message: "Le fichier doit être une image, d'autres formats à venir !",
    })
    .nullable(),
  answer: z.string().min(3, 'La réponse doit contenir au moins 3 caractères'),
  answerImg: z
    .instanceof(FileList)
    .refine((list) => list.length === 0 || list.length === 1, {
      message: "Vous ne pouvez pas envoyer plus d'un fichier",
    })
    .refine((list) => list.length === 0 || list[0].size < 5000000, {
      message: 'Le fichier doit être inférieur à 5 Mo',
    })
    .refine((list) => list.length === 0 || list[0].type.startsWith('image/'), {
      message: "Le fichier doit être une image, d'autres formats à venir !",
    })
    .nullable(),
});
