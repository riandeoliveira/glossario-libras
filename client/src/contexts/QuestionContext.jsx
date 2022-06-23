import { createContext, useState } from "react";

// Cria um contexto para as questões.
export const QuestionContext = createContext();

export const QuestionProvider = ({ children }) => {
  // Estados da questão.
  const [percentage, setPercentage] = useState(0);
  const [index, setIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  // Lidam com os estados.
  const handlePercentage = () => setPercentage(percentage + 20);
  const handleIndex = () => setIndex(index + 1);
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  // Dados a serem exportados.
  const data = {
    percentage,
    index,
    isOpen,
    handlePercentage,
    handleIndex,
    openModal,
    closeModal,
  };

  return (
    <QuestionContext.Provider value={data}>{children}</QuestionContext.Provider>
  );
};
