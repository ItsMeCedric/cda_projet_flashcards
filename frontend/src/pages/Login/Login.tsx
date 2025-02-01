import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { useForm, SubmitHandler } from 'react-hook-form';
import { login } from '../../store/actions/authActions';
import { LoginCredentials } from '../../@types/auth';
import { loginFormFields } from '../../constants/forms/authFormFields/loginFormFields';
import FormInput from '../../components/Common/Form/FormInput';

import styles from './Login.module.css';
import FormSubmitButton from '../../components/Common/Form/FormSubmitButton';

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
          {loginFormFields.map(
            ({ label, name, type, required, placeholder }) => (
              <FormInput<LoginCredentials>
                key={name}
                label={label}
                name={name}
                type={type}
                required={required}
                placeholder={placeholder}
                register={register}
              />
            )
          )}
          {/* // todo : LS/ Style à définir - msg d'erreur destiné à l'utilisateur à personnaliser (voir reducer) */}
          {error && <div className={styles.error}>{error}</div>}
          {/* // todo : LS/ Afficher un loader ? */}
          <FormSubmitButton
            isLoading={isLoading}
            buttonText={{
              loading: 'Connexion',
              default: 'Se connecter',
            }}
          />
        </form>
      </div>
    </div>
  );
};

export default Login;
