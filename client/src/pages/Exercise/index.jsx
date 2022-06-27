import styles from "./styles.module.scss";
import { Helmet } from "react-helmet";
import { ExerciseHeader } from "../../components/ExerciseHeader";
import { GifCard } from "../../components/GifCard";
import { useContext, useRef } from "react";
import {
  QuestionContext,
  QuestionProvider,
} from "../../contexts/QuestionContext";
import { Button } from "react-bootstrap";
import { QuestionResult } from "../../components/QuestionResult";

export const Exercise = ({ data }) => {
  const {
    index,
    handlePercentage,
    handleIndex,
    isCorrectAnswer,
    acceptAnswer,
    denyAnswer,
    cleanResult,
  } = useContext(QuestionContext);

  const onAlternativeSelected = (answer) => {
    if (answer) {
      acceptAnswer();

      footerElement.current.classList.remove(styles.wrong_answer);
      footerElement.current.classList.add(styles.right_answer);
    }

    if (answer === false) {
      denyAnswer();

      footerElement.current.classList.remove(styles.right_answer);
      footerElement.current.classList.add(styles.wrong_answer);
    }
  };

  const handleNextQuestion = () => {
    handlePercentage();
    handleIndex();
    cleanResult();

    footerElement.current.classList.remove(styles.right_answer);
    footerElement.current.classList.remove(styles.wrong_answer);
    footerElement.current.classList.add(styles.empty_answer);
  };

  const footerElement = useRef(null);

  return (
    <>
      <Helmet>
        <title>Atividade | Glossário de Libras</title>
      </Helmet>
      <div className={styles.layout}>
        <ExerciseHeader />
        <main className={styles.main}>
          <section className={styles.container}>
            <div className={styles.question_container}>
              <div className={styles.question_content}>
                <p className={styles.question}>
                  Traduza a palavra:{" "}
                  <span className={styles.word}>{data[index].word}</span>
                </p>
              </div>
            </div>
            <div className={styles.gifs_container}>
              <div className={styles.gifs}>
                {data[index].answers.map(({ gif_path, right_answer }) => (
                  <GifCard
                    gif={gif_path}
                    onClick={() => onAlternativeSelected(right_answer)}
                  />
                ))}
              </div>
            </div>
          </section>
        </main>
        <footer className={styles.footer}>
          <div className={styles.footer_container} ref={footerElement}>
            <QuestionResult />
            <Button
              primary
              className={styles.button}
              disabled={!isCorrectAnswer}
              onClick={handleNextQuestion}
            >
              Próxima pergunta
            </Button>
          </div>
        </footer>
      </div>
    </>
  );
};
