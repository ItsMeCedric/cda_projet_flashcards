// ThemeContext.tsx
import { createContext } from "react";

// Typage du contexte
interface ThemeContextType {
  theme: string;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextType | null>(null);
