interface FormProps {
  className?: string;
  children: React.ReactNode;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

function FormBase({ className, children, onSubmit }: FormProps) {
  return (
    <form className={className} onSubmit={onSubmit}>
      {children}
    </form>
  );
}

export default FormBase;
