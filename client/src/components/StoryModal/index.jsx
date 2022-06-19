import styles from "./styles.module.scss";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useContext } from "react";
import { ModalContext } from "../../contexts/modal";
import { Link } from "react-router-dom";

export const StoryModal = ({ path }) => {
  const { show, handleClose } = useContext(ModalContext);

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{path}</Modal.Title>
        </Modal.Header>
        <Modal.Body>Você deseja iniciar esta história?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Não
          </Button>
          <Link to={`/historias/${path}`}>
            <Button variant="primary">Iniciar</Button>
          </Link>
        </Modal.Footer>
      </Modal>
    </>
  );
};
