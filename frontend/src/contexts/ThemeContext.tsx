// ThemeContext.tsx
import { createContext } from "react";
import { ThemeContextType } from "../@types/theme";

export const ThemeContext = createContext<ThemeContextType | null>(null);
