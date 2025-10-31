import styles from "./styles.module.scss";
import {
  FaRegCircle,
  FaRegCheckCircle,
  FaRegTimesCircle,
} from "react-icons/fa";
import { useContext, useState } from "react";
import { QuestionContext } from "../../contexts/QuestionContext";

export const QuestionResult = () => {
  const { isCorrectAnswer } = useContext(QuestionContext);

  return (
    <div className={styles.container}>
      {isCorrectAnswer === null && (
        <>
          <FaRegCircle />
          <p className={styles.result}>Selecione uma alternativa acima.</p>
        </>
      )}
      {isCorrectAnswer && (
        <>
          <FaRegCheckCircle />
          <p className={styles.result}>Certa resposta!</p>
        </>
      )}
      {isCorrectAnswer === false && (
        <>
          <FaRegTimesCircle />
          <p className={styles.result}>Resposta incorreta!</p>
        </>
      )}
    </div>
  );
};
