import styles from "./styles.module.scss";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { QuestionContext } from "../../contexts/QuestionContext";

export const ModalBox = ({ title, message, denyOption, acceptOption }) => {
  const { isOpen, closeModal } = useContext(QuestionContext);

  const checkPathname = () => {
    const route = location.pathname;

    if (route.includes("aprender")) return "/aprender";

    return "/historias";
  };

  return (
    <>
      <Modal show={isOpen} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{message}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeModal}>
            {denyOption}
          </Button>
          <Link to={checkPathname()} className={styles.link}>
            <Button variant="primary">{acceptOption}</Button>
          </Link>
        </Modal.Footer>
      </Modal>
    </>
  );
};
