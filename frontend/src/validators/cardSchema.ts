import { z } from 'zod';

export const newCardSchema = z.object({
  question: z
    .string()
    .min(3, 'La question doit contenir au moins 3 caractères'),
  questionImg: z
    .instanceof(File)
    .refine((file) => file.size < 5000000, {
      message: 'Le fichier est trop volumineux',
    })
    .refine((file) => file.type.startsWith('image/'), {
      message: "Le fichier doit être une image, d'autres formats à venir !",
    })
    .nullable(),
  answer: z.string().min(3, 'La réponse doit contenir au moins 3 caractères'),
  answerImg: z
    .instanceof(File)
    .refine((file) => file.size < 5000000, {
      message: 'Le fichier est trop volumineux',
    })
    .refine((file) => file.type.startsWith('image/'), {
      message: "Le fichier doit être une image, d'autres formats à venir !",
    })
    .nullable(),
});
