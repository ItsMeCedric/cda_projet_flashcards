// import locals
import styles from "./Footer.module.css";

// import constants
import Copyright from "../../constants/Copyright";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
    <div className={styles["footer-container"]}>
      <div className={styles.footer2}>
        <div className={styles.legals}>
          <NavLink to={"/RGPD"}>Legals/GDPR</NavLink>
          <span>-</span>
          <Copyright />
        </div>
      </div>
    </div>
    </footer>
  );
};

export default Footer;
