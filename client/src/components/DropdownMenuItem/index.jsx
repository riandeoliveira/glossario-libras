import { NavDropdown } from "react-bootstrap";
import styles from "./styles.module.scss";

// Itens do menu dropdown no cabeçalho
export const DropdownMenuItem = ({ path, icon, name }) => (
  <NavDropdown.Item href={path} className={styles.item}>
    {icon}
    <span>{name}</span>
  </NavDropdown.Item>
);
