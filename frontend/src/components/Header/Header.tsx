import logo_light from "../../assets/FlashMcCard.png";
import logo_dark from "../../assets/FlashMcCard_white.png";
import { FaSignInAlt, FaSignOutAlt, FaUser, FaUserCheck, FaHome } from "react-icons/fa";
import styles from "./Header.module.css";
import { NavLink, useNavigate } from "react-router-dom";
import { useContext } from "react";
import ToggleTheme from "../ToggleTheme/ToggleTheme";
import { ThemeContext } from "../../contexts/ThemeContext";
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

  const { theme } = useContext(ThemeContext);

  return (
    <div className={styles.header}>
      <NavLink to={"/"}>
        <img src={theme === "light" ? logo_light : logo_dark} alt="logo" className={styles.logo} />
      </NavLink>
      <div className={styles.navbar}>
        <NavLink to={"/"} className={styles.icon_link}>
          <FaHome /> <span className={styles.link_text}>Home</span>
        </NavLink>
        <span>|</span>
        <ToggleTheme />
      </div>
      <div className={styles.auth_btn}>
        {user != undefined ? (
          <>
            <NavLink className={`${styles.login} ${styles.icon_link}`} to={"/account"}>
              <FaUserCheck /> <span className={styles.link_text}>Account</span>
            </NavLink>
            <a className={`${styles.login} ${styles.icon_link}`} onClick={logout}>
              <FaSignOutAlt /> <span className={styles.link_text}>Logout</span>
            </a>
          </>
        ) : (
          <>
            <NavLink className={`${styles.login} ${styles.icon_link}`} to={"/login"}>
              <FaUser /> <span className={styles.link_text}>Login</span>
            </NavLink>
            <NavLink className={`${styles.login} ${styles.icon_link}`} to={"/signin"}>
              <FaSignInAlt /> <span className={styles.link_text}>Sign In</span>
            </NavLink>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
