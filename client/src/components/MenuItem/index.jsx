import { Link } from "react-router-dom";
import styles from "./styles.module.scss";

export const MenuItem = ({ link, icon, title }) => (
  <div className={styles.container}>
    <Link to={link} className={styles.link}>
      {icon}
      <span className={styles.title}>{title}</span>
    </Link>
  </div>
);
