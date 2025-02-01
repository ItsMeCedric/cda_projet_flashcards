import styles from './FormContainer.module.css';

interface FormContainerProps {
  children: React.ReactNode;
}

function FormContainer({ children }: FormContainerProps) {
  return (
    <div className={styles.auth_container}>
      <div className={styles.form_wrapper}>{children}</div>
    </div>
  );
}

export default FormContainer;
