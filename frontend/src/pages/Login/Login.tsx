import classes from "./Login.module.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const Login = () => {
  return (
    <div className={classes.wrap}>
      <Header />
      <div className={classes.auth_container}>
        <div className={classes.form_wrapper}>
          <h2>Connexion</h2>
          <form>
            <div className={classes.form_group}>
              <label htmlFor={classes.login_email}>Email</label>
              <input type="email" id="login-email" placeholder="Entrez votre email" required />
            </div>
            <div className={classes.form_group}>
              <label htmlFor="login-password">Mot de passe</label>
              <input type="password" id="login-password" placeholder="Entrez votre mot de passe" required />
            </div>
            <button type="submit" className={classes.btn}>
              Se connecter
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
