import logo from "../../assets/FlashMcCard.png";
import styles from "./Header.module.css";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className={styles.header}>
      <img src={logo} alt="logo" className={styles.logo} />
      <div className={styles.navbar}>
        <NavLink to={"/"}>Home</NavLink>
        <span>|</span>
        <NavLink to={"/"}>Explore</NavLink>
        <span>|</span>
        <NavLink to={"/"}>Contact Us</NavLink>
      </div>
      <div className={styles.auth_btn}>
        <NavLink className={styles.login} to={"/login"}>
          Login
        </NavLink>
        <NavLink className={styles.login} to={"/signin"}>
          Sign In
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
