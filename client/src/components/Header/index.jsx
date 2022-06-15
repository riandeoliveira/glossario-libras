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
  // <Navbar bg="dark" variant="dark" expand="lg">
  //   <Container>
  //     <Navbar.Toggle aria-controls="basic-navbar-nav" />
  //     <Navbar.Collapse id="basic-navbar-nav">
  //       <Nav className="me-auto">
  //         <Nav.Link>
  //           <Link to={"/aprender"} className="header-links">
  //             {" "}
  //             <FontAwesomeIcon icon={faBrain} color={"white"} /> Aprender
  //           </Link>
  //         </Nav.Link>
  //         <Nav.Link>
  //           <Link to={"/historias"} className="header-links">
  //             {" "}
  //             <FontAwesomeIcon icon={faBook} color={"white"} /> Histórias
  //           </Link>
  //         </Nav.Link>
  //         <Nav.Link>
  //           <Link to={"/sinais"} className="header-links">
  //             {" "}
  //             <FontAwesomeIcon icon={faHands} color={"white"} /> Sinais
  //           </Link>
  //         </Nav.Link>
  //         <NavDropdown
  //           title={
  //             <span>
  //               <FontAwesomeIcon icon={faGraduationCap} color={"white"} />{" "}
  //               Cursos{" "}
  //             </span>
  //           }
  //           id="basic-nav-dropdown"
  //         >
  //           <NavDropdown.Item>
  //             <FontAwesomeIcon icon={faComputer} color={"black"} />
  //             Tecnologia
  //           </NavDropdown.Item>
  //           <NavDropdown.Item>
  //             <FontAwesomeIcon icon={faMasksTheater} color={"black"} />
  //             Literatura
  //           </NavDropdown.Item>
  //           <NavDropdown.Item>
  //             <FontAwesomeIcon icon={faChildren} color={"black"} />
  //             Pedagogia
  //           </NavDropdown.Item>
  //         </NavDropdown>
  //       </Nav>
  //     </Navbar.Collapse>
  //   </Container>
  // </Navbar>
);
