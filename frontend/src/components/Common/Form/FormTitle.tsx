import './FormTitle.module.css';

interface FormTitleProps {
  title: string;
}

function FormTitle({ title }: FormTitleProps) {
  return <h2>{title}</h2>;
}

export default FormTitle;
