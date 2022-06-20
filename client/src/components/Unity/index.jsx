import styles from "./styles.module.scss";
import { Link } from "react-router-dom";

export const Unity = ({ name, difficulty, path, image }) => (
  <Link to={path} className={styles.link}>
    <div className={styles.container}>
      <div className={`${styles.unity} ${styles[difficulty]}`}>
        <img src={image} alt="" className={styles.image} />
      </div>
      <span className={styles.title}>{name}</span>
    </div>
  </Link>
);
