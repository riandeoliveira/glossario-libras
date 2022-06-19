import styles from "./styles.module.scss";
import { useContext } from "react";
import { ModalContext } from "../../contexts/modal";
import { StoryModal } from "../StoryModal";
import { useState } from "react";

export const StoryCard = ({ path, image, title, exp }) => {
  const { handleShow } = useContext(ModalContext);

  const [storyPath, setStoryPath] = useState();

  const handleStoryPath = (path) => {
    let element = <StoryModal path={path} />;

    setStoryPath(element);
  };

  return (
    <>
      <div className={styles.card} onClick={() => handleStoryPath(path)}>
        <img src={image} alt="" />
        <h3 className={styles.title}>{title}</h3>
        <span>+ {exp} EXP</span>
      </div>
      {storyPath !== undefined && storyPath}
    </>
  );
};
