import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";

// import CSS
import classes from "./Footer.module.css";

// import icons
import { FaMoon, FaSun } from "react-icons/fa";

function ToggleButton() {
  const { theme, toggleTheme } = useContext(ThemeContext) as ThemeContextType;

  return (
    <span className={classes.theme} onClick={toggleTheme}>
      <button className={classes["theme-button"]}>
        {theme === "dark" ? <FaSun /> : <FaMoon />}
        <span>{theme === "dark" ? "Light Mode" : "Dark Mode"}</span>
      </button>
    </span>
  );
}

export default ToggleButton;
