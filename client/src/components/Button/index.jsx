import styles from "./styles.module.scss";

// Botão das telas de login e cadastro
export const Button = ({ submit, children }) => (
  <button type={submit ? "submit" : "button"} className={styles.button}>
    {children}
  </button>
);
