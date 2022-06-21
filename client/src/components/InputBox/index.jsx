import styles from "./styles.module.scss";
import { FormControl } from "react-bootstrap";

export const InputBox = ({ title, type, message }) => (
  <div className={styles.input_container}>
    <label className={styles.label}>{title}</label>
    <FormControl type={type} placeholder={message} required />
  </div>
);
