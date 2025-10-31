import { useContext } from "react";
import { QuestionContext } from "../../contexts/QuestionContext";
import styles from "./styles.module.scss";
import { CloseButton, ProgressBar } from "react-bootstrap";
import { ModalBox } from "../ModalBox";

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
      <ModalBox />
    </>
  );
};
