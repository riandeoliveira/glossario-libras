import styles from "./styles.module.scss";
import { Helmet } from "react-helmet";
import { ExerciseHeader } from "../../components/ExerciseHeader";
import { GifCard } from "../../components/GifCard";
import { useContext, useState } from "react";
import { ExerciseFooter } from "../../components/ExerciseFooter";
import {
  QuestionContext,
  QuestionProvider,
} from "../../contexts/QuestionContext";

export const Test = ({ data }) => {
  const { index, handlePercentage, handleIndex } = useContext(QuestionContext);

  const handleAnswer = (answer) => {
    if (answer) {
      handlePercentage();
      handleIndex();
    }
  };

  return (
    <>
      <Helmet>
        <title>Atividade | Glossário de LIBRAS</title>
      </Helmet>
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
              {data[index].answers.map((card) => (
                <GifCard
                  gif={card.gif_path}
                  onClick={() => handleAnswer(card.right_answer)}
                />
              ))}
            </div>
          </div>
        </section>
      </main>
      <ExerciseFooter />
    </>
  );
};
