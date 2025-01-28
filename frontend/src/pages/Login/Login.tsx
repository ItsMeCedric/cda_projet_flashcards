import styles from "./Login.module.css";

function Login() {
  return (
    <div className={styles.auth_container}>
      <div className={styles.form_wrapper}>
        <h2>Connexion</h2>
        <form>
          <div className={styles.form_group}>
            <label htmlFor={styles.login_email}>Email</label>
            <input type="email" id="login-email" placeholder="Entrez votre email" required />
          </div>
          <div className={styles.form_group}>
            <label htmlFor="login-password">Mot de passe</label>
            <input type="password" id="login-password" placeholder="Entrez votre mot de passe" required />
          </div>
          <button type="submit" className={styles.btn}>
            Se connecter
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
