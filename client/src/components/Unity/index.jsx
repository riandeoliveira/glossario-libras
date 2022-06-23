import { Link } from "react-router-dom";
import styles from "./styles.module.scss";

export const Unity = ({ path, difficulty, image, name }) => (
  <Link to={path} className={styles.link}>
    <div className={styles.container}>
      <div className={`${styles.unity} ${styles[difficulty]}`}>
        <img src={image} alt="Unity icon" className={styles.image} />
      </div>
      <span className={styles.title}>{name}</span>
    </div>
  </Link>
);
