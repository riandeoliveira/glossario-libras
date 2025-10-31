import styles from "./styles.module.scss";
import { UnitsList } from "../UnitsList";

// Caixa contendo a área de unidades
export const UnitsBox = ({ sectionName }) => (
  <div className={styles.container}>
    <div>
      <UnitsList sectionName={sectionName} difficultyLevel="easy" />
    </div>
    <div className={styles.medium_hard_container}>
      <UnitsList sectionName={sectionName} difficultyLevel="medium" />
      <UnitsList sectionName={sectionName} difficultyLevel="hard" />
    </div>
  </div>
);
