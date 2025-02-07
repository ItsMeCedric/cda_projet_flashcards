import { FieldValues, Path, UseFormRegister } from 'react-hook-form';
import { FormFieldBase } from '../../../../@types/form';

// T peut être n'importe quelle interface (qui étend FieldValues). T représente la structure des champs du formulaire. T ne sert qu'à register.
// On utilise T pour que le composant soit générique et puisse être utilisé avec n'importe quelle interface
// On utilise FormFieldBase

interface FormInputProps<T extends FieldValues> extends FormFieldBase {
  classNames: {
    wrapper: string;
    label: string;
    input: string;
    errorContainer: string;
    error: string;
  };
  error?: string;
  // UseFormRegister<T> dans react-hook-form nécessite un type T qui définit les champs possibles du formulaire.
  register: UseFormRegister<T>; // T permet d'assurer que name correspond bien aux clés d'un formulaire valide.
}

function FormInput<T extends FieldValues>({
  label,
  name,
  type,
  required,
  placeholder,
  classNames,
  error,
  register,
}: FormInputProps<T>) {
  return (
    <div className={classNames.wrapper}>
      <label className={classNames.label} htmlFor={String(name)}>
        {label}
      </label>
      <input
        id={String(name)}
        className={classNames.input}
        // le "name" utilisé ne pourra qu'être l'une des clés des interfaces utilisées dans les formulaires utilisant ce composant
        // on cast name en Path<T> pour éviter l'erreur de type (string n'est pas assignable à Path<T> - field path c'est the name you have supplied)
        {...register(name as Path<T>, { required: required })}
        type={type}
        placeholder={placeholder}
      />
      <div className={classNames.errorContainer}>
        {error && <p className={classNames.error}>{error}</p>}
      </div>
    </div>
  );
}

export default FormInput;
