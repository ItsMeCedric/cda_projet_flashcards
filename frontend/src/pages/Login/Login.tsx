import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { useForm, SubmitHandler } from "react-hook-form";
import { login } from "../../store/actions/authActions";
import { LoginCredentials } from "../../@types/auth";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

import styles from "./Login.module.css";

const Login = () => {
  const { register, handleSubmit } = useForm<LoginCredentials>();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  let { user, isLoading, error } = useAppSelector((state) => state.auth);

  const onSubmit: SubmitHandler<LoginCredentials> = (data) => dispatch(login(data));

  // todo : LS/ useEffect à supprimer (remplacer par des protectedRoute)
  useEffect(() => {
    if (user != undefined) {
      navigate("/account", { replace: true }); // todo : LS/ à remplacer par la redirection vers le dashboard
    }
  }, [navigate, user]);

  return (
    <div className={styles.wrap}>
      <Header />
      <div className={styles.container}>
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
              {/* // todo : LS/ Style à définir - msg d'erreur destiné à l'utilisateur à personnaliser (voir reducer) */}
              {error && <div className={styles.error}>{error}</div>}
              {/* // todo : LS/ Afficher un loader ? */}
              <button type="submit" className={styles.btn} disabled={isLoading}>
                {isLoading ? "Connexion" : "Se connecter"}
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
