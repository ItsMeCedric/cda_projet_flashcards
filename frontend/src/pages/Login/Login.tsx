import { useForm, SubmitHandler } from "react-hook-form";

import styles from "./Login.module.css";

type LoginFormInput = {
  email: string;
  password: string;
};

const Login = () => {
  const { register, handleSubmit } = useForm<LoginFormInput>();
  const onSubmit: SubmitHandler<LoginFormInput> = (data) => console.log(data);

  return (
    <div className={styles.auth_container}>
      <div className={styles.form_wrapper}>
        <h2>Connexion</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.form_group}>
            <label htmlFor={styles.login_email}>Email</label>
            <input {...register("email", { required: true })} placeholder="Entrez votre email" />
          </div>
          <div className={styles.form_group}>
            <label htmlFor="login-password">Mot de passe</label>
            <input {...register("password", { required: true })} placeholder="Entrez votre mot de passe" />
          </div>
          <button type="submit" className={styles.btn}>
            Se connecter
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
