// import CSS
import classes from "./Footer.module.css";

// import icons
import { FaMoon, FaSun } from "react-icons/fa";

const Footer = () => {
  // toggle function for light/dark
  const theme_icon =
    theme === "light" ? (
      <button className={classes["theme-button"]}>
        <FaSun />
        <span> Light Mode</span>
      </button>
    ) : (
      <button className={classes["theme-button"]}>
        <FaMoon />
        <span>Dark Mode</span>
      </button>
    );

  return (
    <div className={classes.footer}>
      <div className={classes.legals}>
        <a href="#">Legals</a>
        <span>|</span>
        <a href="#">Report</a>
        <span>|</span>
        <span>2025 © FlashMcCard</span>
        <span>|</span>
        <span className={classes.theme} onClick={toggleTheme}>
          {theme_icon}
        </span>
      </div>
    </div>
  );
};

export default Footer;
