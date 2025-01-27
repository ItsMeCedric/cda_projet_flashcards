// ThemeContext.tsx
import { useEffect, useState } from "react";
import { ThemeContext } from "./ThemeContext";

import { ThemeProviderProps, Theme } from "../@types/theme";

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const initialTheme = (localStorage.getItem("theme") as Theme) || "light";
  const [theme, setTheme] = useState<Theme>(initialTheme);

  // Fonction pour alterner entre "light" et "dark"
  const toggleTheme = () => {
    setTheme((curr) => {
      const newTheme = curr === "light" ? "dark" : "light";
      localStorage.setItem("theme", newTheme);
      return newTheme;
    });
  };

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
};
