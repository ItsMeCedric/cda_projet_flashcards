import { FieldValues, useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import FormBase from './FormBase/FormBase';
import FormContainer from './FormContainer/FormContainer';
import FormTitle from './FormTitle/FormTitle';
import FormMessages from './FormMessages/FormMessages';
import FormSubmitButton from './FormSubmitButton/FormSubmitButton';
import FormInput from './FormInput/FormInput';
import { FormFieldBase } from '../../../@types/form';
import { AsyncThunk } from '@reduxjs/toolkit';
import { useAppDispatch } from '../../../hooks/redux';
import { ZodSchema } from 'zod';

interface FormClassNames {
  formContainer?: string;
  formWrapper?: string;
  formTitle?: string;
  formBase?: string;
  inputWrapper?: string;
  input?: string;
  inputError?: string;
  messagesContainer?: string;
  messageError?: string;
  messageSuccess?: string;
  submitButton?: string;
}

// Evite l'erreur sur le type de FormFields
// eslint-disable-next-line @typescript-eslint/no-unused-vars
interface FormInputProps<T extends FieldValues> extends FormFieldBase {
  classNames?: {
    wrapper?: string;
    input?: string;
    error?: string;
  };
}

interface ReusableFormProps<T extends FieldValues, R> {
  classNames?: FormClassNames;
  title: string;
  formFields: FormInputProps<T>[];
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
  reduxAction: AsyncThunk<R, T, any>;
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

  const onSubmit: SubmitHandler<T> = (data) => dispatch(reduxAction(data));
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
