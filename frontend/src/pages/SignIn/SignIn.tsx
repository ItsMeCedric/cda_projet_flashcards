import styles from "./SignIn.module.css";

function SignIn() {
  return (
    <div className={styles.auth_container}>
      <div className={styles.form_wrapper}>
        <h2>Inscription</h2>
        <form>
          <div className={styles.form_group}>
            <label htmlFor={styles.register_name}>Nom</label>
            <input
              type="text"
              id="register-name"
              placeholder="Entrez votre nom"
              required
            />
          </div>
          <div className={styles.form_group}>
            <label htmlFor={styles.register_email}>Email</label>
            <input
              type="email"
              id="register-email"
              placeholder="Entrez votre email"
              required
            />
          </div>
          <div className={styles.form_group}>
            <label htmlFor="register-password">Mot de passe</label>
            <input
              type="password"
              id="register-password"
              placeholder="Créez un mot de passe"
              required
            />
          </div>
          <button type="submit" className={styles.btn}>
            S'inscrire
          </button>
        </form>
      </div>
    </div>
  );
}
export default SignIn;
