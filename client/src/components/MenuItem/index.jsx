import styles from "./styles.module.scss";
import { Link } from "react-router-dom";

// Item do cabeçalho
export const MenuItem = ({ link, icon, title }) => (
  <div className={styles.menu_item}>
    <Link to={link} className={styles.link}>
      {icon}
      <span className={styles.title}>{title}</span>
    </Link>
  </div>
);
