import styles from './FormContainer.module.css';

interface FormContainerProps {
  children: React.ReactNode;
  classNames?: {
    container?: string;
    formWrapper?: string;
  };
}

function FormContainer({ children, classNames }: FormContainerProps) {
  return (
    <div className={`${styles.auth_container} ${classNames?.container}`}>
      <div className={`${styles.form_wrapper} ${classNames?.formWrapper}`}>
        {children}
      </div>
    </div>
  );
}

export default FormContainer;
