// import local libraries
import { useEffect, useState } from "react";
import { ThemeContext } from "./ThemeContext";

// import types
import { ThemeProviderProps, Theme } from "../@types/theme";

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  // initialisation of theme in local storage
  const initialTheme = (localStorage.getItem("theme") as Theme) || "light";

  // set theme function
  const [theme, setTheme] = useState<Theme>(initialTheme);

  // toggle between dark and light function
  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  // set data-theme to DOM's body
  useEffect(() => {
    document.body.setAttribute("data-theme", theme);

    localStorage.setItem("theme", theme);
  }, [theme]);

  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
};
