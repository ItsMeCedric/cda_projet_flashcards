import { AsyncThunk } from '@reduxjs/toolkit';
import { LoginCredentials } from '../../@types/auth';
import { UserMock } from '../../@types/user';
import { loginFormFields } from '../../constants/forms/authFormFields/loginFormFields';
import { login } from '../../store/actions/authActions';
import { loginSchema } from '../../validators/authSchema';
import ReusableForm from '../Common/Form/ReusableForm';
import { useAppSelector } from '../../hooks/redux';

/**
 *   Formulaire de connexion utilisant `ReusableForm`
 *
 * - Prend en charge le typage des champs de formulaire : `LoginCredentials`, et des données de retour : `UserMock`
 * - Prend en charge les champs de formulaire : `loginFormFields` (email, password)
 * - Valide les entrées avec `loginSchema` (Zod)
 * - Exécute `login` en tant qu'action Redux lorsqu'on soumet le formulaire
 * - Prend en charge le statut de chargement `isLoading` et affiche l'eventuel message d'erreur `error`(state auth)
 */

function LoginForm() {
  const { isLoading, error } = useAppSelector((state) => state.auth);
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
}

export default LoginForm;
