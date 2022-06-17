import styles from "./styles.module.scss";

export const Unity = ({ difficulty, image }) => {
  console.log(styles);

  return (
    <div className={`${styles.container} ${styles[difficulty]}`}>
      <img src={image} alt="" className={styles.image} />
    </div>
  );
};
