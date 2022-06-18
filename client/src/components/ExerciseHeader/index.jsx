import styles from "./styles.module.scss";
import ProgressBar from "react-bootstrap/ProgressBar";
import CloseButton from "react-bootstrap/CloseButton";
import { ModalBox } from "../ModalBox";

export const ExerciseHeader = () => (
  <header className={styles.header}>
    <div className={styles.container}>
      <CloseButton
        onClick={() => (
          <ModalBox
            title="Tem certeza que deseja sair?"
            message="O seu progresso nesta atividade será perdido!"
          />
        )}
      />
      <ProgressBar now={30} className={styles.progress_bar} />
    </div>
  </header>
);
