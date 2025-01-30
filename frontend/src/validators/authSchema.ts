import { z } from "zod";

export const registerSchema = z
  .object({
    username: z
      .string()
      .min(3, "Le nom doit contenir au moins 3 caractères")
      .max(50, "Le nom doit contenir au maximum 50 caractères"),
    email: z.string().email("Veuillez entrer une adresse email valide"),
    password: z
      .string()
      .min(12, "Le mot de passe doit contenir au moins 12 caractères")
      .max(100)
      .regex(/[A-Z]/, "Le mot de passe doit contenir au moins une majuscule")
      .regex(/[a-z]/, "Le mot de passe doit contenir au moins une minuscule")
      .regex(/[0-9]/, "Le mot de passe doit contenir au moins un chiffre")
      .regex(/[!@#$%^&*(),.?":{}|<>]/, "Le mot de passe doit contenir au moins un caractère spécial"),
    confirmPassword: z.string().min(12, "Veuillez confirmer votre mot de passe").max(100),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Les mots de passe ne correspondent pas",
    path: ["confirmPassword"],
  });
