import logo_light from "../../assets/FlashMcCard.png";
import logo_dark from "../../assets/FlashMcCard_white.png";

import { FaSignInAlt, FaSignOutAlt, FaUser, FaUserCheck } from "react-icons/fa";

import styles from "./Header.module.css";
import { NavLink, useNavigate } from "react-router-dom";
import { useContext } from "react";

import ToggleTheme from "../ToggleTheme/ToggleTheme";
import { ThemeContext } from "../../contexts/ThemeContext";

// import types
import { ThemeContextType } from "../../@types/theme";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { logout as logoutAction } from "../../store/actions/authActions";
import { reset } from "../../store/reducers/accountSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.auth);

  const logout = () => {
    dispatch(reset());
    dispatch(logoutAction());
    navigate("/", { replace: true });
  };
  const { theme } = useContext(ThemeContext) as ThemeContextType;

  return (
    <div className={styles.header}>
      <NavLink to={"/"}>
        <img src={theme === "light" ? logo_light : logo_dark} alt="logo" className={styles.logo} />
      </NavLink>
      <div className={styles.navbar}>
        <NavLink to={"/"}>Home</NavLink>
        <span>|</span>
        <ToggleTheme />
      </div>
      <div className={styles.auth_btn}>
        {user != undefined ? (
          <>
            <NavLink className={styles.login} to={"/account"}>
              Account <FaUserCheck />
            </NavLink>
            <a className={styles.login} onClick={logout}>
              Logout <FaSignOutAlt />
            </a>
          </>
        ) : (
          <>
            <NavLink className={styles.login} to={"/login"}>
              Login <FaUser />
            </NavLink>
            <NavLink className={styles.login} to={"/signin"}>
              Sign In <FaSignInAlt />
            </NavLink>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
