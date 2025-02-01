import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { register as registerAction } from '../../store/actions/authActions';
import { RegisterCredentialsForm } from '../../@types/auth';
import { registerSchema } from '../../validators/authSchema';
import { signInFormFields } from '../../constants/forms/authFormFields/signInFormFields';
import FormInput from '../../components/Common/Form/FormInput';

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

  const onSubmit: SubmitHandler<RegisterCredentialsForm> = (data) =>
    dispatch(registerAction(data));

  // todo : LS/ useEffect à supprimer (remplacer par des protectedRoute)
  useEffect(() => {
    console.log(user);
    if (isLogged) {
      void navigate('/', { replace: true }); // todo : LS/à remplacer par la redirection vers le dashboard
    }
  }, [isLogged, navigate, user]);

  return (
    <div className={styles.auth_container}>
      <div className={styles.form_wrapper}>
        <h2>Inscription</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          {signInFormFields.map(
            ({ label, name, type, required, placeholder }) => (
              <FormInput<RegisterCredentialsForm>
                key={name}
                label={label}
                name={name}
                type={type}
                required={required}
                placeholder={placeholder}
                error={errors[name]?.message}
                register={register}
              />
            )
          )}
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
