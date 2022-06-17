import styles from "./styles.module.scss";

export const InputBox = ({ name, email, password, message }) => (
  <div className={styles.container}>
    <label className={styles.label}>{name}</label>
    <input
      type={email ? "email" : password ? "password" : "text"}
      className="form-control"
      placeholder={message}
      required
    />
  </div>
);
