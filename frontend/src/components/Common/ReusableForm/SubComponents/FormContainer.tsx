interface FormContainerProps {
  children: React.ReactNode;
  classNames?: {
    container?: string;
    formWrapper?: string;
  };
}

function FormContainer({ children, classNames }: FormContainerProps) {
  return (
    <div className={classNames?.container}>
      <div className={classNames?.formWrapper}>{children}</div>
    </div>
  );
}

export default FormContainer;
