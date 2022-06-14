import styles from "./styles.module.css";

export const InputBox = ({ name, email, password, message }) => (
  <div className={styles.input}>
    <label className={styles.label}>{name}</label>
    <input
      type={email ? "email" : password ? "password" : "text"}
      className="form-control"
      placeholder={message}
      required
    />
  </div>
);
