import styles from "./styles.module.scss";
import { FaGraduationCap, menuIcons } from "../../assets";
import { NavDropdown } from "react-bootstrap";
import courses from "../../data/courses.json";
import { DropdownMenuItem } from "../DropdownMenuItem";

// Menu vertical da opção Cursos no cabeçalho
export const DropdownMenu = () => {
  const menuTitle = (
    <span className={styles.title_container}>
      <FaGraduationCap className={styles.icon} />
      <span className={styles.title}>Cursos</span>
    </span>
  );

  return (
    <div className={styles.menu_item}>
      <NavDropdown title={menuTitle} className={styles.item_container}>
        {courses.map(({ name, path }, i) => (
          <DropdownMenuItem
            name={name}
            path={path}
            icon={menuIcons[i]}
            key={i}
          />
        ))}
      </NavDropdown>
    </div>
  );
};
