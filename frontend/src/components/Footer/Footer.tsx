import ToggleButton from "./ToggleButton";
import Links from "./Links";

// import CSS
import classes from "./Footer.module.css";
import Copyright from "./Copyright ";

const Footer = () => {
  return (
    <div className={classes.footer}>
      <div className={classes.legals}>
        <Links />
        <Copyright />
        <ToggleButton />
      </div>
    </div>
  );
};

export default Footer;
