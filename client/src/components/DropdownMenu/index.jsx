import styles from "./styles.module.scss";
import { FaGraduationCap } from "react-icons/fa";
import { NavDropdown } from "react-bootstrap";
import items from "./items.json";
import { menuIcons } from "../../assets";

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
        {items.map(({ path, item }, i) => (
          <NavDropdown.Item href={path} className={styles.item} key={i}>
            {menuIcons[i]}
            <span>{item}</span>
          </NavDropdown.Item>
        ))}
      </NavDropdown>
    </div>
  );
};
