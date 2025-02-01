import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { register as registerAction } from '../../store/actions/authActions';
import { RegisterCredentialsForm } from '../../@types/auth';
import { registerSchema } from '../../validators/authSchema';
import { signInFormFields } from '../../constants/forms/authFormFields/signInFormFields';
import FormInput from '../../components/Common/Form/FormInput/FormInput';
import FormSubmitButton from '../../components/Common/Form/FormSubmitButton/FormSubmitButton';

import FormTitle from '../../components/Common/Form/FormTitle/FormTitle';
import FormMessages from '../../components/Common/Form/FormMessages/FormMessages';
import FormContainer from '../../components/Common/Form/FormContainer/FormContainer';

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
    <FormContainer>
      <FormTitle title="Inscription" />
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
              error={errors[name]?.message} // todo : LS/ corriger message d'erreur qui s'affiche tous
              register={register}
            />
          )
        )}
        {/* // todo : LS/ Style à définir - msg d'erreur destiné à l'utilisateur à personnaliser (voir reducer) */}
        <FormMessages error={error} success={success} />
        {/* // todo : LS/ Afficher un loader ? */}
        <FormSubmitButton
          isLoading={isLoading}
          buttonText={{
            loading: 'Inscription...',
            default: "S'inscrire",
          }}
        />
      </form>
    </FormContainer>
  );
};
export default SignIn;
