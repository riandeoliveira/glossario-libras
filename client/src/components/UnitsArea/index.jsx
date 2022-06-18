import { Unity } from "../Unity";
import units from "./units.json";
import styles from "./styles.module.scss";

export const UnitsArea = ({ sectionName }) => {
  return (
    <div className={styles.container}>
      <div className={styles.easy_container}>
        {units[sectionName].map(({ difficulty, image_url }) => (
          <>
            {difficulty === "easy" && (
              <Unity difficulty={difficulty} image={image_url} />
            )}
          </>
        ))}
      </div>
      <div className={styles.medium_hard_container}>
        {units[sectionName].map(({ difficulty, image_url }) => (
          <>
            {difficulty === "medium" && (
              <Unity difficulty={difficulty} image={image_url} />
            )}
            {difficulty === "hard" && (
              <Unity difficulty={difficulty} image={image_url} />
            )}
          </>
        ))}
      </div>
    </div>
  );
};
