import styles from "./styles.module.scss";
import { UnitsArea } from "../UnitsArea";

export const UnitsBox = ({ sectionName }) => {
  return (
    <div className={styles.container}>
      <div>
        <UnitsArea sectionName={sectionName} difficultyLevel="easy" />
      </div>
      <div className={styles.medium_hard_container}>
        <UnitsArea sectionName={sectionName} difficultyLevel="medium" />
        <UnitsArea sectionName={sectionName} difficultyLevel="hard" />
      </div>
    </div>
  );
};
