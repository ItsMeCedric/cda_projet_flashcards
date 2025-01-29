import classes from "./SignIn.module.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const SignIn = () => {
  return (
    <div className={classes.wrap}>
      <Header />
      <div className={classes.auth_container}>
        <div className={classes.form_wrapper}>
          <h2>Inscription</h2>
          <form>
            <div className={classes.form_group}>
              <label htmlFor={classes.register_name}>Nom</label>
              <input type="text" id="register-name" placeholder="Entrez votre nom" required />
            </div>
            <div className={classes.form_group}>
              <label htmlFor={classes.register_email}>Email</label>
              <input type="email" id="register-email" placeholder="Entrez votre email" required />
            </div>
            <div className={classes.form_group}>
              <label htmlFor="register-password">Mot de passe</label>
              <input type="password" id="register-password" placeholder="Créez un mot de passe" required />
            </div>
            <button type="submit" className={classes.btn}>
              S'inscrire
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default SignIn;
