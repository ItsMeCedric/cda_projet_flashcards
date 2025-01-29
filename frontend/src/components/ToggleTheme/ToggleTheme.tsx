// import locals
import classes from "./ToggleTheme.module.css";
import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";

// import types
import { ThemeContextType } from "../../@types/theme";

// import external packages
import { FaMoon, FaSun } from "react-icons/fa"; //icons

const ToogleTheme = () => {
  const { theme } = useContext(ThemeContext) as ThemeContextType;
  const { toggleTheme } = useContext(ThemeContext) as ThemeContextType;

  return (
    <span className={classes.theme} onClick={toggleTheme}>
      <span className={classes["theme-button"]}>
        <span>{theme === "light" ? "Light Mode" : "Dark Mode"}</span>
        <span className={classes.icon}> {theme === "light" ? <FaSun /> : <FaMoon />}</span>
      </span>
    </span>
  );
};

export default ToogleTheme;
