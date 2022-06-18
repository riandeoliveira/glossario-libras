import styles from "./styles.module.scss";

export const Unity = ({ difficulty, image }) => (
  <div className={`${styles.container} ${styles[difficulty]}`}>
    <img src={image} alt="" className={styles.image} />
  </div>
);
