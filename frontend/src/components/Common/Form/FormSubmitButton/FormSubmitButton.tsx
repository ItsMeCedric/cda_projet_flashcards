interface FormSubmitButtonProps {
  className?: string;
  isLoading: boolean;
  buttonText: {
    loading: string;
    default: string;
  };
}

function FormSubmitButton({
  className,
  isLoading,
  buttonText,
}: FormSubmitButtonProps) {
  return (
    <button type="submit" className={`${className}`} disabled={isLoading}>
      {isLoading ? buttonText.loading : buttonText.default}
    </button>
  );
}

export default FormSubmitButton;
