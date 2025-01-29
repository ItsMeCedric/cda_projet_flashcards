import logo from "../../assets/FlashMcCard.png";
import classes from "./Header.module.css";
//import { useContext } from "react";
import { NavLink } from "react-router-dom";
//import { ThemeContext } from "../../contexts/ThemeContext";
import ToggleTheme from "../ToggleTheme/ToggleTheme";
// import types
// import { ThemeContextType } from "../../@types/theme";

const Header = () => {
  return (
    <div className={classes.header}>
      <img src={logo} alt="logo" className={classes.logo} />
      <div className={classes.navbar}>
        <NavLink to={"/"}>Home</NavLink>
        <span>|</span>
        <NavLink to={"/"}>Explore</NavLink>
        <span>|</span>
        <NavLink to={"/"}>Contact Us</NavLink>
        <span>|</span>
        <ToggleTheme />
      </div>
      <div className={classes.auth_btn}>
        <NavLink className={classes.login} to={"/login"}>
          Login
        </NavLink>
        <NavLink className={classes.login} to={"/signin"}>
          Sign In
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
