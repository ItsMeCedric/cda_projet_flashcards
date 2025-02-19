import { z } from 'zod';

export const newDeckSchema = z.object({
  name: z
    .string()
    .min(3, 'Le nom doit contenir au moins 3 caractères')
    .max(100, 'Le nom doit contenir au maximum 100 caractères'),
  subject: z
    .string()
    .max(200, 'Le sujet doit contenir au maximum 200 caractères'),
});
