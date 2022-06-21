import styles from "./styles.module.scss";
import ProgressBar from "react-bootstrap/ProgressBar";
import CloseButton from "react-bootstrap/CloseButton";
import { ModalBox } from "../ModalBox";
import { useContext } from "react";
import { ModalContext } from "../../contexts/modal";

export const ExerciseHeader = () => {
  const { handleShow } = useContext(ModalContext);

  return (
    <>
      <header className={styles.header}>
        <div className={styles.container}>
          <CloseButton onClick={handleShow} />
          <ProgressBar now={0} className={styles.progress_bar} />
        </div>
      </header>
      <ModalBox
        title="Tem certeza que deseja sair?"
        message="O seu progresso nesta atividade será perdido!"
        acceptOption="Sair"
        denyOption="Continuar"
      />
    </>
  );
};
