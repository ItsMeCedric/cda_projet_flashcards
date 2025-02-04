import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../hooks/redux';

import { register as registerAction } from '../../store/actions/authActions';
import { RegisterCredentials } from '../../@types/auth';
import { registerSchema } from '../../validators/authSchema';
import { signInFormFields } from '../../constants/forms/authFormFields/signInFormFields';

import ReusableForm from '../../components/Common/Form/ReusableForm';
import { AsyncThunk } from '@reduxjs/toolkit';

const SignIn = () => {
  const navigate = useNavigate();
  const { isLogged, user, isLoading, success, error } = useAppSelector(
    (state) => state.auth
  );

  // todo : LS/ useEffect à supprimer (remplacer par des protectedRoute)
  useEffect(() => {
    console.log(user);
    if (isLogged) {
      void navigate('/', { replace: true }); // todo : LS/à remplacer par la redirection vers le dashboard
    }
  }, [isLogged, navigate, user]);

  return (
    <ReusableForm<RegisterCredentials, void>
      title="Inscription"
      formFields={signInFormFields}
      schemaValidation={registerSchema}
      submitButtonText={{
        loading: 'Inscription...',
        default: "S'inscrire",
      }}
      isLoading={isLoading}
      message={{ error: error, success: success }}
      reduxAction={registerAction as AsyncThunk<void, RegisterCredentials, {}>}
    />
  );
};
export default SignIn;
