// ThemeContext.tsx
import { createContext, useEffect, useContext } from "react";
import { ReactNode } from "react";
import useLocalStorage from "use-local-storage";

// Typage du contexte
interface ThemeContextType {
  theme: string;
  toggleTheme: () => void;
}

interface ThemeProviderProps {
  children: ReactNode;
}

const ThemeContext = createContext<ThemeContextType | null>(null);

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useLocalStorage<string>("theme", "light");

  // Fonction pour alterner entre "light" et "dark"
  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  const context = useContext(ThemeContext);
  useEffect(() => {
    // Vérification si context existe avant de manipuler data-theme
    if (context) {
      document.body.setAttribute("data-theme", context.theme);
    }
  }, [context]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
