// import locals
import styles from "./Footer.module.css";

// import constants
import Copyright from "../../constants/Copyright";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.legals}>
        <NavLink to={"/RGPD"}>Legals/GDPR</NavLink>
        <span>-</span>
        <Copyright />
      </div>
    </div>
  );
};

export default Footer;
