import styles from "./styles.module.scss";
import { UnitsArea } from "../UnitsArea";

// Caixa contendo a área de unidades
export const UnitsBox = ({ sectionName }) => (
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
