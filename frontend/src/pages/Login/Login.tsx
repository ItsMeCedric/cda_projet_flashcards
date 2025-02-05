import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../hooks/redux';
import { login } from '../../store/actions/authActions';
import { LoginCredentials } from '../../@types/auth';
import { loginFormFields } from '../../constants/forms/authFormFields/loginFormFields';

import ReusableForm from '../../components/Common/Form/ReusableForm';
import { loginSchema } from '../../validators/authSchema';
import { AsyncThunk } from '@reduxjs/toolkit';
import { UserMock } from '../../@types/user';

const Login = () => {
  const navigate = useNavigate();
  const { isLogged, user, isLoading, error } = useAppSelector(
    (state) => state.auth
  );

  // todo : LS/ useEffect à supprimer (remplacer par des protectedRoute)
  useEffect(() => {
    console.log(user);
    if (isLogged) {
      // todo : LS/ à remplacer par la redirection vers le dashboard - void pour éviter le warning (on ignore la promise, on ne tient pas compte de la valeur retournée)
      void navigate('/', { replace: true });
    }
  }, [isLogged, navigate, user]);

  return (
    <ReusableForm<LoginCredentials, UserMock>
      title="Connexion"
      formFields={loginFormFields}
      schemaValidation={loginSchema}
      submitButtonText={{
        loading: 'Connexion',
        default: 'Se connecter',
      }}
      isLoading={isLoading}
      message={{ error: error, success: null }}
      reduxAction={login as AsyncThunk<UserMock, LoginCredentials, object>}
    />
  );
};

export default Login;
