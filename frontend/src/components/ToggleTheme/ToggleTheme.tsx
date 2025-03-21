import styles from "./ToggleTheme.module.css";
import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import { ThemeContextType } from "../../@types/theme";
import { FaMoon, FaSun } from "react-icons/fa";

const ToggleTheme = () => {
  const { theme, toggleTheme } = useContext(ThemeContext) as ThemeContextType;

  return (
    <span className={styles.theme} onClick={toggleTheme}>
      <span className={styles["theme-button"]}>
        <span className={styles.theme_text}>{theme === "light" ? "Light Mode" : "Dark Mode"}</span>
        <span className={styles.icon}>{theme === "light" ? <FaSun /> : <FaMoon />}</span>
      </span>
    </span>
  );
};

export default ToggleTheme;
