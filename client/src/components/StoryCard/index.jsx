import styles from "./styles.module.scss";
import { Link } from "react-router-dom";

export const StoryCard = ({ path, image, title, exp }) => {
  return (
    <>
      <Link to={path} className={styles.link}>
        <div className={styles.card}>
          <img src={image} alt="" />
          <h3 className={styles.title}>{title}</h3>
          <span>+ {exp} EXP</span>
        </div>
      </Link>
    </>
  );
};
