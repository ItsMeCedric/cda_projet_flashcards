// ThemeContext.tsx
import { ReactNode } from "react";
import useLocalStorage from "use-local-storage";
import { ThemeContext } from "./ThemeContext";

interface ThemeProviderProps {
  children: ReactNode;
}

// Création du contexte avec un type bien défini, par défaut "light"

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useLocalStorage<string>("theme", "light");

  // Fonction pour alterner entre "light" et "dark"
  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
