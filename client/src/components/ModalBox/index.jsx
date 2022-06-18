import styles from "./styles.module.scss";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useContext } from "react";
import { ModalContext } from "../../contexts/modal";
import { Link } from "react-router-dom";

export const ModalBox = ({ title, message }) => {
  const { show, handleClose } = useContext(ModalContext);

  const checkPathname = () => {
    const route = location.pathname;

    if (route.includes("aprender")) return "/aprender";

    return "/historias";
  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{message}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Continuar
          </Button>
          <Button variant="primary">
            <Link to={checkPathname()} className={styles.link}>
              Sair
            </Link>
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
