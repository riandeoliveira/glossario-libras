import { useState } from "react";
import { createContext } from "react";

export const ModalContext = createContext(false);

export const ModalProvider = ({ children }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <ModalContext.Provider value={{ show, handleClose, handleShow }}>
      {children}
    </ModalContext.Provider>
  );
};
