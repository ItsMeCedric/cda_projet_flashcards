import logo_light from "../../assets/FlashMcCard.png";
import logo_dark from "../../assets/FlashMcCard_white.png";

import styles from "./Header.module.css";
import { NavLink } from "react-router-dom";
import { useContext } from "react";

import ToggleTheme from "../ToggleTheme/ToggleTheme";
import { ThemeContext } from "../../contexts/ThemeContext";

// import types
import { ThemeContextType } from "../../@types/theme";

const Header = () => {
  const { theme } = useContext(ThemeContext) as ThemeContextType;
  return (
    <div className={styles.header}>
      <img src={theme === "light" ? logo_light : logo_dark} alt="logo" className={styles.logo} />
      <div className={styles.navbar}>
        <NavLink to={"/"}>Home</NavLink>
        <span>|</span>
        <NavLink to={"/"}>Explore</NavLink>
        <span>|</span>
        <NavLink to={"/"}>Contact Us</NavLink>
        <span>|</span>
        <ToggleTheme />
      </div>
      <div className={styles.auth_btn}>
        <NavLink className={styles.login} to={"/login"}>
          Login
        </NavLink>
        <NavLink className={styles.login} to={"/signin"}>
          Sign In
        </NavLink>
        <NavLink className={styles.login} to={"/account"}>
          Account
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
