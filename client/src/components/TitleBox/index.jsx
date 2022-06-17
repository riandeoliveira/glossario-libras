import styles from "./styles.module.scss";

// Caixa de título e subtítulo para início de páginas
export const TitleBox = ({ title, subtitle }) => (
  <div className={styles.container}>
    <div className={styles.title_container}>
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.subtitle}>{subtitle}</p>
    </div>
  </div>
);
