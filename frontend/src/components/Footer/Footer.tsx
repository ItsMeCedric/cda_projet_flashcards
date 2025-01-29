// import locals
import classes from "./Footer.module.css";

// import constants
import Copyright from "../../constants/Copyright";
import FooterLinksMap from "./FooterLinksMap";

const Footer = () => {
  return (
    <div className={classes.footer}>
      <div className={classes.legals}>
        <FooterLinksMap />
        <Copyright />
      </div>
    </div>
  );
};

export default Footer;
