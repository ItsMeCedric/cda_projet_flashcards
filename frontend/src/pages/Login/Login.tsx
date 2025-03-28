import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { useForm, SubmitHandler } from "react-hook-form";
import { login, resetError } from "../../store/actions/authActions";
import { LoginCredentials } from "../../@types/auth";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

import styles from "./Login.module.css";

const Login = () => {
  const { pathname } = useLocation();
  const { register, handleSubmit } = useForm<LoginCredentials>();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  let { user, isLoading, error } = useAppSelector((state) => state.auth);

  const onSubmit: SubmitHandler<LoginCredentials> = (data) => {
    dispatch(login(data));
  };

  useEffect(() => {
    dispatch(resetError());
  }, [pathname]);

  useEffect(() => {
    if (user != undefined) {
      navigate("/account", { replace: true });
    }
  }, [navigate, user]);

  return (
    <div className={styles.wrap}>
      <Header />
      <div className={styles.container}>
        <div className={styles.auth_container}>
          <div className={styles.form_wrapper}>
            <h2>Connexion</h2>
            <h3>Compte de démo :</h3>
            <p>demo@demo.com</p>
            <p>{"]Z&o]I?'<agy|lYebxv7B+,;X$<)_,]OO;^aiN@k"}</p>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className={styles.form_group}>
                <label htmlFor={styles.login_email}>Email</label>
                <input type="email" {...register("email", { required: true })} placeholder="Entrez votre email" />
              </div>
              <div className={styles.form_group}>
                <label htmlFor="login-password">Mot de passe</label>
                <input
                  type="password"
                  {...register("password", { required: true })}
                  placeholder="Entrez votre mot de passe"
                />
              </div>
              {error && <div className={styles.error}>{error}</div>}
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
