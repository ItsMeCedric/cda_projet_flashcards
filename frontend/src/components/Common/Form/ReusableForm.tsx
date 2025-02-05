import { FieldValues, useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import FormBase from './FormBase/FormBase';
import FormContainer from './FormContainer/FormContainer';
import FormTitle from './FormTitle/FormTitle';
import FormMessages from './FormMessages/FormMessages';
import FormSubmitButton from './FormSubmitButton/FormSubmitButton';
import FormInput from './FormInput/FormInput';
import {
  AsyncThunkConfig,
  FormClassNames,
  FormFieldBase,
} from '../../../@types/form';
import { AsyncThunk } from '@reduxjs/toolkit';
import { useAppDispatch } from '../../../hooks/redux';
import { ZodSchema } from 'zod';

/**
 *  Formulaire réutilisable
 *
 * - Prend en charge le typage des champs de formulaire et des données de retour : `T`, `R`
 * - Prend en charge les champs de formulaire : `formFields`
 * - Valide les entrées avec `schemaValidation` (Zod)
 * - Exécute `reduxAction` en tant qu'action Redux lorsqu'on soumet le formulaire
 * - Prend en charge le statut de chargement `isLoading` et affiche l'eventuel message d'erreur `message.error` ou de succès `message.success`
 *
 * @template T - Type des données du formulaire (ex: `LoginCredentials`, `RegisterCredentials`)
 * @template R - Type des données de retour (ex: `UserMock`)
 *
 * @param {object} props - Les propriétés du composant
 * @param {FormClassNames} [props.classNames] - Classes CSS pour personnaliser le formulaire (optionnel)
 * @param {string} props.title - Titre du formulaire
 * @param {FormFieldBase[]} props.formFields - Champs du formulaire
 * @param {ZodSchema<T>} props.schemaValidation - Schéma de validation Zod
 * @param {Object} props.submitButtonText - Texte du bouton de soumission
 * @param {string} props.submitButtonText.loading - Texte affiché lorsque le formulaire est en cours de soumission
 * @param {string} props.submitButtonText.default - Texte affiché par défaut sur le bouton de soumission
 * @param {boolean} props.isLoading - Statut de chargement, indique si une action est en cours d'exécution
 * @param {Object} props.message - Messages d'erreur ou de succès
 * @param {string | null} [props.message.error] - Message d'erreur (optionnel)
 * @param {string | null} [props.message.success] - Message de succès (optionnel)
 * @param {AsyncThunk<R, T, AsyncThunkConfig>} props.reduxAction - Action Redux à exécuter lors de la soumission du formulaire
 *
 * @returns {JSX.Element} - Un formulaire réutilisable et paramétrable
 *
 * @example
 * <ReusableForm<LoginCredentials, UserMock>
 *  title="Connexion"
 *  formFields={loginFormFields}
 *  schemaValidation={loginSchema}
 *  submitButtonText={{
 *    loading: 'Connexion',
 *    default: 'Se connecter',
 *  }}
 *  isLoading={isLoading}
 *  message={{ error: error, success: null }}
 *  reduxAction={login as AsyncThunk<UserMock, LoginCredentials, object>}
 * />
 *
 */

interface ReusableFormProps<T extends FieldValues, R> {
  classNames?: FormClassNames;
  title: string;
  formFields: FormFieldBase[];
  schemaValidation: ZodSchema<T>;
  submitButtonText: {
    loading: string;
    default: string;
  };
  isLoading: boolean;
  message: {
    error?: string | null;
    success?: string | null;
  };
  reduxAction: AsyncThunk<R, T, AsyncThunkConfig>;
}

function ReusableForm<T extends FieldValues, R>({
  classNames,
  title,
  formFields,
  schemaValidation,
  isLoading,
  submitButtonText,
  message,
  reduxAction,
}: ReusableFormProps<T, R>) {
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<T>({
    resolver: zodResolver(schemaValidation),
  });

  const onSubmit: SubmitHandler<T> = (data) =>
    void dispatch(reduxAction(data) as ReturnType<typeof reduxAction>);
  return (
    <FormContainer
      classNames={{
        container: classNames?.formContainer,
        formWrapper: classNames?.formWrapper,
      }}>
      <FormTitle className={classNames?.formTitle} title={title} />
      <FormBase
        className={classNames?.formBase}
        onSubmit={handleSubmit(onSubmit)}>
        {formFields.map(({ label, name, type, required, placeholder }) => (
          <FormInput<T>
            key={name}
            classNames={{
              wrapper: classNames?.inputWrapper,
              input: classNames?.input,
              error: classNames?.inputError,
            }}
            label={label}
            name={name}
            type={type}
            required={required}
            placeholder={placeholder}
            error={errors[name]?.message as string | undefined} // todo : LS/ corriger message d'erreur qui s'affiche tous
            register={register}
          />
        ))}
        {/* // todo : LS/ Style à définir - msg d'erreur destiné à l'utilisateur à personnaliser (voir reducer) */}
        <FormMessages
          classNames={{
            container: classNames?.messagesContainer,
            error: classNames?.messageError,
            success: classNames?.messageSuccess,
          }}
          error={message.error ? message.error : null}
          success={message.success ? message.success : null}
        />
        {/* // todo : LS/ Afficher un loader ? */}
        <FormSubmitButton
          className={classNames?.submitButton}
          isLoading={isLoading}
          buttonText={submitButtonText}
        />
      </FormBase>
    </FormContainer>
  );
}

export default ReusableForm;
