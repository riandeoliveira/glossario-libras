import styles from "./styles.module.css";

export const Button = ({ submit, children }) => (
  <button type={submit ? "submit" : "button"} className={styles.button}>
    {children}
  </button>
);
