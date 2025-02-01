import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { useForm, SubmitHandler } from 'react-hook-form';
import { login } from '../../store/actions/authActions';
import { LoginCredentials } from '../../@types/auth';
import { loginFormFields } from '../../constants/forms/authFormFields/loginFormFields';
import FormInput from '../../components/Common/Form/FormInput/FormInput';

import FormSubmitButton from '../../components/Common/Form/FormSubmitButton/FormSubmitButton';
import FormTitle from '../../components/Common/Form/FormTitle/FormTitle';
import FormMessages from '../../components/Common/Form/FormMessages/FormMessages';
import FormContainer from '../../components/Common/Form/FormContainer/FormContainer';

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
    <FormContainer>
      <FormTitle title="Connexion" />
      <form onSubmit={handleSubmit(onSubmit)}>
        {loginFormFields.map(({ label, name, type, required, placeholder }) => (
          <FormInput<LoginCredentials>
            key={name}
            label={label}
            name={name}
            type={type}
            required={required}
            placeholder={placeholder}
            register={register}
          />
        ))}
        {/* // todo : LS/ Style à définir - msg d'erreur destiné à l'utilisateur à personnaliser (voir reducer) */}
        <FormMessages error={error} success={null} />
        {/* {error && <div className={styles.error}>{error}</div>} */}
        {/* // todo : LS/ Afficher un loader ? */}
        <FormSubmitButton
          isLoading={isLoading}
          buttonText={{
            loading: 'Connexion',
            default: 'Se connecter',
          }}
        />
      </form>
    </FormContainer>
  );
};

export default Login;
