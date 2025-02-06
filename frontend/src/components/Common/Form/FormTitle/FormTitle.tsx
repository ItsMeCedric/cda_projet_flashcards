interface FormTitleProps {
  className?: string;
  title: string;
}

function FormTitle({ className, title }: FormTitleProps) {
  return <h2 className={className}>{title}</h2>;
}

export default FormTitle;
