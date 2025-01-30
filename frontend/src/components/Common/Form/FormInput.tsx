import { UseFormRegister } from "react-hook-form";
import styles from "./FormInput.module.css";

interface FormInputProps {
  label: string;
  name: string;
  type: string;
  required: boolean;
  placeholder?: string;
  classNames?: {
    wrapper?: string;
    input?: string;
    error?: string;
  };
  error?: string;
  register: UseFormRegister<FieldValues>;
}

function FormInput({ label, name, type, required, placeholder, classNames, error, register }: FormInputProps) {
  return (
    <div className={`${styles.form_group} ${classNames?.wrapper}`}>
      <label htmlFor={name}>{label}</label>
      <input
        id={name}
        className={`${styles.input} ${classNames?.input}`}
        {...register(name, { required: required })}
        type={type}
        placeholder={placeholder}
      />
      {error && <p className={`${styles.error} ${classNames?.error}`}>{error}</p>}
    </div>
  );
}

export default FormInput;
