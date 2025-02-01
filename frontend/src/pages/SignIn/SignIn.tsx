import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { register as registerAction } from '../../store/actions/authActions';
import { RegisterCredentialsForm } from '../../@types/auth';
import { registerSchema } from '../../validators/authSchema';

import styles from './SignIn.module.css';

const SignIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterCredentialsForm>({
    resolver: zodResolver(registerSchema),
  });
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { isLogged, user, isLoading, success, error } = useAppSelector(
    (state) => state.auth
  );

  const onSubmit: SubmitHandler<RegisterCredentialsForm> = (data) => {
    dispatch(registerAction(data));
  };

  // todo : LS/ useEffect à supprimer (remplacer par des protectedRoute)
  useEffect(() => {
    console.log(user);
    if (isLogged) {
      navigate('/', { replace: true }); // todo : LS/à remplacer par la redirection vers le dashboard
    }
  }, [isLogged, navigate, user]);

  return (
    <div className={styles.auth_container}>
      <div className={styles.form_wrapper}>
        <h2>Inscription</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.form_group}>
            <label htmlFor={styles.register_name}>Nom d'utilisateur</label>
            <input
              {...register('username')}
              type="text"
              id="register-name"
              placeholder="Entrez votre nom"
              required
            />
            {errors.username && (
              <p className={styles.error}>{errors.username.message}</p>
            )}
          </div>
          <div className={styles.form_group}>
            <label htmlFor={styles.register_email}>Email</label>
            <input
              {...register('email', { required: true })}
              placeholder="Entrez votre email"
            />
            {errors.email && (
              <p className={styles.error}>{errors.email.message}</p>
            )}
          </div>
          <div className={styles.form_group}>
            <label htmlFor="register-password">Mot de passe</label>
            <input
              {...register('password', { required: true })}
              placeholder="Créez un mot de passe"
              type="password"
            />
            {errors.password && (
              <p className={styles.error}>{errors.password.message}</p>
            )}
          </div>
          <div className={styles.form_group}>
            <label htmlFor="confirm-password">
              Confirmation du mot de passe
            </label>
            <input
              {...register('confirmPassword', { required: true })}
              placeholder="Confirmer votre mot de passe"
              type="password"
            />
            {errors.confirmPassword && (
              <p className={styles.error}>{errors.confirmPassword.message}</p>
            )}
          </div>
          {/* // todo : LS/ Style à définir - msg d'erreur destiné à l'utilisateur à personnaliser (voir reducer) */}
          {error && <div className={styles.error}>{error}</div>}
          {success && <div className={styles.success}>{success}</div>}
          {/* // todo : LS/ Afficher un loader ? */}
          <button type="submit" className={styles.btn} disabled={isLoading}>
            {isLoading ? 'Inscription...' : "S'inscrire"}
          </button>
        </form>
      </div>
    </div>
  );
};
export default SignIn;
