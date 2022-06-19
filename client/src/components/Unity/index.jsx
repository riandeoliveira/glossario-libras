import styles from "./styles.module.scss";

export const Unity = ({ difficulty, image }) => (
  <div className={styles.container}>
    <div className={`${styles.unity} ${styles[difficulty]}`}>
      <img src={image} alt="" className={styles.image} />
    </div>
    <span className={styles.title}>Nome da unidade</span>
  </div>
);
