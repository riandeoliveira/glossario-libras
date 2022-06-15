import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBrain,
  faBook,
  faHands,
  faComputer,
  faGraduationCap,
  faMasksTheater,
  faChildren,
} from "@fortawesome/free-solid-svg-icons";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import * as S from "./styles";
import {
  FaBrain,
  FaBook,
  FaSignLanguage,
  FaGraduationCap,
} from "react-icons/fa";

export const Header = () => (
  <S.Header>
    <nav>
      <ul>
        <li>
          <Link to="/aprender">
            <FaBrain />
            <span>Aprender</span>
          </Link>
        </li>
        <li>
          <Link to="/historias">
            <FaBook />
            <span>Histórias</span>
          </Link>
        </li>
        <li>
          <Link to="/sinais">
            <FaSignLanguage />
            <span>Sinais</span>
          </Link>
        </li>
        <li>
          <Link to="/cursos">
            <FaGraduationCap />
            <span>Cursos</span>
          </Link>
        </li>
      </ul>
    </nav>
  </S.Header>
);
