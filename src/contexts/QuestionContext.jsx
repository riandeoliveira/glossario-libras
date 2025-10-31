import { createContext, useState } from "react";

// Cria um contexto para as questões.
export const QuestionContext = createContext();

export const QuestionProvider = ({ children }) => {
  // Estados da questão.
  const [percentage, setPercentage] = useState(0);
  const [index, setIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [isCorrectAnswer, setIsCorrectAnswer] = useState(null);

  // Lidam com os estados.
  const handlePercentage = () => setPercentage(percentage + 20);
  const handleIndex = () => setIndex(index + 1);
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);
  const acceptAnswer = () => setIsCorrectAnswer(true);
  const denyAnswer = () => setIsCorrectAnswer(false);
  const cleanResult = () => setIsCorrectAnswer(null);

  // Dados a serem exportados.
  const data = {
    percentage,
    index,
    isOpen,
    isCorrectAnswer,
    handlePercentage,
    handleIndex,
    openModal,
    closeModal,
    acceptAnswer,
    denyAnswer,
    cleanResult,
  };

  return (
    <QuestionContext.Provider value={data}>{children}</QuestionContext.Provider>
  );
};
