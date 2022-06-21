import styles from "./styles.module.scss";
import { Helmet } from "react-helmet";
import { ExerciseHeader } from "../../components/ExerciseHeader";
import { ModalProvider } from "../../contexts/modal";
import { GifCard } from "../../components/GifCard";
import computador from "../../assets/gifs/computador.gif";
import { useState } from "react";
import { ExerciseFooter } from "../../components/ExerciseFooter";

export const Test = ({ data }) => {
  const [index, setIndex] = useState(0);

  const handleIndex = (answer, word) => {
    if (answer) {
      alert("Resposta Correta!");

      setIndex(index + 1);
    } else alert(`Resposta Errada! A opção selecionada significa: ${word}`);
  };

  return (
    <>
      <Helmet>
        <title>Atividade | Glossário de LIBRAS</title>
      </Helmet>
      <ModalProvider>
        <ExerciseHeader />
      </ModalProvider>
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
                  onClick={() => handleIndex(card.right_answer, card.gif_word)}
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
