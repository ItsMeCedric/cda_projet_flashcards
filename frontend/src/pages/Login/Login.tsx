import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { useForm, SubmitHandler } from "react-hook-form";
import { login } from "../../store/actions/authActions";

import styles from "./Login.module.css";

type LoginFormInput = {
  email: string;
  password: string;
};

const Login = () => {
  const { register, handleSubmit } = useForm<LoginFormInput>();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { isLogged, user, isLoading, error } = useAppSelector((state) => state.auth);

  const onSubmit: SubmitHandler<LoginFormInput> = (data) => dispatch(login(data));

  // todo : useEffect à supprimer (remplacer par des protectedRoute)
  useEffect(() => {
    console.log(user);
    if (isLogged) {
      navigate("/", { replace: true }); // todo : à remplacer par la redirection vers le dashboard
    }
  }, [isLogged, navigate, user]);

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
          {/* // todo : Style à définir - msg d'erreur destiné à l'utilisateur à personnaliser (voir reducer) */}
          {error && <div className={styles.error}>{error}</div>}
          {/* // todo : Afficher un loader ? */}
          <button type="submit" className={styles.btn} disabled={isLoading}>
            {isLoading ? "Connexion" : "Se connecter"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
