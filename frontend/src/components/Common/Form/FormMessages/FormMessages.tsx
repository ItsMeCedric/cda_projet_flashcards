import style from './FormMessages.module.css';

interface FormMessagesProps {
  error: string | null;
  success: string | null;
}

function FormMessages({ error, success }: FormMessagesProps) {
  return (
    // todo: LS/ style
    <div className={style.messages_container}>
      {error && <div className={style.error_message}>{error}</div>}
      {success && <div className={style.success_message}>{success}</div>}
    </div>
  );
}

export default FormMessages;
