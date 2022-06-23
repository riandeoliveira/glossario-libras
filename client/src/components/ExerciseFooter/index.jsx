import { useContext } from "react";
import Button from "react-bootstrap/esm/Button";
import { QuestionContext } from "../../contexts/QuestionContext";
import styles from "./styles.module.scss";

export const ExerciseFooter = () => {
  const { handlePercentage, handleIndex } = useContext(QuestionContext);

  const handleQuestionAnswer = () => {
    handlePercentage();
    handleIndex();
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <Button primary onClick={handleQuestionAnswer}>
          Próxima pergunta
        </Button>
      </div>
    </footer>
  );
};
