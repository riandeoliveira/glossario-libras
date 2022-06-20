import { Unity } from "../Unity";
import units from "./units.json";
import styles from "./styles.module.scss";

export const UnitsArea = ({ sectionName }) => {
  return (
    <div className={styles.container}>
      <div className={styles.easy_container}>
        {units[sectionName].map(
          ({ name, difficulty, exercise_path, image_url }, i) => (
            <>
              {difficulty === "easy" && (
                <Unity
                  name={name}
                  difficulty={difficulty}
                  path={exercise_path}
                  image={image_url}
                  key={i}
                />
              )}
            </>
          )
        )}
      </div>
      <div className={styles.medium_hard_container}>
        {units[sectionName].map(
          ({ name, difficulty, exercise_path, image_url }, i) => (
            <>
              {difficulty === "medium" && (
                <Unity
                  name={name}
                  difficulty={difficulty}
                  path={exercise_path}
                  image={image_url}
                  key={i}
                />
              )}
              {difficulty === "hard" && (
                <Unity
                  name={name}
                  difficulty={difficulty}
                  path={exercise_path}
                  image={image_url}
                  key={i}
                />
              )}
            </>
          )
        )}
      </div>
    </div>
  );
};
