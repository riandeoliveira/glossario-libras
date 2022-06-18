import { Unity } from "../Unity";
import units from "./units.json";
import styles from "./styles.module.scss";

export const UnitsArea = ({ sectionName }) => (
  <div className={styles.container}>
    {units[sectionName].map(({ difficulty, image_url }) => (
      <>
        {difficulty === "easy" && (
          <div className={styles.easy_container}>
            <Unity difficulty={difficulty} image={image_url} />
          </div>
        )}
        {difficulty === "medium" && (
          <div className={styles.medium_hard_container}>
            <Unity difficulty={difficulty} image={image_url} />
          </div>
        )}
        {difficulty === "hard" && (
          <div className={styles.medium_hard_container}>
            <Unity difficulty={difficulty} image={image_url} />
          </div>
        )}
      </>
    ))}
  </div>
);
