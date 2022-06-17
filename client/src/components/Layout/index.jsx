import styles from "./styles.module.scss";

export const Layout = ({ children }) => (
  <div className={styles.layout}>{children}</div>
);
