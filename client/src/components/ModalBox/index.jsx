import { useContext } from "react";
import { QuestionContext } from "../../contexts/QuestionContext";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import styles from "./styles.module.scss";

export const ModalBox = () => {
  const { isOpen, closeModal } = useContext(QuestionContext);

  return (
    <Modal show={isOpen} onHide={closeModal}>
      <Modal.Header closeButton>
        <Modal.Title>Tem certeza que deseja sair?</Modal.Title>
      </Modal.Header>
      <Modal.Body>O seu progresso nesta atividade será perdido!</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={closeModal}>
          Continuar
        </Button>
        <Link to="/aprender" className={styles.link}>
          <Button variant="primary">Sair</Button>
        </Link>
      </Modal.Footer>
    </Modal>
  );
};
