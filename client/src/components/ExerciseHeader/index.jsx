import styles from "./styles.module.scss";
import ProgressBar from "react-bootstrap/ProgressBar";
import CloseButton from "react-bootstrap/CloseButton";
import { ModalBox } from "../ModalBox";
import { useContext } from "react";
import { QuestionContext } from "../../contexts/QuestionContext";

export const ExerciseHeader = () => {
  const { openModal, percentage } = useContext(QuestionContext);

  return (
    <>
      <header className={styles.header}>
        <div className={styles.container}>
          <CloseButton onClick={openModal} />
          <ProgressBar now={percentage} className={styles.progress_bar} />
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
