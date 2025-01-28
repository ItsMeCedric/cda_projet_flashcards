import logo from "../../assets/FlashMcCard.png";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.header}>
      <img src={logo} alt="logo" className={styles.logo} />
      <div className={styles.navbar}>
        <a href="#">Home</a>
        <span>|</span>
        <a href="#">Explore</a>
        <span>|</span>
        <a href="#">Contact Us</a>
      </div>
      <a href="#" className={styles.login}>
        Login
      </a>
    </div>
  );
};

export default Header;
