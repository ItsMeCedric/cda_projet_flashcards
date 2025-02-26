import logo_light from "../../assets/FlashMcCard.png";
import logo_dark from "../../assets/FlashMcCard_white.png";

import styles from "./Header.module.css";
import { NavLink, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";

import ToggleTheme from "../ToggleTheme/ToggleTheme";
import { ThemeContext } from "../../contexts/ThemeContext";

// import types
import { ThemeContextType } from "../../@types/theme";
import axiosInstance from "../../utils/axios";

const Header = () => {
  const navigate = useNavigate();
  const logout = () => {
    axiosInstance.get("/auth/logout").then(() => {
      localStorage.clear();
      isLogged(false);
      navigate("/", { replace: true });
    });
  };
  const { theme } = useContext(ThemeContext) as ThemeContextType;
  const [logged, isLogged] = useState(false);
  useEffect(() => {
    if (localStorage.getItem("userId")) {
      isLogged(true);
    } else {
      isLogged(false);
    }
  });
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
        {logged ? (
          <>
            <NavLink className={styles.login} to={"/account"}>
              Account
            </NavLink>
            <a className={styles.login} onClick={logout}>
              Logout
            </a>
          </>
        ) : (
          <>
            <NavLink className={styles.login} to={"/login"}>
              Login
            </NavLink>
            <NavLink className={styles.login} to={"/signin"}>
              Sign In
            </NavLink>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
