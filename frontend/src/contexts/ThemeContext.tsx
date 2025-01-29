// local libraries
import { createContext } from "react";

// import types
import { ThemeContextType } from "../@types/theme";

// context initilisation
export const ThemeContext = createContext<ThemeContextType | null>(null);
