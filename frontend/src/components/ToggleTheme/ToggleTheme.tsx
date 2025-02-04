// import locals
import styles from "./ToggleTheme.module.css";
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
    <span className={styles.theme} onClick={toggleTheme}>
      <span className={styles["theme-button"]}>
        <span>{theme === "light" ? "Light Mode" : "Dark Mode"}</span>
        <span className={styles.icon}> {theme === "light" ? <FaSun /> : <FaMoon />}</span>
      </span>
    </span>
  );
};

export default ToogleTheme;
