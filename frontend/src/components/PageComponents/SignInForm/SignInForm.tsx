import { AsyncThunk } from '@reduxjs/toolkit';
import { RegisterCredentials } from '../../../@types/auth';
import { signInFormFields } from '../../../constants/forms/authFormFields/signInFormFields';
import { register as registerAction } from '../../../store/actions/authActions';
import { registerSchema } from '../../../validators/authSchema';
import ReusableForm from '../../../components/Common/ReusableForm/ReusableForm';
import { useAppSelector } from '../../../hooks/redux';

import './SignInForm.css';

/**
 *   Formulaire d'inscription utilisant `ReusableForm`
 *
 * - Prend en charge le typage des champs de formulaire : `RegisterCredentials`, et des données de retour : `void`
 * - Prend en charge les champs de formulaire : `signInFormFields` (username, email, password, confirmPassword)
 * - Valide les entrées avec `registerSchema` (Zod)
 * - Exécute `register` en tant qu'action Redux lorsqu'on soumet le formulaire
 * - Prend en charge le statut de chargement `isLoading` et affiche l'eventuel message d'erreur `error` ou de succès `success` (state auth)
 */

function SignInForm() {
  const { isLoading, error, success } = useAppSelector((state) => state.auth);
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
      reduxAction={
        registerAction as AsyncThunk<void, RegisterCredentials, object>
      }
    />
  );
}

export default SignInForm;
