import { FormControl } from "react-bootstrap";
import styles from "./styles.module.scss";

// Caixa de input para formulários
export const InputBox = ({ title, type, message, onSubmitData }) => {
  return (
    <div className={styles.input_container}>
      <label className={styles.label}>{title}</label>
      <FormControl
        type={type}
        placeholder={message}
        required
        {...onSubmitData}
      />
    </div>
  );
};
