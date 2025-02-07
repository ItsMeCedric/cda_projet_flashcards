interface FormMessagesProps {
  error: string | null;
  success: string | null;
  classNames?: {
    container?: string;
    error?: string;
    success?: string;
  };
}

function FormMessages({ error, success, classNames }: FormMessagesProps) {
  return (
    <div className={`${classNames?.container}`}>
      {error && <div className={` ${classNames?.error}`}>{error}</div>}
      {success && <div className={`${classNames?.success}`}>{success}</div>}
    </div>
  );
}

export default FormMessages;
