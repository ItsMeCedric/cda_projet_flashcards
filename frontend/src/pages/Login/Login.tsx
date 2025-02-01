import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { useForm, SubmitHandler } from 'react-hook-form';
import { login } from '../../store/actions/authActions';
import { LoginCredentials } from '../../@types/auth';

import styles from './Login.module.css';
import FormInput from '../../components/Common/Form/FormInput';

const Login = () => {
  const { register, handleSubmit } = useForm<LoginCredentials>();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { isLogged, user, isLoading, error } = useAppSelector(
    (state) => state.auth
  );

  const onSubmit: SubmitHandler<LoginCredentials> = (data) =>
    dispatch(login(data));

  // todo : LS/ useEffect à supprimer (remplacer par des protectedRoute)
  useEffect(() => {
    console.log(user);
    if (isLogged) {
      // todo : LS/ à remplacer par la redirection vers le dashboard - void pour éviter le warning (on ignore la promise, on ne tient pas compte de la valeur retournée)
      void navigate('/', { replace: true });
    }
  }, [isLogged, navigate, user]);

  return (
    <div className={styles.auth_container}>
      <div className={styles.form_wrapper}>
        <h2>Connexion</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormInput
            label="Email"
            name="email"
            type="email"
            required={true}
            placeholder="Entrez votre email"
            register={register}
          />
          <FormInput
            label="Mot de passe"
            name="password"
            type="email"
            required={true}
            placeholder="Entrez votre mot de passe"
            register={register}
          />
          {/* // todo : LS/ Style à définir - msg d'erreur destiné à l'utilisateur à personnaliser (voir reducer) */}
          {error && <div className={styles.error}>{error}</div>}
          {/* // todo : LS/ Afficher un loader ? */}
          <button type="submit" className={styles.btn} disabled={isLoading}>
            {isLoading ? 'Connexion' : 'Se connecter'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
