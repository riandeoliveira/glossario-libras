import styles from "./styles.module.scss";
import { MenuItem } from "../MenuItem";
import { FaBrain, FaBook, FaSignLanguage, FaRegUserCircle } from "../../assets";
import { DropdownMenu } from "../DropdownMenu";

// Cabeçalho da aplicação
export const Header = () => (
  <header className={styles.header}>
    <nav className={styles.nav}>
      <MenuItem title="Aprender" link="/aprender" icon={<FaBrain />} />
      <MenuItem title="Histórias" link="/historias" icon={<FaBook />} />
      <MenuItem title="Sinais" link="/sinais" icon={<FaSignLanguage />} />
      <DropdownMenu />
      <MenuItem title="Perfil" link="/perfil" icon={<FaRegUserCircle />} />
    </nav>
  </header>
);
