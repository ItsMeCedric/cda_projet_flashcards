import { z } from "zod";

export const updateAccountSchema = z.object({
  email: z.string().email("Adresse email invalide"),
  username: z.string().min(3, "Le nom d'utilisateur doit contenir au moins 3 caractères"),
  password: z
    .string()
    .optional()
    .refine((val) => {
      if (!val) return true; // Si aucun mot de passe n'est fourni, on accepte
      return val.length >= 8 && /[A-Z]/.test(val) && /[a-z]/.test(val) && /[0-9]/.test(val) && /[^A-Za-z0-9]/.test(val);
    }, "Le mot de passe doit contenir au moins 8 caractères, une majuscule, une minuscule, un chiffre et un caractère spécial"),
});
