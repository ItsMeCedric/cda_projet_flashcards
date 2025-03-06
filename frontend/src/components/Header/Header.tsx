import logo_light from "../../assets/FlashMcCard.png";
import logo_dark from "../../assets/FlashMcCard_white.png";

import styles from "./Header.module.css";
import { NavLink, useNavigate } from "react-router-dom";
import { useContext } from "react";

import ToggleTheme from "../ToggleTheme/ToggleTheme";
import { ThemeContext } from "../../contexts/ThemeContext";

// import types
import { ThemeContextType } from "../../@types/theme";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { logout as logoutAction } from "../../store/actions/authActions";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.auth);

  const logout = () => {
    dispatch(logoutAction());
    navigate("/", { replace: true });
  };
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
        {user != undefined ? (
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
