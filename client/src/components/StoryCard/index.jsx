import { Link } from "react-router-dom";
import styles from "./styles.module.scss";

// Card de história da página Histórias
export const StoryCard = ({ path, image, title, exp }) => (
  <Link to={path} className={styles.link}>
    <div className={styles.card}>
      <img src={image} alt="Histórias de Libras" />
      <h3 className={styles.title}>{title}</h3>
      <span className={styles.experience}>+ {exp} EXP</span>
    </div>
  </Link>
);
