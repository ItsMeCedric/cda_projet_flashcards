import style from './FormMessages.module.css';

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
    // todo: LS/ style
    <div className={`${style.messages_container} ${classNames?.container}`}>
      {error && (
        <div className={`${style.error_message} ${classNames?.error}`}>
          {error}
        </div>
      )}
      {success && (
        <div className={`${style.success_message} ${classNames?.success}`}>
          {success}
        </div>
      )}
    </div>
  );
}

export default FormMessages;
