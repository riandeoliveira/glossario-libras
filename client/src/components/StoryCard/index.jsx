import styles from "./styles.module.scss";
import { Link } from "react-router-dom";

export const StoryCard = ({ path, image, title, exp }) => (
  <div className={styles.card}>
    <Link to={path} className={styles.link}>
      <img src={image} alt="" />
      <h3 className={styles.title}>{title}</h3>
      <span>+ {exp} EXP</span>
    </Link>
  </div>
);
