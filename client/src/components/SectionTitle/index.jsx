import styles from "./styles.module.scss";

// Caixa de título de seções
export const SectionTitle = ({ title }) => (
  <div className={styles.container}>
    <div className={styles.title_container}>
      <hr className={styles.line} />
      <h2 className={styles.title}>{title}</h2>
      <hr className={styles.line} />
    </div>
  </div>
);
