import styles from './FormSubmitButton.module.css';

interface FormSubmitButtonProps {
  isLoading: boolean;
  buttonText: {
    loading: string;
    default: string;
  };
}

function FormSubmitButton({ isLoading, buttonText }: FormSubmitButtonProps) {
  return (
    <button type="submit" className={styles.btn} disabled={isLoading}>
      {isLoading ? buttonText.loading : buttonText.default}
    </button>
  );
}

export default FormSubmitButton;
