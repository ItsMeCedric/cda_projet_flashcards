import { UseFormRegister } from 'react-hook-form';
import styles from './FormInput.module.css';
import { FormFieldNames, FormFieldTypes } from '../../../@types/form';

interface FormInputProps {
  label: string;
  name: FormFieldNames; // le "name" utilisé ne pourra qu'être l'une des clés des interfaces utilisées dans les formulaires utilisant ce composant
  type: string;
  required: boolean;
  placeholder?: string;
  classNames?: {
    wrapper?: string;
    input?: string;
    error?: string;
  };
  error?: string;
  register: UseFormRegister<FormFieldTypes>;
}

function FormInput({
  label,
  name,
  type,
  required,
  placeholder,
  classNames,
  error,
  register,
}: FormInputProps) {
  return (
    <div className={`${styles.form_group} ${classNames?.wrapper}`}>
      <label htmlFor={String(name)}>{label}</label>
      <input
        id={String(name)}
        className={`${styles.input} ${classNames?.input}`}
        {...register(name, { required: required })}
        type={type}
        placeholder={placeholder}
      />
      {error && (
        <p className={`${styles.error} ${classNames?.error}`}>{error}</p>
      )}
    </div>
  );
}

export default FormInput;
