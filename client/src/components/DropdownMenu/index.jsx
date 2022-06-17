import { NavDropdown } from "react-bootstrap";
import {
  FaChild,
  FaTheaterMasks,
  FaGraduationCap,
  FaDesktop,
} from "react-icons/fa";
import styles from "./styles.module.scss";

export const DropdownMenu = () => {
  const menuTitle = (
    <span className={styles.title_container}>
      <FaGraduationCap />
      <span className={styles.title}>Cursos</span>
    </span>
  );

  return (
    <div className={styles.container}>
      <NavDropdown title={menuTitle} className={styles.menu}>
        <NavDropdown.Item href="/aprender/tecnologia" className={styles.item}>
          <FaDesktop className={styles.icon} />
          <span>Tecnologia</span>
        </NavDropdown.Item>
        <NavDropdown.Item href="/aprender/literatura" className={styles.item}>
          <FaTheaterMasks className={styles.icon} />
          <span>Literatura</span>
        </NavDropdown.Item>
        <NavDropdown.Item href="/aprender/pedagogia" className={styles.item}>
          <FaChild className={styles.icon} />
          <span>Pedagogia</span>
        </NavDropdown.Item>
      </NavDropdown>
    </div>
  );
};
