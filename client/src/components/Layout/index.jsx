import styles from "./styles.module.scss";

// Layout das páginas de login e cadastro
export const Layout = ({ children }) => (
  <div className={styles.layout}>{children}</div>
);
